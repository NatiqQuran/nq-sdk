from parser.ast import Ast
from .typescript_processor import TypeScriptProcessor, TypeScriptAst
from jinja2 import Template
import os

class Codegen():
    """Typescript code generation
    """
    def __init__(self, ast: Ast):
        self.ast = ast
        self.ts_processor = TypeScriptProcessor(ast)
        self.ts_ast = self.ts_processor.process()
        self.controller_template = Template(open("codegen/typescript/templates/controller.jinja2").read())
        self.types_template = Template(open("codegen/typescript/templates/types.jinja2").read())

    def generate_controllers(self) -> str:
        return self.controller_template.render(ast=self.ts_ast)

    def generate_types(self) -> str:
        return self.types_template.render(ast=self.ts_ast)

    def generate(self) -> dict:
        """Generate both controllers and types"""
        return {
            "controllers": self.generate_controllers(),
            "types": self.generate_types()
        }