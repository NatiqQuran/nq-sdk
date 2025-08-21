import re
from typing import Dict, List, Optional
from dataclasses import dataclass
from parser.ast import Ast, Controller, Router


@dataclass(frozen=True)
class TypeScriptTypeDefinition:
    """TypeScript-specific type definition"""
    name: str
    properties: tuple  # property_name -> typescript_type as (name, type) pairs
    required_properties: tuple  # as tuple for immutability
    description: Optional[str] = None
    custom_type: Optional[str] = None  # For custom types like arrays
    
    @classmethod
    def create(cls, name: str, properties: Dict[str, str], required: List[str], description: str = None, custom_type: str = None):
        """Factory method to create from dict/list inputs"""
        return cls(
            name=name,
            properties=tuple(sorted(properties.items())),
            required_properties=tuple(sorted(required)),
            description=description,
            custom_type=custom_type
        )
    
    def get_properties_dict(self) -> Dict[str, str]:
        """Get properties as dictionary for template compatibility"""
        return dict(self.properties)
    
    def get_required_list(self) -> List[str]:
        """Get required properties as list for template compatibility"""
        return list(self.required_properties)


@dataclass
class TypeScriptRouter:
    router: Router
    method_name: str
    path_params: List[str]
    ts_path: str
    request_type: Optional[TypeScriptTypeDefinition] = None
    response_type: Optional[TypeScriptTypeDefinition] = None
    params_type: Optional[TypeScriptTypeDefinition] = None
    # Optional grouping key for sub-resource routers (e.g., 'ayahs')
    group_name: Optional[str] = None

# Action dataclass after TypeScriptRouter
@dataclass
class TypeScriptAction(TypeScriptRouter):
    action_name: str = ""

@dataclass
class TypeScriptController:
    """TypeScript-specific controller information"""
    controller: Controller
    routers: List[TypeScriptRouter]
    actions: Optional[List[TypeScriptAction]] = None

@dataclass
class TypeScriptAst:
    """TypeScript-specific AST with type information"""
    controllers: List[TypeScriptController]
    # Add deduplicated types set
    unique_types: set = None

    def __post_init__(self):
        if self.unique_types is None:
            self.unique_types = set()

