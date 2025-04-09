<template>
	<div class="page-content container">
		<div class="error-page">
			<div class="main-title">
				<div class="letter">4</div>
				<div class="letter">0</div>
				<div class="letter">4</div>
			</div>
			<h1>Page not found</h1>
			<p>
				The page you are looking for was moved, removed, renamed or might never
				existed
			</p>
			<NuxtLink to="/" class="primary-button">Go back home</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	useHead({
		title: 'Page not found | Portfolio',
		meta: [
			{
				name: 'description',
				content:
					'The page you are looking for does not exist.',
			},
		],
	});
</script>

<style scoped>
	.page-content {
		display: flex;
		align-items: center;
		min-height: 100vh;
		padding-top: 0;
	}
	.error-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.main-title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 3rem;
	}
	.letter {
		font-size: 10rem;
		line-height: 8rem;
		font-weight: 700;
		padding: 0 0.3rem;
	}
	.letter:first-of-type {
		color: rgb(var(--primary));
	}
	.letter:nth-of-type(2) {
		color: rgb(var(--tint-salmon));
	}
	.letter:last-of-type {
		transform: rotateY(180deg);
		color: rgb(var(--tint-orange));
	}
	h1 {
		margin-bottom: 1rem;
	}
	p {
		max-width: 30rem;
		margin-top: 0;
		text-align: center;
		margin-bottom: 1.5rem;
		color: rgb(var(--secondary-text-color));
	}
	@media screen and (max-width: 768px) {
		.container {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		.main-title {
			margin-bottom: 0;
		}
		.letter {
			font-size: 6rem;
			line-height: 6rem;
		}
		h1 {
			margin-top: 1rem;
		}
	}
</style>
