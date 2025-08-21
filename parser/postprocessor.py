from .ast import Ast, Controller

class PostProcessor:
    def __init__(self, ast: Ast):
        self.ast = ast

    def process(self) -> Ast:
        """Process the AST to combine duplicate controllers, preserving routers and actions"""
        controllers_by_name = {}
        for controller in self.ast.controllers:
            name = controller.name
            if name not in controllers_by_name:
                controllers_by_name[name] = Controller(name)
            controllers_by_name[name].routers.extend(controller.routers)
            # Merge actions as well
            if hasattr(controller, 'actions') and controller.actions:
                if not hasattr(controllers_by_name[name], 'actions') or controllers_by_name[name].actions is None:
                    controllers_by_name[name].actions = []
                controllers_by_name[name].actions.extend(controller.actions)
        
        new_ast = type(self.ast)()
        # Preserve schemas from the original AST
        if hasattr(self.ast, 'schemas'):
            for schema_name, schema_data in self.ast.schemas.items():
                new_ast.add_schema(schema_name, schema_data)
        
        for controller in controllers_by_name.values():
            new_ast.add_controller(controller)
        return new_ast
