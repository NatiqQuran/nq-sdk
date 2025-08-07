import argparse
import json
import yaml
import os
from dataclasses import asdict
from parser.parser import Parser
from codegen.typescript.codegen import Codegen
from parser.postprocessor import PostProcessor

def handle_compile(file_path, language, output_dir=None):
    # Open file path and parse the yaml file
    with open(file_path, 'r') as file:
        file_content = yaml.safe_load(file)
    
    parser = Parser(file_content)
    ast = parser.parse()
    ast = PostProcessor(ast).process()
    
    if language == "typescript":
        codegen = Codegen(ast)
        result = codegen.generate()
        
        if output_dir:
            # Create output directory if it doesn't exist
            os.makedirs(output_dir, exist_ok=True)
            
            # Write types file
            types_file = os.path.join(output_dir, "generated_types.ts")
            with open(types_file, 'w') as f:
                f.write(result["types"])
            print(f"Types generated: {types_file}")
            
            # Write controllers file
            controllers_file = os.path.join(output_dir, "generated_controllers.ts")
            with open(controllers_file, 'w') as f:
                f.write(result["controllers"])
            print(f"Controllers generated: {controllers_file}")
        else:
            # Print both types and controllers
            print("\n// --- Generated Types ---\n")
            print(result["types"])
            print("\n// --- Generated Controllers ---\n")
            print(result["controllers"])
    else:
        # Fallback to old behavior for other languages
        for controller in ast.controllers:
            single_ast = type(ast)()  # Ast()
            single_ast.add_controller(controller)
            codegen = Codegen(single_ast)
            print(f"\n// --- Controller: {controller.name} ---\n")
            print(codegen.generate())

parser = argparse.ArgumentParser(prog="Code generator", description="Code generator for sdk")
parser.add_argument("filepath", help="File path of yaml file (open-api schema).")
parser.add_argument("language", help="Language to be compiled to ex. typescript")
parser.add_argument("--output-dir", "-o", help="Output directory for generated files")

args = parser.parse_args()

handle_compile(args.filepath, args.language, args.output_dir)
