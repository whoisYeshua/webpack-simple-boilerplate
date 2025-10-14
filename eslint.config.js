// @ts-check
import jseslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

const config = defineConfig(
  globalIgnores([
    // dependencies
    'package.json',
    'package-lock.json',
    // build
    'dist',
    // code editors
    '.idea',
    '.vscode',
    // misc
    '**/.DS_Store',
    'eslint.config.js',
    'eslint-output-config.json',
    'stylelint-output-config.json',
  ]),
  jseslint.configs.recommended,
  tseslint.configs.stylistic,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs.flat['recommended-latest'],
  jsxA11yPlugin.flatConfigs.recommended,
  eslintPluginUnicorn.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'react/self-closing-comp': 'error',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': ['warn', { cases: { camelCase: true, pascalCase: true } }],
      'unicorn/prevent-abbreviations': ['error', { ignore: ['args', 'props'] }],
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.node, ...globals.browser },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true },
    },
  },
)

export default config
