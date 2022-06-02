module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': ['off', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
  },
};
