from parser.typed_schema_model import TypedSchemaModel, TypedController
from .typescript_processor import TypeScriptProcessor, TypeScriptAst
from jinja2 import Template
import os

class Codegen():
    """Typescript code generation
    """
    def __init__(self, ast: TypedSchemaModel):
        self.ast = ast
        self.ts_processor = TypeScriptProcessor(ast)
        self.ts_ast = self.ts_processor.process()
        self.controller_template = Template(open("codegen/typescript/templates/controller.jinja2").read())
        self.types_template = Template(open("codegen/typescript/templates/types.jinja2").read())

    def generate_controller(self, controller) -> str:
        return self.controller_template.render(controller=controller)

    def generate_types(self, controller) -> str:
        return self.types_template.render(controller=controller)

    def generate(self) -> dict:
        """Generate both controllers and types"""
        controllers = []
        types = []
        
        # Generate controller files
        for controller in self.ts_ast.controllers:
            controllers.append({
                'name': controller.controller.name,
                'content': self.generate_controller(controller)
            })
        
        # Generate types for each controller (original approach)
        for controller in self.ts_ast.controllers:
            types.append({
                'name': controller.controller.name,
                'content': self.generate_types(controller)
            })
        
        return {
            "controllers": controllers,
            "types": types
        }