class TypeScriptProcessor:
    """Processes the generic AST and adds TypeScript-specific information"""

    def __init__(self, ast: Ast):
        self.ast = ast
        # Simple set to track unique types and prevent duplicates
        self.unique_types: set = set()
        # Dictionary to store enum types
        self.enum_types: dict = {}
        # Set to track which schema types are actually referenced
        self.referenced_schemas: set = set()
        
    def _is_duplicate_type(self, properties: Dict[str, str], required: List[str]) -> Optional[TypeScriptTypeDefinition]:
        """Check if a type with the same properties already exists"""
        for existing_type in self.unique_types:
            if (existing_type.properties == properties and 
                existing_type.required_properties == required):
                return existing_type
        return None

    def extract_action_type(self, action, controller_name: str) -> Optional[TypeScriptTypeDefinition]:
        """Extract response type for an action (if available)"""
        # This is a placeholder; adjust as per your AST structure for actions
        if hasattr(action, 'response_schema') and action.response_schema:
            type_name = f"{controller_name.capitalize()}{action.name.capitalize()}ActionResponseData"
            return self.create_type_definition(
                type_name,
                action.response_schema,
                f"Response data for action {action.name} in {controller_name}"
            )
        return None

    def extract_action_parameters(self, action) -> tuple[Dict[str, str], List[str]]:
        """Extract parameters and required fields from an action (if available)"""
        # This is a placeholder; adjust as per your AST structure for actions
        properties = {}
        required = []
        if hasattr(action, 'parameters') and action.parameters:
            for param in action.parameters:
                param_type = self.extract_schema_type(getattr(param, 'schema', {'type': 'any'}))
                properties[param.name] = param_type
                if getattr(param, 'required', False):
                    required.append(param.name)
        return properties, required

    def get_method_name(self, router: Router) -> str:
        """Determine the method name based on HTTP method and path"""
        path = router.path
        method = router.method.lower()
        path_clean = path.rstrip('/')
        
        if method == 'get' and re.fullmatch(r"/[a-zA-Z0-9_\-]+", path_clean):
            return 'list'
        if method == 'get' and re.fullmatch(r"/[a-zA-Z0-9_\-]+/\{[a-zA-Z0-9_\-]+\}", path_clean):
            return 'retrieve'
        if method == 'post' and re.fullmatch(r"/[a-zA-Z0-9_\-]+", path_clean):
            return 'create'
        if method == 'put' and re.fullmatch(r"/[a-zA-Z0-9_\-]+/\{[a-zA-Z0-9_\-]+\}", path_clean):
            return 'update'
        if method == 'patch' and re.fullmatch(r"/[a-zA-Z0-9_\-]+/\{[a-zA-Z0-9_\-]+\}", path_clean):
            return 'partialUpdate'
        if method == 'delete' and re.fullmatch(r"/[a-zA-Z0-9_\-]+/\{[a-zA-Z0-9_\-]+\}", path_clean):
            return 'delete'
        if router.meta.operation_id:
            return router.meta.operation_id
        return f"{method}_{path_clean.strip('/').replace('/', '_').replace('{', '').replace('}', '')}"

    def extract_path_params(self, path: str) -> List[str]:
        """Extract path parameters from the path"""
        return re.findall(r"\{([a-zA-Z0-9_\-]+)\}", path)

    def typescript_path(self, path: str) -> str:
        """Convert path to TypeScript template string format"""
        return re.sub(r"\{([a-zA-Z0-9_\-]+)\}", r"${\1}", path)

    def extract_schema_type(self, schema) -> str:
        """Extract TypeScript type from OpenAPI schema"""
        if not schema:
            return "any"

        # Handle case where schema is a string (simple type)
        if isinstance(schema, str):
            if schema == "string":
                return "string"
            elif schema in ["integer", "number"]:
                return "number"
            elif schema == "boolean":
                return "boolean"
            elif schema == "array":
                return "any[]"
            elif schema == "object":
                return "object"
            else:
                return "any"
        
        # Handle case where schema is a dictionary
        if not isinstance(schema, dict):
            return "any"
        
        # Handle $ref references first
        if "$ref" in schema:
            ref = schema["$ref"]
            if ref.startswith("#/components/schemas/"):
                # Extract the type name from the reference
                type_name = ref.replace("#/components/schemas/", "")
                # Format the type name to be a valid TypeScript type
                return self.format_schema_name(type_name)
            else:
                return "any"
        
        # Handle enum types first (before checking schema matches)
        if "enum" in schema:
            # Only include values that are not None, not 'none', and not '' (case-insensitive)
            filtered = [i for i in schema['enum'] if i is not None and (not (isinstance(i, str) and (i.lower() == 'none' or i == '')))]
            if filtered:
                return f"{' | '.join(f"'{i}'" for i in filtered)}"
        
        # Check if this schema matches any of the known schemas
        # This handles cases where $ref was already resolved
        if hasattr(self, 'ast') and hasattr(self.ast, 'schemas'):
            for schema_name, schema_data in self.ast.schemas.items():
                if schema == schema_data:
                    return self.format_schema_name(schema_name)
        
        schema_type = schema.get("type", "object")
        # Handle oneOf with enums (union type)
        if "oneOf" in schema and isinstance(schema["oneOf"], list):
            union_values = []
            for sub_schema in schema["oneOf"]:
                # If sub_schema is enum, add all values except None, 'none', or ''
                if isinstance(sub_schema, dict) and "enum" in sub_schema:
                    for val in sub_schema["enum"]:
                        if val is None or (isinstance(val, str) and (val.lower() == 'none' or val == '')):
                            continue
                        else:
                            union_values.append(f"'{val}'")
                else:
                    # Fallback to type extraction
                    t = self.extract_schema_type(sub_schema)
                    if t != "''":
                        union_values.append(t)
            # Remove duplicates
            union_values = list(dict.fromkeys(union_values))
            return " | ".join(union_values) if union_values else "any"

        if schema_type == "string":
            if schema.get("format") == "uuid":
                return "string"  # UUID type
            return "string"
        elif schema_type == "integer":
            return "number"
        elif schema_type == "number":
            return "number"
        elif schema_type == "boolean":
            return "boolean"
        elif schema_type == "array":
            items = schema.get("items", {})
            item_type = self.extract_schema_type(items)
            return f"{item_type}[]"
        elif schema_type == "object":
            return "object"
        else:
            return "any"

    def extract_properties_from_schema(self, schema) -> tuple[Dict[str, str], List[str]]:
        """Extract properties and required fields from OpenAPI schema"""
        properties = {}
        required = []
        
        if not schema or not isinstance(schema, dict):
            return properties, required
        
        # Handle array schemas (like paginated responses)
        if schema.get("type") == "array" and "items" in schema:
            # This is likely a paginated response, generate standard pagination structure
            items_schema = schema["items"]
            item_type = self.extract_schema_type(items_schema)
            
            properties = {
                "count": "number",
                "next": "string | null",
                "previous": "string | null", 
                "results": f"{item_type}[]"
            }
            required = ["count", "results"]
            return properties, required
        
        # Handle regular object schemas
        if "properties" not in schema:
            return properties, required
        
        required_fields = schema.get("required", [])
        
        for prop_name, prop_schema in schema["properties"].items():
            prop_type = self.extract_schema_type(prop_schema)
            properties[prop_name] = prop_type
            if prop_name in required_fields:
                required.append(prop_name)
        
        return properties, required

    def create_type_definition(self, name: str, schema, description: str = None, custom_type: Optional[str] = None) -> TypeScriptTypeDefinition:
        """Create a TypeScript type definition from OpenAPI schema"""
        properties, required = self.extract_properties_from_schema(schema)
        
        # Check if we already have a type with the same properties
        existing_type = self._is_duplicate_type(properties, required)
        if existing_type:
            return existing_type
        
        # Create new type and add to unique set
        new_type = TypeScriptTypeDefinition.create(
            name=name,
            properties=properties,
            required=required,
            description=description,
            custom_type=custom_type
        )
        self.unique_types.add(new_type)
        return new_type

    def extract_request_type(self, router: Router, controller_name: str, action_name: Optional[str] = None) -> Optional[TypeScriptTypeDefinition]:
        """Extract request type from router or action"""
        if not router.request_body or not router.request_body.content:
            return None
        # Find JSON content
        json_content = None
        for content in router.request_body.content:
            if content.content_type == "application/json":
                json_content = content
                break
        if not json_content:
            return None
        if action_name:
            type_name = f"{controller_name.capitalize()}{action_name}RequestData"
        else:
            # Use the same method name logic as controller methods
            method_name = self.get_method_name(router)
            type_name = f"{controller_name.capitalize()}{method_name.capitalize()}RequestData"
        return self.create_type_definition(
            type_name,
            json_content.schema,
            f"Request data for {router.method} {router.path}"
        )

    def extract_response_type(self, router: Router, controller_name: str, action_name: Optional[str] = None) -> Optional[TypeScriptTypeDefinition]:
        """Extract response type from router or action"""
        if not router.responses:
            return None
        # Find 200/201 response
        success_response = None
        for response in router.responses:
            if response.status_code in ["200", "201"]:
                success_response = response
                break
        if not success_response or not success_response.content:
            return None
        # Find JSON content
        json_content = None
        for content in success_response.content:
            if content.content_type == "application/json":
                json_content = content
                break
        if not json_content:
            return None
        
        # Handle array responses directly (like PaginatedMushafList)
        if json_content.schema.get("type") == "array" and "items" in json_content.schema:
            # For array responses, return the array type directly
            items_schema = json_content.schema["items"]
            item_type = self.extract_schema_type(items_schema)
            # Generate the array type directly since types are now local
            array_type = f"{item_type}[]"
            
            if action_name:
                type_name = f"{controller_name.capitalize()}{action_name}ResponseData"
            else:
                # Use the same method name logic as controller methods
                method_name = self.get_method_name(router)
                type_name = f"{controller_name.capitalize()}{method_name.capitalize()}ResponseData"
            
            return self.create_type_definition(
                type_name,
                {"type": "array", "items": {"type": "any"}},  # Simplified schema for array type
                f"Response data for {router.method} {router.path}",
                custom_type=array_type  # Use the actual array type
            )
        
        # Handle regular object responses
        if action_name:
            type_name = f"{controller_name.capitalize()}{action_name}ResponseData"
        else:
            # Use the same method name logic as controller methods
            method_name = self.get_method_name(router)
            type_name = f"{controller_name.capitalize()}{method_name.capitalize()}ResponseData"
        return self.create_type_definition(
            type_name,
            json_content.schema,
            f"Response data for {router.method} {router.path}"
        )

    def extract_params_type(self, router: Router, controller_name: str, action_name: Optional[str] = None) -> Optional[TypeScriptTypeDefinition]:
        """Extract query parameters type from router or action"""
        query_params = []
        for param in router.parameters:
            if param.position == "query":
                query_params.append(param)
        if not query_params:
            return None
        properties = {}
        required = []
        for param in query_params:
            param_type = self.extract_schema_type({
                "type": param.schema.type,
                "format": param.schema.format
            })
            properties[param.name] = param_type
            if param.required:
                required.append(param.name)
        if not properties:
            return None
        if action_name:
            type_name = f"{controller_name.capitalize()}{action_name}RequestParams"
        else:
            # Use the same method name logic as controller methods
            method_name = self.get_method_name(router)
            type_name = f"{controller_name.capitalize()}{method_name.capitalize()}RequestParams"
        # Create a schema-like structure for params to enable deduplication
        params_schema = {
            "type": "object",
            "properties": properties,
            "required": required
        }
        
        return self.create_type_definition(
            type_name,
            params_schema,
            f"Query parameters for {router.method} {router.path}"
        )

    def process(self) -> TypeScriptAst:
        """Process the AST and create TypeScript-specific AST, including actions and deduped type definitions"""
        ts_controllers = []

        # First, extract all types from schemas
        self.extract_schema_types()

        for controller in self.ast.controllers:
            ts_routers = []
            for router in controller.routers:
                method_name = self.get_method_name(router)
                path_params = self.extract_path_params(router.path)
                ts_path = self.typescript_path(router.path)

                # Derive subresource group name from path (first non-param segment after controller base)
                group_name: Optional[str] = None
                try:
                    segments = router.path.strip('/').split('/')
                    if segments and segments[0] == controller.name:
                        # Find first static segment after base
                        for seg in segments[1:]:
                            if not seg.startswith('{') and seg != '':
                                group_name = seg
                                break
                except Exception:
                    group_name = None

                # Extract types
                request_type = self.extract_request_type(router, controller.name)
                response_type = self.extract_response_type(router, controller.name)
                params_type = self.extract_params_type(router, controller.name)

                ts_router = TypeScriptRouter(
                    router=router,
                    method_name=method_name,
                    path_params=path_params,
                    ts_path=ts_path,
                    request_type=request_type,
                    response_type=response_type,
                    params_type=params_type,
                    group_name=group_name
                )
                ts_routers.append(ts_router)

            # --- Extract actions as routers if present ---
            ts_actions = []
            for action in controller.actions:
                # Derive action_name from path: e.g., /mushafs/import -> Import
                path = getattr(action, 'path', None) or (action.router.path if hasattr(action, 'router') and hasattr(action.router, 'path') else None)
                if path:
                    action_name = path.rstrip('/').split('/')[-1].capitalize()
                else:
                    action_name = getattr(action, 'name', None) or 'Action'
                method_name = getattr(action, 'name', None) or self.get_method_name(action)
                path_params = self.extract_path_params(getattr(action, 'path', '')) if hasattr(action, 'path') else []
                ts_path = self.typescript_path(getattr(action, 'path', '')) if hasattr(action, 'path') else ''
                request_type = self.extract_request_type(action, controller.name, action_name) if hasattr(action, 'request_body') else None
                response_type = self.extract_response_type(action, controller.name, action_name)
                params_type = self.extract_params_type(action, controller.name, action_name) if hasattr(action, 'parameters') else None
                ts_action = TypeScriptAction(
                    router=action,
                    method_name=method_name,
                    path_params=path_params,
                    ts_path=ts_path,
                    request_type=request_type,
                    response_type=response_type,
                    params_type=params_type,
                    action_name=action_name
                )
                ts_actions.append(ts_action)

            ts_controller = TypeScriptController(
                controller=controller,
                routers=ts_routers,
                actions=ts_actions,
            )
            ts_controllers.append(ts_controller)

        return TypeScriptAst(
            controllers=ts_controllers,
            unique_types=self.unique_types
        )
    
    def track_referenced_schemas(self):
        """Track which schemas are actually referenced in $ref statements"""
        if not hasattr(self.ast, 'schemas') or not self.ast.schemas:
            return
        
        # Look through all schemas to find $ref references
        for schema_name, schema_data in self.ast.schemas.items():
            if isinstance(schema_data, dict):
                self._find_refs_in_schema(schema_data)
        
        # Only include core schema types that are commonly referenced
        # These are the actual OpenAPI schema types, not controller-specific ones
        core_schemas = {
            'Mushaf', 'Surah', 'Ayah', 'AyahTranslation', 'RecitationList', 
            'Notification', 'TranslationList', 'Word', 'Phrase', 'Group', 'User'
        }
        
        # Clear the referenced_schemas set and only add core schemas
        self.referenced_schemas.clear()
        for core_schema in core_schemas:
            if core_schema in self.ast.schemas:
                self.referenced_schemas.add(core_schema)
        
        # Extract enum types from object properties
        self._extract_enum_types_from_properties()
    
    def _find_refs_in_schema(self, schema):
        """Recursively find $ref statements in a schema"""
        if isinstance(schema, dict):
            for key, value in schema.items():
                if key == "$ref" and isinstance(value, str):
                    if value.startswith("#/components/schemas/"):
                        ref_name = value.replace("#/components/schemas/", "")
                        self.referenced_schemas.add(ref_name)
                elif isinstance(value, (dict, list)):
                    self._find_refs_in_schema(value)
        elif isinstance(schema, list):
            for item in schema:
                if isinstance(item, (dict, list)):
                    self._find_refs_in_schema(item)
    
    def _extract_enum_types_from_properties(self):
        """Extract enum types from object properties and create type aliases"""
        if not hasattr(self.ast, 'schemas') or not self.ast.schemas:
            return
        
        for schema_name, schema_data in self.ast.schemas.items():
            if isinstance(schema_data, dict) and "properties" in schema_data:
                for prop_name, prop_schema in schema_data["properties"].items():
                    if isinstance(prop_schema, dict) and "enum" in prop_schema:
                        # Create a type name for this enum
                        enum_type_name = f"{schema_name}{prop_name.capitalize()}Enum"
                        enum_values = [i for i in prop_schema['enum'] if i is not None and (not (isinstance(i, str) and (i.lower() == 'none' or i == '')))]
                        if enum_values:
                            enum_type = " | ".join(f"'{i}'" for i in enum_values)
                            self.enum_types[enum_type_name] = enum_type
                            # Add to referenced schemas so it gets generated
                            self.referenced_schemas.add(enum_type_name)

    def extract_schema_types(self):
        """Extract all types from schemas stored in the AST"""
        if not hasattr(self.ast, 'schemas') or not self.ast.schemas:
            return

        # Define only the actual OpenAPI schema types (not controller-specific ones)
        core_schema_names = {
            'Mushaf', 'Surah', 'Ayah', 'AyahTranslation', 'RecitationList', 
            'Notification', 'TranslationList', 'Word', 'Phrase', 'Group', 'User'
        }
        
        # Only process core schema types
        for schema_name, schema_data in self.ast.schemas.items():
            if schema_name not in core_schema_names:
                continue
                
            # Check if this is an enum schema
            if isinstance(schema_data, dict) and "enum" in schema_data and "type" in schema_data:
                enum_values = [i for i in schema_data['enum'] if i is not None and (not (isinstance(i, str) and (i.lower() == 'none' or i == '')))]
                if enum_values:
                    enum_type = " | ".join(f"'{i}'" for i in enum_values)
                    self.enum_types[schema_name] = enum_type
                continue

            # Create a type definition for each regular schema
            type_name = self.format_schema_name(schema_name)
            self.create_type_definition(
                type_name,
                schema_data,
                f"Schema definition for {schema_name}"
            )
        
        # Extract enum types from object properties
        self._extract_enum_types_from_properties()
    
    def format_schema_name(self, schema_name: str) -> str:
        """Format schema name to be a valid TypeScript type name"""
        # Remove common suffixes and format as PascalCase
        if schema_name.endswith('SerializerView'):
            schema_name = schema_name[:-16]  # Remove 'SerializerView'
        elif schema_name.endswith('Serializer'):
            schema_name = schema_name[:-11]  # Remove 'Serializer'
        elif schema_name.endswith('View'):
            schema_name = schema_name[:-4]   # Remove 'View'
        
        # Convert to PascalCase - handle camelCase properly
        # Split by underscores first, then handle camelCase
        if '_' in schema_name:
            words = schema_name.split('_')
            return ''.join(word.capitalize() for word in words)
        else:
            # Handle camelCase: split on capital letters and capitalize each part
            import re
            # Use positive lookahead to split on capital letters
            words = re.findall(r'[A-Z][a-z]*|[a-z]+', schema_name)
            return ''.join(word.capitalize() for word in words)
    
    def get_unique_types(self) -> List[TypeScriptTypeDefinition]:
        """Get all unique types without duplicates"""
        return list(self.unique_types)
