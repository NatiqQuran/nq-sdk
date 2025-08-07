from .ast import Ast, Controller, Router

class PostProcessor:
    def __init__(self, ast: Ast):
        self.ast = ast

    def process(self) -> Ast:
        """Process the AST to combine duplicate controllers"""
        controllers_by_name = {}
        for controller in self.ast.controllers:
            name = controller.name
            if name not in controllers_by_name:
                controllers_by_name[name] = Controller(name)
            controllers_by_name[name].routers.extend(controller.routers)
        
        new_ast = type(self.ast)()
        for controller in controllers_by_name.values():
            new_ast.add_controller(controller)
        return new_ast
