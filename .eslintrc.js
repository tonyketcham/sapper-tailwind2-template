module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'no-console': 'off',
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  plugins: ['plugin:prettier/recommended', 'svelte3', '@typescript-eslint'],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
};
