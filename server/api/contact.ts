import { createError, defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
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

	// Set up Nodemailer transporter
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	} as nodemailer.TransportOptions);

	// Setup mail options
	const mailOptions = {
		from: process.env.SMTP_EMAIL,
		to: process.env.SMTP_EMAIL, // The email to send the message to
		subject: 'Contact Form Submission',
		text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
	};

	try {
		// Send the email
		await transporter.sendMail(mailOptions);
		return { message: 'Your message has been sent successfully!' };
	} catch (error) {
		console.error('Error sending email:', error);
		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to send email',
		});
	}
});
