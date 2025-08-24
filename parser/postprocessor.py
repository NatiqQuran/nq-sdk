from .schema_model import SchemaModel, Controller

class PostProcessor:
    def __init__(self, schema_model: SchemaModel):
        self.schema_model = schema_model

    def process(self) -> SchemaModel:
        """Process the AST to combine duplicate controllers, preserving routers and actions"""
        controllers_by_name = {}
        for controller in self.schema_model.controllers:
            name = controller.name
            if name not in controllers_by_name:
                controllers_by_name[name] = Controller(name)
            controllers_by_name[name].routers.extend(controller.routers)
            # Merge actions as well
            if hasattr(controller, 'actions') and controller.actions:
                if not hasattr(controllers_by_name[name], 'actions') or controllers_by_name[name].actions is None:
                    controllers_by_name[name].actions = []
                controllers_by_name[name].actions.extend(controller.actions)
        
        new_schema_model = type(self.schema_model)()
        # Preserve schemas from the original AST
        if hasattr(self.schema_model, 'schemas'):
            for schema_name, schema_data in self.schema_model.schemas.items():
                new_schema_model.add_schema(schema_name, schema_data)
        
        for controller in controllers_by_name.values():
            new_schema_model.add_controller(controller)
        return new_schema_model
