import js from '@eslint/js'
import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 2018,
				sourceType: 'module',
			},
			globals: {
				...globals.node,
				...globals.es6,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			'no-console': 'error',
			indent: ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': ['error', {
				allowExpressions: true,
			}],
			'no-undef': 'off', // TypeScript handles this
		},
	},
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.es6,
			},
		},
		rules: {
			'no-console': 'error',
			indent: ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'no-new-object': 'error',
			'no-array-constructor': 'error',
			'no-new-func': 'error',
		},
	},
	{
		files: ['test/**/*.ts'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.test.json',
				ecmaVersion: 2018,
				sourceType: 'module',
			},
			globals: {
				...globals.jest,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		ignores: [
			'node_modules/**',
			'docs/**',
			'coverage/**',
			'dist/**',
			'.nyc_output/**',
		],
	},
]
