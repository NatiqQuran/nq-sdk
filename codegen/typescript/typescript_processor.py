import re
from typing import List, Optional, Any
from dataclasses import dataclass
from parser.typed_schema_model import TypedSchemaModel, TypedController, SchemaType, SchemaTypeField
from parser.schema_model import Router

@dataclass
class TypeScriptRouter:
    router: Router
    method_name: str
    path_params: List[str]
    ts_path: str
    # Optional grouping key for sub-resource routers (e.g., 'ayahs')
    group_name: Optional[str] = None
    # Parameter types for this router
    params_type: Optional[Any] = None  # Will be set by the processor
    # Request and response types for this router
    request_type: Optional[Any] = None  # Will be set by the processor
    response_type: Optional[Any] = None  # Will be set by the processor

# Action dataclass after TypeScriptRouter
@dataclass
class TypeScriptAction(TypeScriptRouter):
    action_name: str = ""

@dataclass
class TypeScriptController:
    """TypeScript-specific controller information"""
    controller: TypedController
    routers: List[TypeScriptRouter]
    actions: Optional[List[TypeScriptAction]] = None
    types: List[SchemaType] = None

@dataclass
class TypeScriptAst:
    """TypeScript-specific AST"""
    controllers: List[TypeScriptController]

class TypeScriptProcessor:
    """Processes the generic AST and adds TypeScript-specific information"""

    def __init__(self, ast: TypedSchemaModel):
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
            return 'partial_update'
        if method == 'delete' and re.fullmatch(r"/[a-zA-Z0-9_\-]+/\{[a-zA-Z0-9_\-]+\}", path_clean):
            return 'delete'
        if router.meta.operation_id:
            return router.meta.operation_id
        return f"{method}_{path_clean.strip('/').replace('/', '_').replace('{', '').replace('}', '')}"

    def get_resource_name(self, path: str) -> str:
        """Extract the resource name from the path for type naming"""
        path_clean = path.rstrip('/')
        segments = path_clean.strip('/').split('/')

        if not segments:
            return 'Unknown'

        # Handle different path patterns
        if len(segments) == 1:
            # Simple resource path like /users/
            resource = segments[0]
        elif len(segments) == 2 and not segments[1].startswith('{'):
            # Nested resource path like /auth/login/
            resource = segments[1]  # Use the second segment as the resource
        elif len(segments) >= 3 and segments[1].startswith('{') and not segments[2].startswith('{'):
            # Sub-resource path like /takhtits/{uuid}/ayahs_breakers/
            # Use both the main resource and sub-resource for type naming
            main_resource = segments[0]
            sub_resource = segments[2]
            resource = f"{main_resource}_{sub_resource}"
        else:
            # Default to first segment for complex paths
            resource = segments[0]

        # Convert to plural form following the user's convention (e.g., ayah -> ayahs)
        if not resource.endswith('s'):
            resource = resource + 's'
        return resource.capitalize()

    def get_operation_type_name(self, router: Router, is_request: bool = True) -> str:
        """Generate type name following the naming convention"""
        resource_name = self.get_resource_name(router.path)
        method_name = self.get_method_name(router).lower()

        # Handle custom operation IDs by extracting the action from the operation ID
        if router.meta.operation_id:
            operation_id = router.meta.operation_id.lower()
            if '_list' in operation_id:
                method_name = 'list'
            elif '_retrieve' in operation_id:
                method_name = 'retrieve'
            elif '_create' in operation_id:
                method_name = 'create'
            elif '_partial_update' in operation_id or 'partialupdate' in operation_id:
                method_name = 'partial_update'
            elif '_update' in operation_id:
                method_name = 'update'
            elif '_delete' in operation_id:
                method_name = 'delete'

        # Map method names to the convention
        operation_map = {
            'list': 'List',
            'retrieve': 'Retrieve',
            'create': 'Create',
            'update': 'Update',
            'partial_update': 'Partialupdate',
            'delete': 'Delete'
        }

        operation = operation_map.get(method_name, method_name.capitalize())

        if is_request:
            if method_name == 'list':
                return f"{resource_name}ListRequestParams"
            else:
                return f"{resource_name}{operation}RequestData"
        else:
            return f"{resource_name}{operation}ResponseData"

    def extract_path_params(self, path: str) -> List[str]:
        """Extract path parameters from the path"""
        return re.findall(r"\{([a-zA-Z0-9_\-]+)\}", path)

    def typescript_path(self, path: str) -> str:
        """Convert path to TypeScript template string format"""
        return re.sub(r"\{([a-zA-Z0-9_\-]+)\}", r"${\1}", path)

    def process(self) -> TypeScriptAst:
        """Process the AST and create TypeScript-specific AST"""
        ts_controllers = []

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

                ts_router = TypeScriptRouter(
                    router=router,
                    method_name=method_name,
                    path_params=path_params,
                    ts_path=ts_path,
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
                ts_action = TypeScriptAction(
                    router=action,
                    method_name=method_name,
                    path_params=path_params,
                    ts_path=ts_path,
                    group_name=None,  # No group name for actions
                    action_name=action_name
                )
                ts_actions.append(ts_action)

            # Associate parameter types with routers
            self._associate_param_types(ts_routers, controller.types)

            # Associate request and response types with routers and actions
            self._associate_request_response_types(ts_routers, ts_actions, controller.types)

            ts_controller = TypeScriptController(
                controller=controller,
                routers=ts_routers,
                actions=ts_actions,
                types=controller.types,
            )
            ts_controllers.append(ts_controller)

        return TypeScriptAst(
            controllers=ts_controllers
        )

    def _associate_param_types(self, ts_routers: List[TypeScriptRouter], types: List[SchemaType]):
        """Associate parameter types with TypeScript routers"""
        # Create a mapping of router paths to their parameter types
        path_to_params = {}

        for schema_type in types:
            type_name = schema_type.name
            # Check if this is a parameter type based on naming convention
            if 'PathParams' in type_name or 'QueryParams' in type_name:
                # Extract the base path pattern from the type name
                # e.g., "UsersListPathParams" -> "users"
                # e.g., "UsersRetrievePathParams" -> "users/{id}"
                # This is a simplified approach - we match by resource name
                if 'PathParams' in type_name:
                    base_name = type_name.replace('PathParams', '').replace('List', '').lower()
                elif 'QueryParams' in type_name:
                    base_name = type_name.replace('QueryParams', '').replace('List', '').lower()
                else:
                    continue

                # Find routers that match this resource
                for ts_router in ts_routers:
                    router_resource = self._extract_resource_from_path(ts_router.router.path).lower()
                    if router_resource == base_name:
                        if ts_router.router.path not in path_to_params:
                            path_to_params[ts_router.router.path] = {'path': None, 'query': None}

                        if 'PathParams' in type_name:
                            path_to_params[ts_router.router.path]['path'] = schema_type
                        elif 'QueryParams' in type_name:
                            path_to_params[ts_router.router.path]['query'] = schema_type

        # Group routers by path pattern (ignoring the method)
        path_patterns = {}
        for ts_router in ts_routers:
            # Normalize path by removing trailing slashes and parameter values
            normalized_path = re.sub(r'/\{[^}]+\}', '/{param}', ts_router.router.path).rstrip('/')
            if normalized_path not in path_patterns:
                path_patterns[normalized_path] = []
            path_patterns[normalized_path].append(ts_router)

        # Create combined parameter types for each path pattern
        combined_types = []
        processed_paths = set()

        for path_pattern, pattern_routers in path_patterns.items():
            # Find all parameter types for this path pattern
            all_path_params = []
            all_query_params = []

            for router in pattern_routers:
                router_path = router.router.path
                if router_path in path_to_params:
                    if path_to_params[router_path]['path']:
                        all_path_params.append(path_to_params[router_path]['path'])
                    if path_to_params[router_path]['query']:
                        all_query_params.append(path_to_params[router_path]['query'])

            # Create combined type for this path pattern
            path_type = all_path_params[0] if all_path_params else None
            query_type = all_query_params[0] if all_query_params else None

            if path_type or query_type:
                # Create a single combined type for all routers with this path pattern
                if path_type and query_type:
                    combined_type = self._create_combined_params_type(path_type, query_type, pattern_routers[0].router)
                    combined_types.append(combined_type)
                elif path_type:
                    combined_types.append(path_type)
                elif query_type:
                    combined_types.append(query_type)

                # Assign the combined type to all routers with this pattern
                for router in pattern_routers:
                    router.params_type = combined_types[-1]  # Last added type

                processed_paths.add(path_pattern)

        # Add combined types to the types list
        for combined_type in combined_types:
            if combined_type not in types:  # Avoid duplicates
                types.append(combined_type)

        # Remove individual parameter types that were combined
        types_to_remove = []
        for path_info in path_to_params.values():
            if path_info['path'] and path_info['query']:
                types_to_remove.append(path_info['path'])
                types_to_remove.append(path_info['query'])

        # Filter out individual parameter types that were combined
        filtered_types = [t for t in types if t not in types_to_remove]
        types[:] = filtered_types

    def _extract_resource_from_path(self, path: str) -> str:
        """Extract the main resource name from a path"""
        path_clean = path.rstrip('/')
        segments = path_clean.strip('/').split('/')
        if segments:
            resource = segments[0]
            # Convert to plural form if needed
            if not resource.endswith('s'):
                resource = resource + 's'
            return resource
        return ''

    def _create_combined_params_type(self, path_type: SchemaType, query_type: SchemaType, router: Router) -> SchemaType:
        """Create a combined parameter type that includes both path and query parameters"""
        resource_name = self.get_resource_name(router.path)
        method_name = self.get_method_name(router).lower()

        if method_name == 'list':
            type_name = f"{resource_name}ListParams"
        else:
            type_name = f"{resource_name}Params"

        # Combine fields from both types
        combined_fields = []
        combined_fields.extend(path_type.fields)
        combined_fields.extend(query_type.fields)

        return SchemaType(name=type_name, fields=combined_fields)

    def _associate_request_response_types(self, ts_routers: List[TypeScriptRouter], ts_actions: List[TypeScriptAction], types: List[SchemaType]):
        """Associate request and response types with TypeScript routers and actions"""
        # Create mappings from router paths to their request/response types
        for schema_type in types:
            type_name = schema_type.name

            # Check if this is a request or response type based on naming convention
            if 'RequestData' in type_name:
                # Extract the resource and operation from the type name
                # e.g., "PhrasesCreateRequestData" -> resource="phrases", operation="create"
                resource_match = re.match(r'^([A-Z][a-z]+)([A-Z][a-zA-Z]*)(RequestData|ResponseData)$', type_name)
                if resource_match:
                    resource = resource_match.group(1).lower()
                    operation = resource_match.group(2).lower()
                    type_category = resource_match.group(3)

                    # Find routers that match this resource and operation
                    for ts_router in ts_routers:
                        router_resource = self._extract_resource_from_path(ts_router.router.path).lower()
                        router_operation = self.get_method_name(ts_router.router).lower()

                        if router_resource == resource and router_operation == operation:
                            if type_category == 'RequestData':
                                ts_router.request_type = schema_type
                            elif type_category == 'ResponseData':
                                ts_router.response_type = schema_type

            elif 'ResponseData' in type_name:
                # Handle response types similarly
                resource_match = re.match(r'^([A-Z][a-z]+)([A-Z][a-zA-Z]*)(ResponseData)$', type_name)
                if resource_match:
                    resource = resource_match.group(1).lower()
                    operation = resource_match.group(2).lower()

                    # Find routers that match this resource and operation
                    for ts_router in ts_routers:
                        router_resource = self._extract_resource_from_path(ts_router.router.path).lower()
                        router_operation = self.get_method_name(ts_router.router).lower()

                        if router_resource == resource and router_operation == operation:
                            ts_router.response_type = schema_type

        # Handle actions similarly - actions typically have custom names
        for ts_action in ts_actions:
            action_name = ts_action.action_name.lower()

            # Find matching types for actions
            for schema_type in types:
                type_name = schema_type.name

                if 'RequestData' in type_name:
                    # For actions, we match by the action name
                    if action_name in type_name.lower():
                        ts_action.request_type = schema_type

                elif 'ResponseData' in type_name:
                    # For actions, we match by the action name
                    if action_name in type_name.lower():
                        ts_action.response_type = schema_type

        # Handle routers with group_name (like ayahs_breakers) the same way as actions
        for ts_router in ts_routers:
            if ts_router.group_name:
                group_name = ts_router.group_name.lower()

                # Find matching types for grouped routers
                for schema_type in types:
                    type_name = schema_type.name

                    if 'RequestData' in type_name:
                        # For grouped routers, we match by the group name
                        if group_name in type_name.lower():
                            ts_router.request_type = schema_type

                    elif 'ResponseData' in type_name:
                        # For grouped routers, we match by the group name
                        if group_name in type_name.lower():
                            ts_router.response_type = schema_type