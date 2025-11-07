import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import * as ts from '@typescript-eslint/eslint-plugin'
import vue from 'eslint-plugin-vue'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import importPlugin from 'eslint-plugin-import'
import unicorn from 'eslint-plugin-unicorn'


/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // Игнор
    {
        ignores: ['**/dist/**', '.nuxt/**', '.output/**', '**/node_modules/**']
    },

    // Vue пресет
    ...vue.configs['flat/essential'],
    ...vue.configs['flat/strongly-recommended'],

    // JS/TS (без .vue, чтобы не ломать vue-eslint-parser)
    {
        files: ["*.{js,ts}", "**/*.{js,ts}"],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': ts,
            import: importPlugin,
            unicorn,
            '@stylistic/js': stylisticJs,
            '@stylistic/ts': stylisticTs,
        },
        rules: {
            // Общие
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
            'brace-style': 'error',
            'object-curly-newline': ['error', { consistent: true }],
            'array-bracket-newline': ['error', 'consistent'],
            'array-element-newline': ['error', 'consistent'],
            'multiline-ternary': ['error', 'always-multiline'],
            'no-nested-ternary': 'error',
            'object-shorthand': ['error', 'properties'],
            'arrow-body-style': ['error', 'as-needed'],
            'max-statements-per-line': 'error',
            'space-before-function-paren': ['error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            }],

            // import
            'import/newline-after-import': ['error', { count: 2 }],

            // stylistic (JS)
            '@stylistic/js/quotes': ['error', 'single'],
            '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
            '@stylistic/js/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
            '@stylistic/js/object-curly-spacing': ['error', 'always'],
            '@stylistic/js/operator-linebreak': ['error', 'after'],
            '@stylistic/js/semi': ['error', 'always'],
            '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/js/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let'], next: '*' },
                { blankLine: 'always', prev: '*', next: ['const', 'let'] },
                { blankLine: 'any', prev: 'const', next: 'const' },
                { blankLine: 'any', prev: 'let', next: 'let' },
                { blankLine: 'always', prev: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'], next: '*' },
                { blankLine: 'always', prev: '*', next: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'] },
            ],

            // stylistic (TS)
            '@stylistic/ts/quotes': ['error', 'single'],
            '@stylistic/ts/indent': ['error', 2, { SwitchCase: 1 }],
            '@stylistic/ts/object-curly-spacing': ['error', 'always'],
            '@stylistic/ts/semi': ['error', 'always'],
            '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/ts/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let'], next: '*' },
                { blankLine: 'always', prev: '*', next: ['const', 'let'] },
                { blankLine: 'any', prev: 'const', next: 'const' },
                { blankLine: 'any', prev: 'let', next: 'let' },
                { blankLine: 'always', prev: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'], next: '*' },
                { blankLine: 'always', prev: '*', next: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'] },
            ],

            // unicorn
            'unicorn/empty-brace-spaces': 'error',
            'unicorn/no-nested-ternary': 'error',
            'unicorn/catch-error-name': ['error', { ignore: ['^error\\d*$'] }],
            'unicorn/prevent-abbreviations': ['error', {
                extendDefaultReplacements: false,
                replacements: { e: { event: true, error: true } },
            }],
        },
    },

    // Vue-файлы: правила для шаблонов/скриптов/стилей
    {
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                ecmaVersion: 2024,
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            import: importPlugin,
            unicorn,
            '@stylistic/js': stylisticJs,
            '@stylistic/ts': stylisticTs,
        },
        rules: {
            // Общие
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
            'brace-style': 'error',
            'object-curly-newline': ['error', { consistent: true }],
            'array-bracket-newline': ['error', 'consistent'],
            'array-element-newline': ['error', 'consistent'],
            'multiline-ternary': ['error', 'always-multiline'],
            'no-nested-ternary': 'error',
            'object-shorthand': ['error', 'properties'],
            'arrow-body-style': ['error', 'as-needed'],
            'max-statements-per-line': 'error',
            'space-before-function-paren': ['error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            }],

            // import
            'import/newline-after-import': ['error', { count: 2 }],
            
            // стилистика для кода в <script lang="ts">
            '@stylistic/ts/semi': ['error', 'always'],
            '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
            '@stylistic/ts/quotes': ['error', 'single'],
            '@stylistic/ts/object-curly-spacing': ['error', 'always'],
            '@stylistic/ts/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let'], next: '*' },
                { blankLine: 'always', prev: '*', next: ['const', 'let'] },
                { blankLine: 'any', prev: 'const', next: 'const' },
                { blankLine: 'any', prev: 'let', next: 'let' },
                { blankLine: 'always', prev: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'], next: '*' },
                { blankLine: 'always', prev: '*', next: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'] },
            ],
            '@stylistic/js/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
            '@stylistic/js/operator-linebreak': ['error', 'after'],

            // прочие правила для SFC
            'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', prev: '*', next: '*' }]],
            'vue/require-prop-types': 'error',
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['error', 2, { attribute: 1, closeBracket: 0, switchCase: 0, ignores: [] }],
            'vue/max-attributes-per-line': ['error', { singleline: { max: 1 }, multiline: { max: 1 } }],
            'vue/script-indent': ['error', 2, { baseIndent: 0, switchCase: 1 }],
            'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
            'vue/object-curly-spacing': ['error', 'always'],
            'vue/custom-event-name-casing': 'error',
            'vue/attributes-order': 'error',
            'vue/attribute-hyphenation': ['error', 'never'],
            'vue/v-on-event-hyphenation': 'error',
            'vue/no-unused-refs': 'error',
            'vue/no-use-v-if-with-v-for': 'error',
            'vue/no-reserved-keys': 'error',
            'vue/no-mutating-props': 'error',
            'vue/padding-line-between-blocks': 'error',
            'vue/block-tag-newline': ['error', {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 0,
                blocks: {
                    script: { singleline: 'always', multiline: 'always', maxEmptyLines: 0 },
                    template: { singleline: 'always', multiline: 'always', maxEmptyLines: 0 },
                    style: { singleline: 'always', multiline: 'always', maxEmptyLines: 0 },
                },
            }],
            'vue/singleline-html-element-content-newline': ['error', {
                ignoreWhenNoAttributes: false,
                ignoreWhenEmpty: true,
            }],
            'vue/block-order': ['error', { order: ['script', 'i18n', 'template', 'style'] }],
            'vue/html-button-has-type': ['error', { button: true, submit: true, reset: true }],
            'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
            'vue/html-closing-bracket-spacing': ['error', {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            }],
            'vue/multiline-html-element-content-newline': ['error', {
                ignoreWhenEmpty: true,
                allowEmptyLines: false,
            }],
            'vue/no-unused-properties': ['error', {
                groups: ['props'],
                ignorePublicMembers: true,
            }],
        },
    },
]
