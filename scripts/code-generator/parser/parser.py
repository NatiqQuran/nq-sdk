from .ast import Ast, Controller, Router, RouterMetaData, RouterParamenterSchema, RouterParameter, RouterRequestBody,BodyContent,RouterResponse
from typing import Dict,Any,List
import warnings

class Parser():
    """
    Parser
    """
    def __init__(self, schema: Dict[str, Any], enable_warnings: bool = True):
        self.ast = Ast()
        self.schema = schema
        self.enable_warnings = enable_warnings
    
    def set_warnings_enabled(self, enabled: bool) -> None:
        """Enable or disable warning messages"""
        self.enable_warnings = enabled
    
    def warn(self, message: str) -> None:
        """Issue a warning if warnings are enabled"""
        if self.enable_warnings:
            warnings.warn(message, UserWarning)
    
    def parse(self) -> Ast:
        paths: Dict[str, Any] = self.schema.get("paths", {})
        controllers_by_name = {}
        # First pass: collect all controllers
        for (path, routers) in paths.items():
            resource = path.strip('/').split('/')[0]
            if resource not in controllers_by_name:
                controllers_by_name[resource] = Controller(resource)
        # Second pass: assign routers and actions
        for (path, routers) in paths.items():
            parts = path.strip('/').split('/')
            resource = parts[0]
            controller = controllers_by_name[resource]
            # Action: /resource/action/ (length 2)
            if len(parts) == 2 and parts[1] not in ("{uuid}", "{id}"):
                for method, router_data in routers.items():
                    controller.actions.append(self.parse_router(path, method, router_data))
            else:
                # Normal router
                for method, router_data in routers.items():
                    controller.add_router(self.parse_router(path, method, router_data))
        # Add all controllers to AST
        for controller in controllers_by_name.values():
            self.ast.add_controller(controller)
        return self.ast
    
    def validate_router_completeness(self, path: str, method: str, data: Dict[Any, Any]) -> None:
        """
        Validate that the router has proper request/response types based on HTTP method.
        Prints warnings for missing required components.
        """
        # Check for missing request body where it's expected
        if method in ['post', 'put', 'patch']:
            if 'requestBody' not in data:
                self.warn(
                    f"Router {method} {path} is missing request body. "
                    f"{method} methods typically require a request body."
                )
            elif not data.get('requestBody', {}).get('content'):
                self.warn(
                    f"Router {method} {path} has request body but no content schemas defined."
                )
            else:
                # Check if request body has required schemas
                content = data.get('requestBody', {}).get('content', {})
                has_valid_schemas = False
                for content_type, content_data in content.items():
                    if content_data.get('schema'):
                        has_valid_schemas = True
                        break
                
                if not has_valid_schemas:
                    self.warn(
                        f"Router {method} {path} has request body content but no schema definitions."
                    )
        
        # Check for missing responses
        if 'responses' not in data:
            self.warn(
                f"Router {method} {path} is missing response definitions."
            )
        elif not data.get('responses'):
            self.warn(
                f"Router {method} {path} has empty responses object."
            )
        else:
            # Check if responses have content schemas
            has_content_schemas = False
            has_valid_schemas = False
            for status_code, response_data in data.get('responses', {}).items():
                if response_data.get('content'):
                    has_content_schemas = True
                    # Check if any response has valid schemas
                    for content_type, content_data in response_data.get('content', {}).items():
                        if content_data.get('schema'):
                            has_valid_schemas = True
                            break
                    if has_valid_schemas:
                        break
            
            # For DELETE methods, it's normal to have no content schemas (204 responses)
            if method != 'delete':
                if not has_content_schemas:
                    self.warn(
                        f"Router {method} {path} has responses but no content schemas defined."
                    )
                elif not has_valid_schemas:
                    self.warn(
                        f"Router {method} {path} has response content but no schema definitions."
                    )
        
        # Check for unexpected request body on GET/DELETE methods
        if method in ['get', 'delete'] and 'requestBody' in data:
            self.warn(
                f"Router {method} {path} has request body, but {method} methods typically don't require one."
            )
        
        # Check for missing operationId (optional but recommended)
        if not data.get('operationId'):
            self.warn(
                f"Router {method} {path} is missing operationId. "
                "This is recommended for better code generation."
            )
        
        # Check for missing summary/description
        if not data.get('summary') and not data.get('description'):
            self.warn(
                f"Router {method} {path} is missing both summary and description. "
                "At least one is recommended for documentation."
            )

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
            props = resolved.get("properties") or {}
            for k, v in props.items():
                if '$ref' in v:
                    ref = v["$ref"]
                    new_data = self.resolve_schema_ref(ref)
                    props[k] = new_data
            return resolved
        return schema

    def parse_request_body(self, data: Dict[Any, Any]) -> RouterRequestBody | None:
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
        # Validate router completeness before parsing
        self.validate_router_completeness(path, method, data)
        
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