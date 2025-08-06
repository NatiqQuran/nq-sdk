from parser.ast import Ast
from jinja2 import Template

class Codegen():
    """Typescript code generation
    """
    def __init__(self, ast: Ast):
        self.ast = ast
        self.template = Template(open("templates/controller.jinja2").read())

    def generate(self) -> str:
        return self.template.render(ast=self.ast)