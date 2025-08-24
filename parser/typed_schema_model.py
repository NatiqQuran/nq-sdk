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

    @classmethod
    def create_simple(cls, name: str, type: str, required: bool = True) -> 'SchemaTypeField':
        """Create a simple type field"""
        return cls(name=name, type=type, required=required)

    @classmethod
    def create_enum(cls, name: str, enum_values: List[str], required: bool = True) -> 'SchemaTypeField':
        """Create an enum type field"""
        return cls(name=name, type="enum", required=required, enum_values=enum_values)

    @classmethod
    def create_object(cls, name: str, properties: Dict[str, Any], required: bool = True) -> 'SchemaTypeField':
        """Create an object type field"""
        return cls(name=name, type="object", required=required, object_properties=properties)

    @classmethod
    def create_array(cls, name: str, item_type: str, required: bool = True) -> 'SchemaTypeField':
        """Create an array type field"""
        return cls(name=name, type="array", required=required, array_item_type=item_type)

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
        typed_model = TypedSchemaModel()

        # Parse controllers
        for controller in self.schema_model.controllers:
            typed_controller = self.parse_controller(controller)
            typed_model.add_controller(typed_controller)

        return typed_model

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
                field = SchemaTypeField.create_enum(prop_name, temp_field.enum_values or [], prop_name in required_fields)
            elif temp_field.is_object:
                field = SchemaTypeField.create_object(prop_name, temp_field.object_properties or {}, prop_name in required_fields)
            elif temp_field.is_array:
                field = SchemaTypeField.create_array(prop_name, temp_field.array_item_type or 'any', prop_name in required_fields)
            else:
                field = SchemaTypeField.create_simple(prop_name, temp_field.type, prop_name in required_fields)

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
        if 'type' not in prop_schema:
            return SchemaTypeField.create_simple('unknown', "unknown")

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
            return SchemaTypeField.create_enum(str('temp'), enum_values)

        if prop_type == 'array':
            items = prop_schema.get('items', {})
            if isinstance(items, dict):
                item_type = items.get('type', 'any')
                # Map array item types too
                if item_type == 'integer':
                    item_type = 'number'
                return SchemaTypeField.create_array(str('temp'), item_type)
            return SchemaTypeField.create_array(str('temp'), 'any')

        if has_properties:
            return SchemaTypeField.create_object(str('temp'), prop_schema['properties'])

        # Simple type - map OpenAPI types to TypeScript types
        type_mapping = {
            'integer': 'number',
            'number': 'number',
            'string': 'string',
            'boolean': 'boolean'
        }
        ts_type = type_mapping.get(prop_type, prop_type)
        return SchemaTypeField.create_simple(str('temp'), ts_type)