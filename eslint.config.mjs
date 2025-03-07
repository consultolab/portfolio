import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// TypeScript support
	{
		files: ['**/*.ts', '**/*.vue'],
		languageOptions: {
			parser: tsParser,
			sourceType: 'module',
		},
		plugins: {
			'@typescript-eslint': ts,
		},
		rules: {
			...ts.configs.recommended.rules,
		},
	},

	// Vue plugin
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser, // Ensure this is set
			ecmaVersion: 'latest', // Use the latest ECMAScript version
			sourceType: 'module',
		},
		plugins: {
			vue,
		},
		rules: {
			...vue.configs['vue3-recommended'].rules,
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'never',
					},
				},
			],
		},
	},

	// Prettier plugin
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	}
);
