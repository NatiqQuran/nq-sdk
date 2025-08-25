from typing import List, Optional, Dict, Any
from dataclasses import dataclass, field
from .schema_model import SchemaModel, Controller, Router, RouterResponse, RouterParameter

@dataclass
class SchemaTypeField:
    name: str
    type: str
    required: bool
    enum_values: Optional[List[str]] = None
    object_properties: Optional[Dict[str, Any]] = None
    array_item_type: Optional[str] = None
    read_only: bool = False
    write_only: bool = False

    @classmethod
    def create_simple(cls, name: str, type: str, required: bool = True, read_only: bool = False, write_only: bool = False) -> 'SchemaTypeField':
        """Create a simple type field"""
        return cls(name=name, type=type, required=required, read_only=read_only, write_only=write_only)

    @classmethod
    def create_enum(cls, name: str, enum_values: List[str], required: bool = True, read_only: bool = False, write_only: bool = False) -> 'SchemaTypeField':
        """Create an enum type field"""
        return cls(name=name, type="enum", required=required, enum_values=enum_values, read_only=read_only, write_only=write_only)

    @classmethod
    def create_object(cls, name: str, properties: Dict[str, Any], required: bool = True, read_only: bool = False, write_only: bool = False) -> 'SchemaTypeField':
        """Create an object type field"""
        return cls(name=name, type="object", required=required, object_properties=properties, read_only=read_only, write_only=write_only)

    @classmethod
    def create_array(cls, name: str, item_type: str, required: bool = True, read_only: bool = False, write_only: bool = False) -> 'SchemaTypeField':
        """Create an array type field"""
        return cls(name=name, type="array", required=required, array_item_type=item_type, read_only=read_only, write_only=write_only)

    @property
    def is_enum(self) -> bool:
        """Check if this field is an enum type"""
        return self.type == "enum"

    @property
    def is_object(self) -> bool:
        """Check if this field is an object type"""
        return self.type == "object"

    @property
    def is_array(self) -> bool:
        """Check if this field is an array type"""
        return self.type == "array"

    @property
    def is_simple_type(self) -> bool:
        """Check if this field is a simple type"""
        return self.type in ["string", "number", "boolean"]


@dataclass
class SchemaType:
    name: str
    fields: List[SchemaTypeField] = field(default_factory=list)


@dataclass
class TypedController(Controller):
    types: List[SchemaType] = field(default_factory=list)

    def add_type(self, schema_type: SchemaType):
        """Add a schema type to this controller"""
        # Check if a type with the same name already exists
        if not any(existing_type.name == schema_type.name for existing_type in self.types):
            self.types.append(schema_type)



@dataclass
class TypedSchemaModel(SchemaModel):
    controllers: List[TypedController] = field(default_factory=list)


