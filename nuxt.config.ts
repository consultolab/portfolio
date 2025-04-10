// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', 'vue3-carousel-nuxt', 'nuxt-nodemailer'],
	carousel: {
		prefix: 'Portfolio',
	},
	eslint: {
		// options here
	},
	css: [
		'./assets/css/main.css',
		'./assets/css/colors.css',
		'./assets/css/carousel.css',
	],
	runtimeConfig: {
		public: {
			emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
			emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
			emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
		},
	},
	app: {
		baseURL: '/',
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
				},
			],
		},
	},
});
