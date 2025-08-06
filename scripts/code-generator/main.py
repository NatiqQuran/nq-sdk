import argparse
import json
import yaml
from dataclasses import asdict
from parser.parser import Parser

def handle_compile(file_path, language):
    # Open file path and parse the yaml file
    with open(file_path, 'r') as file:
        file_content = yaml.safe_load(file)
    
    parser = Parser(file_content)
    ast = parser.parse()
    print(json.dumps(asdict(ast), indent=2))

parser = argparse.ArgumentParser(prog="Code generator", description="Code generator for sdk")
parser.add_argument("filepath", help="File path of yaml file (open-api schema).")
parser.add_argument("language", help="Language to be compiled to ex. typescript")

args = parser.parse_args()

handle_compile(args.filepath, args.language)
