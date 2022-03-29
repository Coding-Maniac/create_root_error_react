module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // React
    'plugin:react/recommended',

    // Prettier
    'plugin:prettier/recommended',

    // Airbnb
    'airbnb-typescript',
    'airbnb/hooks',

    // Eslint
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'eslint:recommended',

    // Eslint - Imports
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'import', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    react: {
      'version': 'detect'
    }
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Common Rules
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'max-len': ['error', { code: 100 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],

    // Eslint - Imports
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default-member": 0,

    // Prettier
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
  },
};