class TypedSchemaModelParser:
    """Simple parser for creating typed schema models"""

    def __init__(self, schema_model: SchemaModel):
        self.schema_model = schema_model
        # Import TypeScriptProcessor for naming convention
        from codegen.typescript.typescript_processor import TypeScriptProcessor
        # Create a temporary processor instance for naming utilities
        # We'll create a minimal TypedSchemaModel for this purpose
        temp_model = TypedSchemaModel()
        self.ts_processor = TypeScriptProcessor(temp_model)

    def parse(self) -> TypedSchemaModel:
        """Parse the entire schema model into a typed schema model"""
        # Create TypedSchemaModel and copy schemas from original
        typed_model = TypedSchemaModel(
            controllers=[],
            schemas=self.schema_model.schemas.copy()
        )

        # Parse controllers
        for controller in self.schema_model.controllers:
            typed_controller = self.parse_controller(controller)

            # Create schema types for this controller based on its types
            self._create_schema_types_for_controller(typed_controller, self.schema_model.schemas)

            typed_model.add_controller(typed_controller)

        return typed_model

    def _create_schema_types_for_controller(self, controller: TypedController, available_schemas: Dict[str, Any]):
        """Create schema type definitions for a controller based on its response/request types"""
        for schema_type in controller.types:
            matching_schema_name = self._find_matching_schema(schema_type, available_schemas)
            if matching_schema_name:
                # Create the actual schema type definition
                schema_definition = self._create_schema_definition(matching_schema_name, available_schemas)
                if schema_definition and schema_definition not in controller.types:
                    controller.add_type(schema_definition)

        # Also check for referenced types in the schema definitions
        self._check_for_referenced_types(controller, available_schemas)

    def _check_for_referenced_types(self, controller: TypedController, available_schemas: Dict[str, Any]):
        """Check for types referenced within schema definitions"""
        for schema_type in controller.types:
            for field in schema_type.fields:
                # Check for array fields with item references
                if field.is_array and field.array_item_type and field.array_item_type in available_schemas:
                    # Found a referenced type that's an array item
                    if field.array_item_type not in [t.name for t in controller.types]:
                        schema_definition = self._create_schema_definition(field.array_item_type, available_schemas)
                        if schema_definition:
                            controller.add_type(schema_definition)

                # Check for object fields that might have nested references
                elif field.is_object and field.object_properties:
                    self._check_object_field_references(field.object_properties, controller, available_schemas)

    def _check_object_field_references(self, object_properties: Dict[str, Any], controller: TypedController, available_schemas: Dict[str, Any]):
        """Check for references within object field properties"""
        for prop_name, prop_schema in object_properties.items():
            if isinstance(prop_schema, dict):
                # Check for $ref in the property
                if '$ref' in prop_schema:
                    ref_path = prop_schema['$ref']
                    if ref_path.startswith('#/components/schemas/'):
                        schema_name = ref_path.split('/')[-1]
                        if schema_name in available_schemas and schema_name not in [t.name for t in controller.types]:
                            schema_definition = self._create_schema_definition(schema_name, available_schemas)
                            if schema_definition:
                                controller.add_type(schema_definition)

                # Check for array items with $ref
                elif prop_schema.get('type') == 'array' and 'items' in prop_schema:
                    items = prop_schema['items']
                    if isinstance(items, dict) and '$ref' in items:
                        ref_path = items['$ref']
                        if ref_path.startswith('#/components/schemas/'):
                            schema_name = ref_path.split('/')[-1]
                            if schema_name in available_schemas and schema_name not in [t.name for t in controller.types]:
                                schema_definition = self._create_schema_definition(schema_name, available_schemas)
                                if schema_definition:
                                    controller.add_type(schema_definition)



    def _find_matching_schema(self, schema_type: SchemaType, available_schemas: Dict[str, Any]) -> Optional[str]:
        """Find if a schema type matches any available schema by structure"""
        if not available_schemas:
            return None

        import re

        # For retrieve responses: ExtractResourceRetrieveResponseData -> ResourceDetail or Resource
        if 'RetrieveResponseData' in schema_type.name:
            match = re.match(r'(.+?)RetrieveResponseData', schema_type.name)
            if match:
                resource_plural = match.group(1)  # e.g., "Surahs"
                resource_singular = resource_plural.rstrip('s')  # e.g., "Surah"

                # Try different schema naming patterns
                candidates = [
                    f"{resource_singular}Detail",  # SurahDetail
                    resource_singular,             # Surah
                    f"{resource_plural}",          # Surahs (less likely)
                ]

                for candidate in candidates:
                    if candidate in available_schemas:
                        return candidate

        # For create requests: ExtractResourceCreateRequestData -> Resource or ResourceAdd
        elif 'CreateRequestData' in schema_type.name:
            match = re.match(r'(.+?)CreateRequestData', schema_type.name)
            if match:
                resource_plural = match.group(1)  # e.g., "Ayahs"
                resource_singular = resource_plural.rstrip('s')  # e.g., "Ayah"

                # Try different schema naming patterns
                candidates = [
                    f"{resource_singular}Add",     # AyahAdd
                    resource_singular,             # Ayah
                    f"{resource_plural}",          # Ayahs
                ]

                for candidate in candidates:
                    if candidate in available_schemas:
                        return candidate

        return None

    def _create_schema_definition(self, schema_name: str, available_schemas: Dict[str, Any]) -> Optional[SchemaType]:
        """Create a SchemaType from an available schema definition"""
        if schema_name not in available_schemas:
            return None

        schema_data = available_schemas[schema_name]
        if not isinstance(schema_data, dict):
            return None

        # Create the schema type from the raw schema data
        schema_type = self._create_type_from_raw_schema(schema_data, schema_name)

        # After creating the schema type, check if any of its fields reference other schemas
        if schema_type:
            for field in schema_type.fields:
                if field.is_array and field.array_item_type and field.array_item_type in available_schemas:
                    # This field references another schema - we need to also create that schema
                    # But we can't add it here because we don't have access to the controller
                    # We'll handle this in the calling code
                    pass

        return schema_type

    def _create_type_from_raw_schema(self, schema_data: Dict[str, Any], type_name: str) -> SchemaType:
        """Create a SchemaType from raw schema data"""
        fields = []

        properties = schema_data.get('properties', {})
        required_fields = schema_data.get('required', [])

        for prop_name, prop_schema in properties.items():
            temp_field = self._get_field_type_from_schema(prop_schema)
            # Create a proper field with the correct name and required status
            if temp_field.is_enum:
                field = SchemaTypeField.create_enum(prop_name, temp_field.enum_values or [], prop_name in required_fields, temp_field.read_only, temp_field.write_only)
            elif temp_field.is_object:
                field = SchemaTypeField.create_object(prop_name, temp_field.object_properties or {}, prop_name in required_fields, temp_field.read_only, temp_field.write_only)
            elif temp_field.is_array:
                field = SchemaTypeField.create_array(prop_name, temp_field.array_item_type or 'any', prop_name in required_fields, temp_field.read_only, temp_field.write_only)
            else:
                field = SchemaTypeField.create_simple(prop_name, temp_field.type, prop_name in required_fields, temp_field.read_only, temp_field.write_only)

            fields.append(field)

        return SchemaType(name=str(type_name), fields=fields)

    def _get_field_type_from_schema(self, prop_schema: Dict[str, Any]) -> SchemaTypeField:
        """Get field type from a property schema"""
        # Extract readOnly and writeOnly properties first
        read_only = prop_schema.get('readOnly', False)
        write_only = prop_schema.get('writeOnly', False)

        if 'type' not in prop_schema:
            # Handle cases like allOf with $ref where type is not directly specified
            if 'allOf' in prop_schema:
                return SchemaTypeField.create_simple('object', 'object', read_only=read_only, write_only=write_only)
            elif '$ref' in prop_schema:
                return SchemaTypeField.create_simple('object', 'object', read_only=read_only, write_only=write_only)
            else:
                return SchemaTypeField.create_simple('unknown', 'unknown', read_only=read_only, write_only=write_only)

        prop_type = prop_schema['type']
        has_enum = 'enum' in prop_schema
        has_properties = 'properties' in prop_schema

        if has_enum:
            enum_values = []
            for enum_value in prop_schema['enum']:
                if enum_value is None:
                    enum_values.append('null')
                elif enum_value == '':
                    enum_values.append('""')
                elif isinstance(enum_value, str):
                    enum_values.append(f'"{enum_value}"')
                else:
                    enum_values.append(str(enum_value))
            return SchemaTypeField.create_enum(str('temp'), enum_values, read_only=read_only, write_only=write_only)

        if prop_type == 'array':
            items = prop_schema.get('items', {})
            if isinstance(items, dict):
                # Check if items has a $ref (schema reference)
                if '$ref' in items:
                    # Extract schema name from reference path like "#/components/schemas/AyahInSurah"
                    ref_path = items['$ref']
                    if ref_path.startswith('#/components/schemas/'):
                        item_type = ref_path.split('/')[-1]  # Get the last part after '/'
                    else:
                        item_type = 'object'  # Fallback for other reference formats
                elif 'properties' in items:
                    # This is an embedded schema object, try to identify it by comparing with known schemas
                    embedded_schema_name = self._identify_embedded_schema(items)
                    if embedded_schema_name:
                        item_type = embedded_schema_name
                    else:
                        item_type = 'object'
                elif 'type' in items:
                    item_type = items['type']
                    if item_type == 'integer':
                        item_type = 'number'
                else:
                    item_type = 'any'
                return SchemaTypeField.create_array(str('temp'), item_type, read_only=read_only, write_only=write_only)
            return SchemaTypeField.create_array(str('temp'), 'any', read_only=read_only, write_only=write_only)

        if has_properties:
            return SchemaTypeField.create_object(str('temp'), prop_schema['properties'], read_only=read_only, write_only=write_only)

        # Simple type - map OpenAPI types to TypeScript types
        type_mapping = {
            'integer': 'number',
            'number': 'number',
            'string': 'string',
            'boolean': 'boolean'
        }
        ts_type = type_mapping.get(prop_type, prop_type)
        return SchemaTypeField.create_simple(str('temp'), ts_type, read_only=read_only, write_only=write_only)

    def parse_controller(self, controller: Controller) -> TypedController:
        """Parse a controller into a typed controller"""
        typed_controller = TypedController(
            name=controller.name,
            routers=controller.routers.copy(),
            actions=controller.actions.copy() if controller.actions else []
        )

        # Extract types from request bodies and responses
        for router in controller.routers:
            # Add parameter types if present
            if router.parameters:
                param_types = self.create_parameter_types(router)
                for param_type in param_types:
                    typed_controller.add_type(param_type)

            # Add request body type if present
            if router.request_body:
                request_type = self.create_request_type(router)
                if request_type:
                    typed_controller.add_type(request_type)

            # Add response types if present
            if router.responses:
                for response in router.responses:
                    response_type = self.create_response_type(router, response)
                    if response_type:
                        typed_controller.add_type(response_type)

        # Extract types from actions (same as routers)
        for action in controller.actions:
            # Add parameter types if present
            if hasattr(action, 'parameters') and action.parameters:
                param_types = self.create_parameter_types(action)
                for param_type in param_types:
                    typed_controller.add_type(param_type)

            # Add request body type if present
            if hasattr(action, 'request_body') and action.request_body:
                request_type = self.create_request_type(action)
                if request_type:
                    typed_controller.add_type(request_type)

            # Add response types if present
            if hasattr(action, 'responses') and action.responses:
                for response in action.responses:
                    response_type = self.create_response_type(action, response)
                    if response_type:
                        typed_controller.add_type(response_type)

        # Extract types from sub-resource routers (like ayahs_breakers) the same way as actions
        for router in controller.routers:
            # Check if this is a sub-resource router by examining the path pattern
            # Pattern: /resource/{uuid}/subresource/ or /resource/{uuid}/subresource/{id}/
            path_parts = router.path.strip('/').split('/')
            if (len(path_parts) >= 3 and
                path_parts[1].startswith('{') and path_parts[1].endswith('}') and
                not path_parts[2].startswith('{')):
                # This is a sub-resource router like /takhtits/{uuid}/ayahs_breakers/
                # Add parameter types if present
                if router.parameters:
                    param_types = self.create_parameter_types(router)
                    for param_type in param_types:
                        typed_controller.add_type(param_type)

                # Add request body type if present
                if router.request_body:
                    request_type = self.create_request_type(router)
                    if request_type:
                        typed_controller.add_type(request_type)

                # Add response types if present
                if router.responses:
                    for response in router.responses:
                        response_type = self.create_response_type(router, response)
                        if response_type:
                            typed_controller.add_type(response_type)

        return typed_controller

    def create_request_type(self, router: Router) -> Optional[SchemaType]:
        """Create a SchemaType from request body"""
        if not router.request_body or not router.request_body.content:
            return None

        # Use the new naming convention
        type_name = self.ts_processor.get_operation_type_name(router, is_request=True)

        for content in router.request_body.content:
            if content.content_type == 'application/json' and content.schema:
                return self.create_type_from_schema(content.schema, str(type_name))

        return None

    def create_response_type(self, router: Router, response: RouterResponse) -> Optional[SchemaType]:
        """Create a SchemaType from response"""
        if not response.content:
            return None

        # Use the new naming convention
        type_name = self.ts_processor.get_operation_type_name(router, is_request=False)

        for content in response.content:
            if content.content_type == 'application/json' and content.schema:
                return self.create_type_from_schema(content.schema, str(type_name))

        return None

    def create_type_from_schema(self, schema: Dict[str, Any], type_name: str) -> SchemaType:
        """Create a SchemaType from a JSON schema"""
        if not schema:
            return SchemaType(name=str(type_name), fields=[])

        fields = []
        properties = schema.get('properties', {})
        required_fields = schema.get('required', [])

        for prop_name, prop_schema in properties.items():
            temp_field = self.get_field_type(prop_schema)
            # Create a proper field with the correct name and required status
            if temp_field.is_enum:
                field = SchemaTypeField.create_enum(prop_name, temp_field.enum_values or [], prop_name in required_fields, temp_field.read_only, temp_field.write_only)
            elif temp_field.is_object:
                field = SchemaTypeField.create_object(prop_name, temp_field.object_properties or {}, prop_name in required_fields, temp_field.read_only, temp_field.write_only)
            elif temp_field.is_array:
                field = SchemaTypeField.create_array(prop_name, temp_field.array_item_type or 'any', prop_name in required_fields, temp_field.read_only, temp_field.write_only)
            else:
                field = SchemaTypeField.create_simple(prop_name, temp_field.type, prop_name in required_fields, temp_field.read_only, temp_field.write_only)

            fields.append(field)

        return SchemaType(name=str(type_name), fields=fields)

    def create_parameter_types(self, router: Router) -> List[SchemaType]:
        """Create SchemaType objects from router parameters"""
        param_types = []
        path_params = []
        query_params = []

        # Group parameters by type (path vs query)
        for param in router.parameters:
            if param.position == 'path':
                path_params.append(param)
            elif param.position == 'query':
                query_params.append(param)

        # Create path parameters type if any exist
        if path_params:
            path_type = self.create_path_params_type(router, path_params)
            if path_type:
                param_types.append(path_type)

        # Create query parameters type if any exist
        if query_params:
            query_type = self.create_query_params_type(router, query_params)
            if query_type:
                param_types.append(query_type)

        return param_types

    def create_path_params_type(self, router: Router, path_params: List[RouterParameter]) -> Optional[SchemaType]:
        """Create a SchemaType for path parameters"""
        if not path_params:
            return None

        # Use the TypeScript processor naming convention for path params
        resource_name = self.ts_processor.get_resource_name(router.path)
        method_name = self.ts_processor.get_method_name(router).lower()

        if method_name == 'list':
            type_name = f"{resource_name}ListPathParams"
        else:
            type_name = f"{resource_name}PathParams"

        fields = []
        for param in path_params:
            if param.schema and param.schema.type:
                # Map OpenAPI types to TypeScript types
                ts_type = self.map_openapi_type_to_typescript(param.schema.type, param.schema.format)
                field = SchemaTypeField.create_simple(param.name, ts_type, param.required)
                fields.append(field)

        return SchemaType(name=str(type_name), fields=fields) if fields else None

    def create_query_params_type(self, router: Router, query_params: List[RouterParameter]) -> Optional[SchemaType]:
        """Create a SchemaType for query parameters"""
        if not query_params:
            return None

        # Use the TypeScript processor naming convention for query params
        resource_name = self.ts_processor.get_resource_name(router.path)
        method_name = self.ts_processor.get_method_name(router).lower()

        if method_name == 'list':
            type_name = f"{resource_name}ListQueryParams"
        else:
            type_name = f"{resource_name}QueryParams"

        fields = []
        for param in query_params:
            if param.schema and param.schema.type:
                # Map OpenAPI types to TypeScript types
                ts_type = self.map_openapi_type_to_typescript(param.schema.type, param.schema.format)
                field = SchemaTypeField.create_simple(param.name, ts_type, param.required)
                fields.append(field)

        return SchemaType(name=str(type_name), fields=fields) if fields else None

    def map_openapi_type_to_typescript(self, openapi_type: Optional[str], format: Optional[str] = None) -> str:
        """Map OpenAPI types to TypeScript types"""
        if not openapi_type:
            return "any"

        type_mapping = {
            'string': 'string',
            'integer': 'number',
            'number': 'number',
            'boolean': 'boolean',
            'array': 'any[]',
            'object': 'any'
        }

        # Handle special formats
        if openapi_type == 'string' and format == 'uuid':
            return 'string'  # UUID is still a string in TypeScript
        elif openapi_type == 'string' and format == 'date':
            return 'string'  # Date strings
        elif openapi_type == 'string' and format == 'date-time':
            return 'string'  # ISO 8601 date-time strings

        return type_mapping.get(openapi_type, openapi_type)

    def get_field_type(self, prop_schema: Dict[str, Any]) -> SchemaTypeField:
        """Get the field type from a property schema"""
        # Extract readOnly and writeOnly properties first
        read_only = prop_schema.get('readOnly', False)
        write_only = prop_schema.get('writeOnly', False)

        if 'type' not in prop_schema:
            # Handle cases like allOf with $ref where type is not directly specified
            if 'allOf' in prop_schema:
                # For allOf, we'll use 'object' as the type since it's a reference
                return SchemaTypeField.create_simple('object', 'object', read_only=read_only, write_only=write_only)
            elif '$ref' in prop_schema:
                # For direct $ref, use 'object' as the type
                return SchemaTypeField.create_simple('object', 'object', read_only=read_only, write_only=write_only)
            else:
                return SchemaTypeField.create_simple('unknown', 'unknown', read_only=read_only, write_only=write_only)

        prop_type = prop_schema['type']
        has_enum = 'enum' in prop_schema
        has_properties = 'properties' in prop_schema

        if has_enum:
            # Process enum values for TypeScript
            enum_values = []
            for enum_value in prop_schema['enum']:
                if enum_value is None:
                    enum_values.append('null')
                elif enum_value == '':
                    enum_values.append('""')
                elif isinstance(enum_value, str):
                    enum_values.append(f'"{enum_value}"')
                else:
                    enum_values.append(str(enum_value))
            return SchemaTypeField.create_enum(str('temp'), enum_values, read_only=read_only, write_only=write_only)

        if prop_type == 'array':
            items = prop_schema.get('items', {})
            if isinstance(items, dict):
                # Check if items has a $ref (schema reference)
                if '$ref' in items:
                    # Extract schema name from reference path like "#/components/schemas/AyahInSurah"
                    ref_path = items['$ref']
                    if ref_path.startswith('#/components/schemas/'):
                        item_type = ref_path.split('/')[-1]  # Get the last part after '/'
                    else:
                        item_type = 'object'  # Fallback for other reference formats
                elif 'properties' in items:
                    # This is an embedded schema object, try to identify it by comparing with known schemas
                    embedded_schema_name = self._identify_embedded_schema(items)
                    if embedded_schema_name:
                        item_type = embedded_schema_name
                    else:
                        item_type = 'object'  # Fallback for unidentified embedded schemas
                else:
                    item_type = items.get('type', 'any')
                    # Map array item types too
                    if item_type == 'integer':
                        item_type = 'number'
                return SchemaTypeField.create_array(str('temp'), item_type, read_only=read_only, write_only=write_only)
            return SchemaTypeField.create_array(str('temp'), 'any', read_only=read_only, write_only=write_only)

        if has_properties:
            return SchemaTypeField.create_object(str('temp'), prop_schema['properties'], read_only=read_only, write_only=write_only)

        # Simple type - map OpenAPI types to TypeScript types
        type_mapping = {
            'integer': 'number',
            'number': 'number',
            'string': 'string',
            'boolean': 'boolean'
        }
        ts_type = type_mapping.get(prop_type, prop_type)
        return SchemaTypeField.create_simple(str('temp'), ts_type, read_only=read_only, write_only=write_only)

    def _identify_embedded_schema(self, embedded_schema: Dict[str, Any]) -> Optional[str]:
        """Try to identify an embedded schema by comparing its properties with known schemas"""
        if not self.schema_model or not self.schema_model.schemas:
            return None

        embedded_props = set(embedded_schema.get('properties', {}).keys())
        embedded_required = set(embedded_schema.get('required', []))

        # Compare with known schemas
        for schema_name, schema in self.schema_model.schemas.items():
            if not isinstance(schema, dict):
                continue

            schema_props = set(schema.get('properties', {}).keys())
            schema_required = set(schema.get('required', []))

            # Check if properties match (allowing for some flexibility)
            if embedded_props == schema_props and embedded_required == schema_required:
                return schema_name

        return None