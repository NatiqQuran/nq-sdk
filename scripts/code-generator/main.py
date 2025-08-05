import argparse
import yaml

def handle_compile(file_path, language):
    # Open file path and parse the yaml file
    with open(file_path, 'r') as file:
        file_content = yaml.safe_load(file)
    
        

parser = argparse.ArgumentParser(prog="Code generator", description="Code generator for sdk")
parser.add_argument("filepath", help="File path of yaml file (open-api schema).")
parser.add_argument("language", help="Language to be compiled to ex. typescript")

args = parser.parse_args()

handle_compile(args.file_path, args.language)
