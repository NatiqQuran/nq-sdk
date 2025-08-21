# Code Generator

This code generator creates TypeScript SDK code from OpenAPI schemas, with a focus on type safety and developer experience. The architecture follows clean code principles with separated concerns.

## Architecture

The code generator follows a clean architecture pattern:

```
OpenAPI Schema → Generic AST → Language-Specific AST → Generated Code
```

### Components

1. **Parser** (`parser/parser.py`): Converts OpenAPI schema to generic AST
2. **PostProcessor** (`parser/postprocessor.py`): Processes generic AST (combines duplicate controllers)
3. **TypeScriptProcessor** (`parser/typescript_processor.py`): Adds TypeScript-specific information
4. **CodeGen** (`codegen/typescript/codegen.py`): Generates TypeScript code from TypeScript AST

## Usage

### Basic Usage

```bash
# Generate and print to console
python main.py Schema8.yaml typescript

# Generate to files
python main.py Schema8.yaml typescript --output-dir ./generated
```

### Output Files

When using `--output-dir`, the generator creates:

- `generated_types.ts` - All TypeScript interfaces for request/response bodies and parameters
- `generated_controllers.ts` - All controller classes with type-safe methods

## Type Safety Features

1. **Request Body Types**: All POST/PUT/PATCH methods have typed request bodies
2. **Response Body Types**: All methods have typed response bodies
3. **Query Parameters**: GET methods with query parameters have typed parameter interfaces
4. **Path Parameters**: All path parameters are typed as strings
5. **Optional Fields**: Non-required fields are marked with `?`
6. **Import Statements**: Controllers import the generated types

## Development

### Adding New Language Support

1. Create a new directory in `codegen/` for your language
2. Create a new processor in `codegen/language/` (e.g., `python_processor.py`)
3. Implement a `Codegen` class with `generate()` method
4. Create templates for your language (using jinja2)
5. Update `main.py` to handle the new language
