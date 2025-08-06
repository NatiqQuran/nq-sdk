from typing import List, Optional
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
class RequestBodyContent:
    content_type: str
    schema: dict
    
@dataclass
class RouterRequestBody:
    content: List[RequestBodyContent]
    required: bool

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
    
    def add_param(self, param: RouterParameter):
        self.parameters.append(param)

@dataclass
class Controller:
    name: str
    routers: List[Router] = None
    
    def __post_init__(self):
        if self.routers is None:
            self.routers = []

    def add_router(self, router: Router):
        self.routers.append(router)

@dataclass
class Ast:
    controllers: List[Controller] = None
    
    def __post_init__(self):
        if self.controllers is None:
            self.controllers = []
    
    def add_controller(self, controller: Controller):
        self.controllers.append(controller)