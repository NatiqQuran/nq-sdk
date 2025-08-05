from .ast import Ast, Controller,Router, RouterMetaData
from typing import Dict,Any

class Parser():
    """
    Parser
    """
    def __init__(self, schema: Dict[str, Any]):
        self.ast = Ast()
        self.schema = schema
    
    def parse(self):
        paths: Dict[str, Any] = self.schema.get("paths", {})
        for (path, routers) in paths.items():
            self.ast.add_controller(self.parse_controller(path, routers))
    
    def parse_controller(self, path: str, routers: Dict[Any, Any]) -> Controller:
        controller = Controller(path.split("/")[1]) # Check For correctness

        for (method, router_data) in routers.items():
            pass

        return controller

    def parse_router(self, path: str, method: str, data: Dict[Any, Any]) -> Router:
        meta = RouterMetaData(
            data.get("description", "no description"),
            data.get("tags", []), data.get("operationId"),
            data.get("summary")
        )
        router = Router(meta, path, method, [])

        return router