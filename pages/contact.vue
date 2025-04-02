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
							<label>Name</label>
							<input v-model="form.name" type="text" />
						</div>
						<div class="form-row">
							<label>Email</label>
							<input v-model="form.email" type="text" />
						</div>
						<div class="form-row">
							<label>Message</label>
							<textarea
								v-model="form.message"
								name="message"
								rows="3"
							></textarea>
						</div>
						<div class="form-row">
							<button type="submit">Submit</button>
						</div>
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

	const loading = ref(false);

	const submitForm = async () => {
		loading.value = true;
		console.log(form.value);
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
	.form-row {
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
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
