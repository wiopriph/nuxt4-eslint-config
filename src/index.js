import tsParser from '@typescript-eslint/parser'
import * as ts from '@typescript-eslint/eslint-plugin'
import vue from 'eslint-plugin-vue'
import unicorn from 'eslint-plugin-unicorn'
import security from 'eslint-plugin-security'
import importPlugin from 'eslint-plugin-import'
import antiTrojan from 'eslint-plugin-anti-trojan-source'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    ignores: ['**/dist/**', '.nuxt/**', '.output/**', '**/node_modules/**']
  },
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': ts,
      vue,
      unicorn,
      security,
      import: importPlugin,
      'anti-trojan-source': antiTrojan,
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs
    }
  },
  ...vue.configs['flat/essential'],
  ...vue.configs['flat/strongly-recommended'],
  {
    rules: {
      'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-extra-semi': 'error',
      semi: ['error', 'always'],
      camelcase: 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'one-var': ['error', 'never'],
      'no-eval': 'error',
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      'brace-style': 'error',
      'array-element-newline': ['error', 'consistent'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/indent': ['error', 2],
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', { singleline: { max: 1 }, multiline: { max: 1 } }]
    }
  }
]

export default config
