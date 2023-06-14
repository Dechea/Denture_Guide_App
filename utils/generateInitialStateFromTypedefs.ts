import { resolve } from 'path';
import { writeFileSync } from 'fs';
import * as ts from 'typescript';

const convertToCamelcase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.substring(1);

const checkCorrectType = (expectedType: string, inputType: string): boolean =>
  expectedType === inputType;

const generateInitialStateFromTypedefs = () => {
  // const compilerOptions = ts.convertCompilerOptionsFromJson({}, './').options;
  let initialInterfaceStr = '';

  // Configure ts compiler options
  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2015,
    lib: ['dom', 'dom.iterable', 'esnext'],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    noEmit: true,
    esModuleInterop: true,
    module: ts.ModuleKind.ES2015,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    resolveJsonModule: true,
    isolatedModules: true,
    incremental: true,
  };

  // Fetching interfaces file
  const schemaFile: string = resolve('interfaces/schema.ts');

  // Creating a program to get content of  interface file
  // A Program which is the TypeScript terminology for your whole application
  const program = ts.createProgram([schemaFile], compilerOptions);

  // hosting both the text and TypeScript AST
  const sourceFile = program.getSourceFile(schemaFile);

  ts.forEachChild(sourceFile as ts.Node, (node) => {
    if (ts.isInterfaceDeclaration(node)) {
      // If node type is of interface
      // Extract interface name
      const name = node.name.text;

      // If interface doesn't include Input, Methods and Query
      if (
        !name.includes('Input') &&
        !name.includes('Methods') &&
        !name.includes('Query')
      ) {
        // Extract complete interface
        const text = node.getText(sourceFile);

        // Extract string from '{' to '}'
        const textWithCurleyBracket = text.substring(text.indexOf('{'));

        // Adding double quotes in string before ":" to make it key
        const stringifiedKey = textWithCurleyBracket.replace(
          /(\w+:)|(\w+ :)/g,
          function (matchedStr) {
            return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
          }
        );

        // Adding double quotes in string after ":" to make it value
        const stringifiedKeyAndValue = stringifiedKey.replace(
          /(:.*;)|(: .*;)/g,
          function (matchedStr) {
            return `: "${matchedStr
              .substring(0, matchedStr.length - 1)
              .replace(/(: +)|(:+)/g, '')}",`;
          }
        );

        // Crete object from stringify interface text
        const actualObj = JSON.parse(
          stringifiedKeyAndValue.replace(',\n}', '\n}')
        );

        let keyValueString = '';

        Object.keys(actualObj).forEach((key) => {
          let value:
            | number
            | string
            | boolean
            | [number]
            | [string]
            | [boolean]
            | null = '';
          let valueType = actualObj[key];

          // Extract first key type if unioun type present
          if (valueType?.includes?.(' | ')) {
            valueType = valueType?.split?.(' | ')?.[0];
          }

          // Get refrenced type
          if (
            ![
              'string',
              'number',
              'boolean',
              'Date',
              'null',
              'undefined',
            ].includes(valueType) &&
            !valueType?.includes('[]')
          ) {
            valueType = convertToCamelcase(valueType);
          }

          // Get refrenced array of type
          if (valueType?.includes('[]')) {
            valueType = `[${convertToCamelcase(valueType?.replace('[]', ''))}]`;
          }

          // Get initial value according to their type
          switch (true) {
            case checkCorrectType('string', valueType):
              value = '""';
              break;

            case checkCorrectType('[string]', valueType):
              value = '[""]';
              break;

            case checkCorrectType('number', valueType):
              value = 0;
              break;

            case checkCorrectType('[number]', valueType):
              value = [0];
              break;

            case checkCorrectType('boolean', valueType):
              value = false;
              break;

            case checkCorrectType('[boolean]', valueType):
              value = [false];
              break;

            case checkCorrectType('Date', valueType):
              value = 'new Date()';
              break;

            case checkCorrectType('[Date]', valueType):
              value = '[new Date()]';
              break;

            default:
              value = valueType;
              break;
          }

          // Creating a key: value pare for object
          keyValueString = keyValueString.concat(`${key}: ${value},`);
        });

        // Creating object
        initialInterfaceStr =
          initialInterfaceStr.concat(`export const ${convertToCamelcase(
            name
          )} = {
          ${keyValueString}
        }; \n\n`);
      }
    }
  });

  // Create a file with converted json
  writeFileSync('./__mocks__/initialProductsState.js', initialInterfaceStr, {
    encoding: 'utf-8',
  });

  console.log('State Generated');
};

generateInitialStateFromTypedefs();
