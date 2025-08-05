from typing import List

class RouterMetaData():
    def __init__(self, description: str, tags: List[str], operation_id = None, summary = None):
        self.description = description
        self.tags = tags
        self.operation_id = operation_id
        self.summary = summary
        
class RouterParamenterSchema():
    def __init__(self, type, format):
        self.type = type
        self.format = format

class RouterParameter():
    def __init__(self, name: str, required: bool, position: str, description: str, schema: RouterParamenterSchema):
        self.name = name
        self.required = required
        self.position = position
        self.description = description
        self.schema = schema

class Router():
    """Router for AST
    path ex. '/accounts/'
    """
    def __init__(self, metadata: RouterMetaData, path: str, method: str, parameters: List[RouterParameter]):
        self.meta = metadata
        self.path = path
        self.method = method
        self.parameters = parameters
    
    def add_param(self, param: RouterParameter):
        self.parameters.append(param)

class Controller():
    def __init__(self, name: str, routers: List[Router] = []):
        self.name = name
        self.routers = routers

    def add_router(self, router: Router):
        self.routers.append(router)

class Ast():
    def __init__(self):
        self.controllers = []
    
    def add_controller(self, controller: Controller):
        self.controllers.append(controller)