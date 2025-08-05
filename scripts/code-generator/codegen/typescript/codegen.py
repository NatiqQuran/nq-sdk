from parser.ast import Ast

class Codegen():
    """Typescript code generation
    """
    def __init__(self, ast: Ast):
        self.ast = ast