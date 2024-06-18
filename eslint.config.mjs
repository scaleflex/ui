import globals from 'globals'
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import typescriptParser from '@typescript-eslint/parser'

// used to support old configs that isn't supported yet with eslint v9
const compat = new FlatCompat()

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(compat.extends('plugin:storybook/recommended')),
  eslintPluginPrettierRecommended,
  {
  ignores: [".lib/", ".dist/", '.node_modules/', "**/*.d.ts", 'eslint.config.mjs']
  },
  {
    files: ['**/*.{mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
        sourceType: 'module'
      },
    },
    rules:{
      '@typescript-eslint/no-explicit-any': 'warn'
    },
  }
];