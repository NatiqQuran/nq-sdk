from .ast import Ast, Controller, Router, RouterMetaData, RouterParamenterSchema, RouterParameter, RouterRequestBody,BodyContent,RouterResponse
from typing import Dict,Any,List

class Parser():
    """
    Parser
    """
    def __init__(self, schema: Dict[str, Any]):
        self.ast = Ast()
        self.schema = schema
    
    def parse(self) -> Ast:
        paths: Dict[str, Any] = self.schema.get("paths", {})
        for (path, routers) in paths.items():
            self.ast.add_controller(self.parse_controller(path, routers))
        return self.ast
    
    def parse_controller(self, path: str, routers: Dict[Any, Any]) -> Controller:
        controller = Controller(path.split("/")[1]) # Check For correctness

        for (method, router_data) in routers.items():
            controller.add_router(self.parse_router(path, method, router_data))

        return controller

    def resolve_schema_ref(self, ref: str) -> Dict[Any, Any]:
        """Resolve a $ref reference to get the actual schema definition"""
        if not ref.startswith('#/components/schemas/'):
            # For now, only handle components/schemas references
            return {}
        
        schema_name = ref.replace('#/components/schemas/', '')
        schemas = self.schema.get('components', {}).get('schemas', {})
        return schemas.get(schema_name, {})
    
    def resolve_schema(self, schema: Dict[Any, Any]) -> Dict[Any, Any]:
        """Resolve a schema, handling $ref references"""
        if '$ref' in schema:
            ref = schema['$ref']
            resolved = self.resolve_schema_ref(ref)
            # Merge any additional properties from the original schema
            resolved.update({k: v for k, v in schema.items() if k != '$ref'})
            return resolved
        return schema

    def parse_request_body(self, data: Dict[Any, Any]) -> RouterRequestBody:
        if "requestBody" not in data:
            return None
        rb = data["requestBody"]
        content_list = []
        content = rb.get("content", {})
        for content_type, content_schema in content.items():
            # Resolve the schema reference if present
            resolved_schema = self.resolve_schema(content_schema.get("schema", {}))
            content_list.append(BodyContent(content_type, resolved_schema))
        return RouterRequestBody(content_list, rb.get("required", False))

    def parse_router_parameters(self, data: Dict[Any, Any]) -> List[RouterParameter]:
        parameters = []
        for param in data.get("parameters", []):
            schema = param.get("schema", {})
            # Resolve the schema reference if present
            resolved_schema = self.resolve_schema(schema)
            param_schema = RouterParamenterSchema(resolved_schema.get("type"), resolved_schema.get("format"))
            parameters.append(RouterParameter(
                name=param["name"],
                required=param.get("required", False),
                position=param.get("in", ""),
                description=param.get("description", ""),
                schema=param_schema
            ))
        return parameters

    def parse_router_responses(self, data: Dict[Any, Any]) -> List[RouterResponse]:
        responses = []
        for status_code, response_data in data.get("responses", {}).items():
            content_list = []
            content = response_data.get("content", {})
            for content_type, content_schema in content.items():
                resolved_schema = self.resolve_schema(content_schema.get("schema", {}))
                content_list.append(BodyContent(content_type, resolved_schema))
            responses.append(RouterResponse(content_list, response_data.get("description", ""), status_code))
        return responses

    def parse_router(self, path: str, method: str, data: Dict[Any, Any]) -> Router:
        meta = RouterMetaData(
            data.get("description", "no description"),
            data.get("tags", []), data.get("operationId"),
            data.get("summary")
        )
        parameters = self.parse_router_parameters(data)
        request_body = self.parse_request_body(data)
        responses = self.parse_router_responses(data)
        router = Router(meta, path, method, parameters, request_body, responses)
        return router