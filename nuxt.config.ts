// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint'],
	eslint: {
		// options here
	},
	css: ['./assets/css/main.css', './assets/css/colors.css'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
});
