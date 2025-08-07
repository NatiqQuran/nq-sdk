import re
from typing import Dict, Any, List, Optional
from dataclasses import dataclass
from parser.ast import Ast, Controller, Router

@dataclass
class TypeScriptTypeDefinition:
    """TypeScript-specific type definition"""
    name: str
    properties: Dict[str, str]  # property_name -> typescript_type
    required_properties: List[str]
    description: Optional[str] = None

@dataclass
class TypeScriptRouter:
    """TypeScript-specific router information"""
    router: Router
    method_name: str
    path_params: List[str]
    ts_path: str
    request_type: Optional[TypeScriptTypeDefinition] = None
    response_type: Optional[TypeScriptTypeDefinition] = None
    params_type: Optional[TypeScriptTypeDefinition] = None

@dataclass
class TypeScriptController:
    """TypeScript-specific controller information"""
    controller: Controller
    routers: List[TypeScriptRouter]

@dataclass
class TypeScriptAst:
    """TypeScript-specific AST with type information"""
    controllers: List[TypeScriptController]

class TypeScriptProcessor:
    """Processes the generic AST and adds TypeScript-specific information"""
    
    def __init__(self, ast: Ast):
        self.ast = ast

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

    def extract_schema_type(self, schema: dict) -> str:
        """Extract TypeScript type from OpenAPI schema"""
        if not schema:
            return "any"
        
        schema_type = schema.get("type", "object")
        
        if schema_type == "string":
            if "enum" in schema:
                return f"'{' | '.join(schema['enum'])}'"
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

    def extract_properties_from_schema(self, schema: dict) -> tuple[Dict[str, str], List[str]]:
        """Extract properties and required fields from OpenAPI schema"""
        properties = {}
        required = []
        
        if not schema or "properties" not in schema:
            return properties, required
        
        required_fields = schema.get("required", [])
        
        for prop_name, prop_schema in schema["properties"].items():
            prop_type = self.extract_schema_type(prop_schema)
            properties[prop_name] = prop_type
            if prop_name in required_fields:
                required.append(prop_name)
        
        return properties, required

    def create_type_definition(self, name: str, schema: dict, description: str = None) -> TypeScriptTypeDefinition:
        """Create a TypeScript type definition from OpenAPI schema"""
        properties, required = self.extract_properties_from_schema(schema)
        return TypeScriptTypeDefinition(
            name=name,
            properties=properties,
            required_properties=required,
            description=description
        )

    def extract_request_type(self, router: Router, controller_name: str) -> Optional[TypeScriptTypeDefinition]:
        """Extract request type from router"""
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
        
        method = router.method.lower()
        if method == "patch":
            type_name = f"{controller_name.capitalize()}PartialEditRequestData"
        else:
            type_name = f"{controller_name.capitalize()}{method.capitalize()}RequestData"
        
        return self.create_type_definition(
            type_name,
            json_content.schema,
            f"Request data for {router.method} {router.path}"
        )

    def extract_response_type(self, router: Router, controller_name: str) -> Optional[TypeScriptTypeDefinition]:
        """Extract response type from router"""
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
        
        method = router.method.lower()
        if method == "get" and self.extract_path_params(router.path):
            type_name = f"{controller_name.capitalize()}ViewResponseData"
        elif method == "get":
            type_name = f"{controller_name.capitalize()}ListResponseData"
        elif method == "patch":
            type_name = f"{controller_name.capitalize()}PartialEditResponseData"
        else:
            type_name = f"{controller_name.capitalize()}{method.capitalize()}ResponseData"
        
        return self.create_type_definition(
            type_name,
            json_content.schema,
            f"Response data for {router.method} {router.path}"
        )

    def extract_params_type(self, router: Router, controller_name: str) -> Optional[TypeScriptTypeDefinition]:
        """Extract query parameters type from router"""
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
        
        method = router.method.lower()
        if method == "get" and self.extract_path_params(router.path):
            type_name = f"{controller_name.capitalize()}ViewRequestParams"
        elif method == "get":
            type_name = f"{controller_name.capitalize()}ListRequestParams"
        else:
            type_name = f"{controller_name.capitalize()}{method.capitalize()}RequestParams"
        
        return TypeScriptTypeDefinition(
            name=type_name,
            properties=properties,
            required_properties=required,
            description=f"Query parameters for {router.method} {router.path}"
        )

    def process(self) -> TypeScriptAst:
        """Process the AST and create TypeScript-specific AST"""
        ts_controllers = []
        
        for controller in self.ast.controllers:
            ts_routers = []
            
            for router in controller.routers:
                method_name = self.get_method_name(router)
                path_params = self.extract_path_params(router.path)
                ts_path = self.typescript_path(router.path)
                
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
                    params_type=params_type
                )
                ts_routers.append(ts_router)
            
            ts_controller = TypeScriptController(
                controller=controller,
                routers=ts_routers
            )
            ts_controllers.append(ts_controller)
        
        return TypeScriptAst(controllers=ts_controllers)
