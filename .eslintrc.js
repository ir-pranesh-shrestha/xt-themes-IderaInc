module.exports = {
  parser: 'babel-eslint',
  env: {
    amd: true,
    browser: true,
    jasmine: true,
    jest: true
  },
  globals: {
    HAS_MAPS: true,
    FusionCharts: true,
    IS_IE8_BUILD: true
  },
  extends: [
    'standard',
    'plugin:import/errors'
  ],
  rules: {
    'require-jsdoc': [
      'off',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true
        }
      }
    ],
    'valid-jsdoc': [
      'off',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          returns: 'return',
          constructor: 'class',
          augments: 'extends',
          const: 'constant',
          defaultvalue: 'default',
          desc: 'description',
          host: 'external',
          fileoverview: 'file',
          overview: 'file',
          emits: 'fires',
          var: 'member',
          prop: 'property',
          exception: 'throws'
        },
        preferType: {
          Boolean: 'boolean',
          Null: 'null',
          Undefined: 'undefined',
          Number: 'number',
          String: 'string',
          Symbol: 'symbol',
          object: 'Object',
          array: 'Array',
          function: 'Function'
        },
        requireReturn: false,
        matchDescription: '.+'
      }
    ],
    'no-useless-escape': 'warn',
    'standard/no-callback-literal': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'no-return-assign': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-magic-numbers': [
      'warn',
      {
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1, 2, 3, 100, 10, 0.5]
      }
    ],
    'operator-linebreak': ['error', 'after'],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: ['getDSdef', 'getDSGroupdef', 'getName', 'getType', 'getDSType']
      }
    ],
    'valid-typeof': ['error', { requireStringLiterals: false }],
    'dot-notation': ['error', { allowKeywords: false }],
    'block-scoped-var': 'error',
    'array-callback-return': 'error',
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-loop-func': 'error',
    'no-useless-concat': 'error',
    radix: 'error',
    'no-catch-shadow': 'error',
    'no-shadow': ['error', { allow: ['err', 'error'] }],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
  }
};
