from typing import List, Optional, Dict, Any
from dataclasses import dataclass

@dataclass
class RouterMetaData:
    description: str
    tags: List[str]
    operation_id: Optional[str] = None
    summary: Optional[str] = None
        
@dataclass
class RouterParamenterSchema:
    type: Optional[str]
    format: Optional[str]

@dataclass
class RouterParameter:
    name: str
    required: bool
    position: str
    description: str
    schema: RouterParamenterSchema

@dataclass
class BodyContent:
    content_type: str
    schema: dict
    
@dataclass
class RouterRequestBody:
    content: List[BodyContent]
    required: bool

@dataclass
class RouterResponse:
    content: List[BodyContent]
    description: str
    status_code: str

@dataclass
class Router:
    """Router for AST
    path ex. '/accounts/'
    """
    meta: RouterMetaData
    path: str
    method: str
    parameters: List[RouterParameter]
    request_body: Optional[RouterRequestBody] = None
    responses: List[RouterResponse] = None
    
    def add_param(self, param: RouterParameter):
        self.parameters.append(param)

    def add_response(self, response: RouterResponse):
        self.responses.append(response)

@dataclass
class Controller:
    name: str
    routers: list = None
    actions: list = None

    def __post_init__(self):
        if self.routers is None:
            self.routers = []
        if self.actions is None:
            self.actions = []

    def add_router(self, router: Router):
        self.routers.append(router)

@dataclass
class SchemaModel:
    controllers: List[Controller] = None
    schemas: Dict[str, Any] = None
    
    def __post_init__(self):
        if self.controllers is None:
            self.controllers = []
        if self.schemas is None:
            self.schemas = {}
    
    def add_controller(self, controller: Controller):
        self.controllers.append(controller)
    
    def add_schema(self, name: str, schema: Any):
        self.schemas[name] = schema