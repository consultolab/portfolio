// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', 'nuxt-nodemailer'],
	eslint: {
		// options here
	},
	nodemailer: {
		from: process.env.SMTP_EMAIL,
		host: process.env.SMTP_HOST,
		port: process.env.PORT,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	},
	css: ['./assets/css/main.css', './assets/css/colors.css'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
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
