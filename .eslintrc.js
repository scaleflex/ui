/* eslint @typescript-eslint/no-var-requires: 0 */
const {
  resolve
} = require('path');

const tsconfig = require('./tsconfig.json');

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: ['airbnb', 'plugin:import/typescript', 'plugin:sonarjs/recommended', 'plugin:promise/recommended', 'plugin:unicorn/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:import/typescript', 'plugin:prettier/recommended', 'prettier/react', 'plugin:storybook/recommended'],
  plugins: ['import', 'sonarjs', 'promise', 'unicorn', 'immutable', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    sourceType: 'module'
  },
  ignorePatterns: ['lib/**/*', 'node_modules/**/*'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        project: resolve(__dirname, 'tsconfig.json')
      },
      alias: {
        extensions: ['.ts', '.tsx'],
        map: Object.keys(tsconfig.compilerOptions.paths).reduce((map, key) => {
          return [...map, [key, tsconfig.compilerOptions.paths[key][0]].map(path => path.replace(/\/\*/u, ''))];
        }, [])
      }
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }],
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: true,
      allowTypedFunctionExpressions: true
    }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': ['error', {
      types: {
        '{}': false,
        object: false
      }
    }],
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 'immutable/no-let': 'error',
    // 'immutable/no-mutation': 'warn',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'error',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'prettier/prettier': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/filename-case': ['error', {
      case: 'kebabCase'
    }],
    'unicorn/no-reduce': 'off',
    'unicorn/no-nested-ternary': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx']
    }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-handler-names': 'off',
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'warn',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-collapsible-if': 'off',
    'no-process-env': 'off',
    'id-length': ['warn', {
      exceptions: ['_'],
      min: 2
    }],
    'no-console': 'warn',
    'no-underscore-dangle': 'off',
    'sort-imports': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'global-require': 'off',
    'consistent-return': 'warn',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'id-length': 'off',
    'no-plusplus': 'off',
  },
  overrides: [{
    files: ['*.story.tsx'],
    rules: {
      'import/no-extraneous-dependencies': 'off'
    }
  }, {
    files: ['*.spec.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-identical-functions': 'off',
      'immutable/no-let': 'off'
    }
  }]
};