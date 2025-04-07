<template>
	<div class="page-content container">
		<div class="contact-page">
			<div class="info">
				<div class="label">Get in touch</div>
				<div class="title-container">
					<div class="title-shadow">Contact</div>
					<div class="title">Contact</div>
				</div>
				<div class="contact-form">
					<form @submit.prevent="submitForm">
						<div class="form-row">
							<label for="name">Name</label>
							<input id="name" v-model="form.name" type="text" />
							<p v-if="validationErrors.name" class="error">
								{{ validationErrors.name }}
							</p>
						</div>
						<div class="form-row">
							<label for="email">Email</label>
							<input id="email" v-model="form.email" type="text" />
							<p v-if="validationErrors.email" class="error">
								{{ validationErrors.email }}
							</p>
						</div>
						<div class="form-row">
							<label for="message">Message</label>
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
						<div class="form-row">
							<button type="submit" :disabled="loading">Submit</button>
						</div>
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
	.contact-page {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.info {
		padding: 3rem 5rem;
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
		color: rgb(var(--secondary));
	}
	.contact-form {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		max-width: 500px;
		margin: auto;
	}
	.form-row {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.5rem;
	}
	.form-row label {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.form-row input,
	.form-row textarea {
		width: 100%;
		padding: 0.8rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 1rem;
	}
	.form-row input:focus,
	.form-row textarea:focus {
		border-color: #007bff;
		outline: none;
	}
	button {
		background: #007bff;
		color: white;
		padding: 0.8rem 1.5rem;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.3s;
	}
	button:disabled {
		background: #ccc;
		cursor: not-allowed;
	}
	button:hover {
		background: #0056b3;
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
	}

	@media screen and (max-width: 768px) {
		.contact-page {
			flex-direction: column-reverse;
		}
		.title-shadow {
			font-size: 4rem;
		}
		.info {
			width: 100%;
			padding: 6rem 1rem 2rem 1rem;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1024px) {
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
