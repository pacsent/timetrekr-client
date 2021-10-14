module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'cypress'],
  ignorePatterns: ['*.scss'],
  rules: {
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 'warn',
    'no-empty': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-var-requires': 0,
    'import/no-named-as-default-member': 0,
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'object',
          'internal',
          'index',
          'sibling',
          'parent',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: './*.module.scss',
            group: 'parent',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      versin: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
