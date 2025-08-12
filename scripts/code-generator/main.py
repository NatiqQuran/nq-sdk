import argparse
import yaml
import os
import json
from parser.parser import Parser
from codegen.typescript.codegen import Codegen
from parser.postprocessor import PostProcessor
from dataclasses import asdict

def handle_compile(file_path: str, language: str, print_ast: bool = False, output_dir=None):
    # Open file path and parse the yaml file
    with open(file_path, 'r') as file:
        file_content = yaml.safe_load(file)
    
    parser = Parser(file_content)
    ast = parser.parse()
    # Save Ast file as json
    if print_ast:
        with open("ast.json", 'w') as ast_file:
            ast_file.write(json.dumps(asdict(ast), indent=2))
    ast = PostProcessor(ast).process()

    if language == "typescript":
        codegen = Codegen(ast)
        result = codegen.generate()

        if output_dir:
            # Create output directory if it doesn't exist
            os.makedirs(f'{output_dir}/types', exist_ok=True)
            
            # Write controllers file
            for controller in result["controllers"]:
                controllers_file = os.path.join(output_dir, f"{controller['name']}.ts")
                with open(controllers_file, 'w') as f:
                    f.write(controller['content'])
                
            for type in result["types"]:
                # Write types file
                types_file = os.path.join(output_dir, f"types/{type['name']}.ts")
                with open(types_file, 'w') as f:
                    f.write(type["content"])
        else:
            print("Total Controllers parsed:", len(result["controllers"]))
            print("Total Types parsed:", len(result["types"]))
                
    else:
        raise Exception(f"Language not supported! {language}")

parser = argparse.ArgumentParser(prog="Code generator", description="Code generator for sdk")
parser.add_argument("filepath", help="File path of yaml file (open-api schema).")
parser.add_argument("language", help="Language to be compiled to ex. typescript")
parser.add_argument("--output-dir", "-o", help="Output directory for generated files")
parser.add_argument("--ast", "-a", action="store_true", help="Save AST file (json)")

args = parser.parse_args()

handle_compile(args.filepath, args.language, args.ast, args.output_dir)
