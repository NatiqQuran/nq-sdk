import argparse
import yaml
import os
import json
from parser.parser import Parser
from parser.typed_schema_model import TypedSchemaModelParser
from codegen.typescript.codegen import Codegen
from parser.postprocessor import PostProcessor
from dataclasses import asdict

def handle_compile(file_path: str, language: str, save_schema_model: bool = False, output_dir=None, enable_warnings: bool = True):
    # Open file path and parse the yaml file
    with open(file_path, 'r') as file:
        file_content = yaml.safe_load(file)
    
    parser = Parser(file_content, enable_warnings=enable_warnings)
    schema_model = parser.parse()
    # Save Schema-model file as json
    if save_schema_model:
        with open("schema_model.json", 'w') as schema_model_file:
            schema_model_file.write(json.dumps(asdict(schema_model), indent=2))
    schema_model = PostProcessor(schema_model).process()

    typed_schema_model = TypedSchemaModelParser(schema_model).parse()
    if save_schema_model:
        with open("typed_schema_model.json", 'w') as typed_schema_model_file:
            typed_schema_model_file.write(json.dumps(asdict(typed_schema_model), indent=2))

    if language == "typescript":
        codegen = Codegen(typed_schema_model)
        result = codegen.generate()

        if output_dir:
            # Create output directories if they don't exist
            os.makedirs(f'{output_dir}/types', exist_ok=True)
            os.makedirs(f'{output_dir}/modules', exist_ok=True)
            
            # Write controllers file to modules folder
            for controller in result["controllers"]:
                controllers_file = os.path.join(output_dir, 'modules', f"{controller['name']}.ts")
                with open(controllers_file, 'w') as f:
                    f.write(controller['content'])
                
            # Write types file
            for type_file in result["types"]:
                types_file = os.path.join(output_dir, f"types/{type_file['name']}.ts")
                with open(types_file, 'w') as f:
                    f.write(type_file["content"])
        else:
            print("Total Controllers parsed:", len(result["controllers"]))
            print("Total Types parsed:", len(result["types"]))
                
    else:
        raise Exception(f"Language not supported! {language}")

parser = argparse.ArgumentParser(prog="Code generator", description="Code generator for sdk")
parser.add_argument("filepath", help="File path of yaml file (open-api schema).")
parser.add_argument("language", help="Language to be compiled to ex. typescript")
parser.add_argument("--output-dir", "-o", help="Output directory for generated files")
parser.add_argument("--schema-model", "-s", action="store_true", help="Save Schema-model file (json)")
parser.add_argument("--no-warnings", action="store_true", help="Disable warning messages during parsing")

args = parser.parse_args()

handle_compile(args.filepath, args.language, args.schema_model, args.output_dir, not args.no_warnings)
