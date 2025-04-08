<template>
	<div class="contact-container">
		<div class="page-content container">
			<div class="contact-page">
				<div class="info">
					<div class="label">Get in touch</div>
					<div class="title-container">
						<div class="title-shadow">Contact</div>
						<div class="title">Contact</div>
					</div>
					<p>
						Need a developer to join your stack? Write me a message via the
						form, or just send me an e-mail directly at
						<a href="mailto:contact@contact.com">contact@contact.com</a>
						. I am always up for building cool things.
					</p>
					<div class="social-media">
						<p>or find me on</p>
						<div class="social-links">
							<a href="#">
								<img
									src="../assets/images/instagram-icon.svg"
									alt="instagram icon"
									class="default"
								/>
								<img
									src="../assets/images/instagram-icon-active.svg"
									alt="instagram icon active"
									class="active"
								/>
							</a>
							<a href="#">
								<img
									src="../assets/images/linkedin-icon.svg"
									alt="linkedin icon"
									class="default"
								/>
								<img
									src="../assets/images/linkedin-icon-active.svg"
									alt="linkedin icon active"
									class="active"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="contact-form">
					<form @submit.prevent="submitForm">
						<div class="form-row">
							<div class="form-column">
								<label for="name">Name</label>
								<input id="name" v-model="form.name" type="text" />
								<p v-if="validationErrors.name" class="error">
									{{ validationErrors.name }}
								</p>
							</div>
							<div class="form-column">
								<label for="email">Email</label>
								<input id="email" v-model="form.email" type="text" />
								<p v-if="validationErrors.email" class="error">
									{{ validationErrors.email }}
								</p>
							</div>
						</div>
						<div class="form-row">
							<div class="form-column message">
								<textarea
									id="message"
									v-model="form.message"
									name="message"
									rows="3"
								></textarea>
								<p v-if="validationErrors.message" class="error">
									{{ validationErrors.message }}
								</p>
							</div>
						</div>
						<button type="submit" :disabled="loading" class="primary-button">
							Send message
						</button>
						<p v-if="successMessage" class="text-green">
							{{ successMessage }}
						</p>
						<p v-if="errorMessage" class="text-red">
							{{ errorMessage }}
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const form = ref({
		name: '',
		email: '',
		message: '',
	});

	const validationErrors = ref({
		name: '',
		email: '',
		message: '',
	});

	const successMessage = ref('');
	const errorMessage = ref('');

	const loading = ref(false);

	// Simple validation function
	const validateForm = () => {
		validationErrors.value = { name: '', email: '', message: '' };
		let isValid = true;

		if (!form.value.name.trim()) {
			validationErrors.value.name = 'Name is required';
			isValid = false;
		}

		if (!form.value.email.trim()) {
			validationErrors.value.email = 'Email is required';
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
			validationErrors.value.email = 'Invalid email format';
			isValid = false;
		}

		if (!form.value.message.trim()) {
			validationErrors.value.message = 'Message is required';
			isValid = false;
		}

		return isValid;
	};

	const submitForm = async () => {
		successMessage.value = '';
		errorMessage.value = '';

		// Check for errors before submitting
		if (!validateForm()) {
			return;
		}

		loading.value = true;

		try {
			const data = await $fetch('/api/contact', {
				method: 'POST',
				body: form.value,
			});
			successMessage.value = data.message;
			form.value = { name: '', email: '', message: '' };
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			if (err?.data?.message) {
				errorMessage.value = err.data.message;
			} else {
				errorMessage.value = 'Failed to send message. Please try again.';
			}
		} finally {
			loading.value = false;
		}
	};
</script>

