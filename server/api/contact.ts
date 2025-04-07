export default defineEventHandler(async (event) => {
	const { sendMail } = useNodeMailer();
	const config = useRuntimeConfig();
	const body = await readBody(event);

	if (!body.name || !body.email || !body.message) {
		throw createError({
			statusCode: 400,
			statusMessage: 'All fields are required',
		});
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(body.email)) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid email format.',
		});
	}

	const response = await sendMail({
		subject: 'Contact form submission',
		text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
		to: config.nodemailer.from,
	});

	if (!response) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to send email. Try again later.',
		});
	}

	return { message: 'Your message has been sent successfully!' };
});