<style scoped>
	.contact-container {
		display: flex;
		align-items: center;
		flex-grow: 1;
		justify-content: center;
		width: 100%;
		z-index: 0;
		background-color: rgba(var(--primary), 0.05);
		transition: background 0.2s ease-in-out;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		min-height: calc(100% - 5.4rem);
		padding-top: 5.4rem; /* this is the header height */
	}
	.container {
		margin: 0 auto;
		padding-top: 0;
	}
	.contact-page {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.info {
		display: inline-block;
		padding: 3rem 5rem;
		max-width: 40%;
	}
	.label {
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: uppercase;
		color: rgb(var(--tint-orange));
		margin-bottom: 1rem;
	}
	.title-container {
		display: flex;
		position: relative;
		align-items: center;
	}
	.title {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 5rem;
		position: relative;
		display: block;
		z-index: 1;
		color: rgb(var(--primary));
	}
	.title-shadow {
		font-size: 5rem;
		font-weight: 700;
		position: absolute;
		z-index: 0;
		line-height: 5rem;
		top: 0;
		left: 0;
		color: rgba(var(--primary), 0.05);
	}
	.info p {
		max-width: 26rem;
	}
	.info p a {
		text-decoration: none;
		color: rgb(var(--tertiary));
		position: relative;
		display: inline;
	}
	.info p a:after {
		content: '';
		width: 0;
		height: 1px;
		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.075);
		transition-duration: 0.3s;
		transition-property: all;
		display: block;
		position: absolute;
		bottom: -1px;
		left: 0;
		overflow: hidden;
		background-color: rgb(var(--tertiary));
	}
	.info p a:hover::after {
		width: 100%;
	}
	.social-media,
	.social-media p {
		margin-top: 0;
	}
	.contact-form {
		max-width: 45%;
		flex-grow: 1;
		display: flex;
		margin: auto;
		background-color: rgb(var(--white));
		position: relative;
		z-index: 1;
	}
	.contact-form:before {
		content: '';
		display: inline-block;
		position: absolute;
		right: -2rem;
		top: -2rem;
		width: 85%;
		height: 100%;
		background-color: rgb(var(--primary));
	}
	.contact-form form {
		width: 100%;
		background-color: rgb(var(--white));
		position: relative;
		padding: 3rem;
	}
	.form-row {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}
	.form-row:first-of-type {
		margin-bottom: 3rem;
	}
	.form-column label,
	.form-column.message:before {
		border-bottom: 1px solid rgb(var(--tint-orange));
		padding-bottom: 0.4rem;
	}
	.form-column {
		display: flex;
		flex-grow: 1;
		align-items: flex-end;
		position: relative;
	}
	.form-column textarea {
		background-image: linear-gradient(
			to top,
			rgb(var(--tint-grey)) 1px,
			transparent 1px
		);
		background-size: 100% 2.4rem;
		background-attachment: local;
		background-position: bottom;
		border: none;
		height: 7.2rem;
		line-height: 2.4rem;
		border-bottom: none;
		text-indent: 4.5rem;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.form-column.message:before {
		content: 'Message';
		display: inline-block;
		position: absolute;
		top: -1px;
		line-height: 2.4rem;
		padding-bottom: 0;
	}
	.form-column input,
	.form-column textarea {
		width: 100%;
		padding: 0 0.5rem;
		border: none;
		font-size: 0.9rem;
		font-family: 'DM Sans', sans-serif;
	}
	.form-column input {
		border-bottom: 1px solid rgb(var(--tint-grey));
		padding: 0.4rem 0.5rem;
	}
	.form-column input:focus,
	.form-column textarea:focus {
		border-color: rgba(var(--tint-orange), 0.3);
		outline: none;
	}
	.form-column textarea:focus {
		background-image: linear-gradient(
			to top,
			rgba(var(--tint-orange), 0.3) 1px,
			transparent 1px
		);
	}
	.form-column textarea::-webkit-scrollbar {
		display: none;
	}
	button {
		margin: 2rem 0 0 auto;
		display: block;
	}
	button:disabled {
		background: rgb(var(--tint-grey));
		cursor: not-allowed;
	}
	.text-red {
		color: rgb(var(--tint-orange));
	}
	.text-green {
		color: rgb(var(--cadmium-green));
	}
	.error {
		color: red;
		font-size: 0.9rem;
		margin-top: 0.3rem;
		position: absolute;
		top: 100%;
	}

	@media screen and (max-width: 767px) {
		.contact-page {
			flex-direction: column;
		}
		.title-shadow {
			font-size: 4rem;
		}
		.info {
			width: 100%;
			max-width: 100%;
			padding: 0;
		}
		.info p {
			max-width: 100%;
		}
		.contact-form {
			max-width: 100%;
			margin: 3rem 0 2rem 0;
		}
		.contact-form:before {
			top: -1rem;
			right: -1rem;
		}
		.contact-form form {
			padding: 1.5rem;
		}
	}
	@media screen and (max-width: 1024px) {
		.form-row {
			flex-direction: column;
			gap: 2rem;
		}
		.form-row:first-of-type {
			margin-bottom: 2rem;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.info {
			padding: 2rem;
		}
		.title-shadow {
			min-width: 30rem;
		}
	}

	@media screen and (max-width: 1024px) {
		.container {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}
</style>
