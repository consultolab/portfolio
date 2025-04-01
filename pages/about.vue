<template>
	<div class="page-content container">
		<div class="about-page">
			<div class="info">
				<div class="label">Details</div>
				<div class="title-container">
					<div class="title-shadow">About me</div>
					<div class="title">About me</div>
				</div>
				<div class="description">
					<p>
						Hello! I'm a passionate web and mobile developer with a deep love
						for creating user-friendly, visually appealing digital experiences.
					</p>
					<p>
						Over the years, I’ve honed my skills in both front-end and back-end
						technologies, building dynamic websites and powerful applications
						that bring ideas to life. My journey began with HTML, CSS, and
						JavaScript, and has since evolved to encompass frameworks like
						Vue.js, React, and ReactNative, along with back-end technologies
						such as Python and Flask.
					</p>
					<p>
						I believe in clean, maintainable code and scalable architecture,
						ensuring that the projects I work on are not only effective but also
						future-proof. If you’re looking for a developer who can take your
						vision and turn it into a reality, let's connect and make something
						amazing together.
					</p>
				</div>
				<NuxtLink to="/contact" class="primary-button">Get in touch</NuxtLink>
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
			<div class="portrait">
				<img
					src="../assets/images/portrait-canva-example.png"
					alt="user image"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.about-page {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.info {
		padding: 3rem 5rem;
		width: 45%;
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
	.description {
		margin-bottom: 3rem;
	}
	.description p {
		font-size: 1.1rem;
		line-height: 1.6rem;
	}
	.social-media {
		padding-top: 0.5rem;
	}
	.social-media p {
		font-size: 0.9rem;
		color: rgb(var(--secondary-text-color));
		margin-bottom: 0.5rem;
	}
	.social-links {
		display: flex;
	}
	.social-links a {
		margin-right: 0.5rem;
	}
	.social-links a img {
		width: 1.8rem;
		height: 1.8rem;
		object-fit: contain;
	}
	.social-links a img.default {
		display: inline-flex;
	}
	.social-links a img.active {
		display: none;
	}
	.social-links a:hover img.default {
		display: none;
	}
	.social-links a:hover img.active {
		display: inline-flex;
	}
	.portrait {
		width: 40%;
		position: relative;
	}
	.portrait img {
		width: 80%;
		height: auto;
		object-fit: cover;
		position: relative;
	}
	.portrait:before {
		content: '';
		display: inline-block;
		position: absolute;
		right: -1rem;
		top: -10%;
		width: 85%;
		height: 120%;
		background-color: rgb(var(--primary));
	}
	.portrait:after {
		content: '"Focused on building solutions that matter."';
		position: absolute;
		bottom: 15%;
		left: 82.5%;
		display: inline-block;
		color: rgba(var(--white), 0.6);
	}

	@media screen and (max-width: 1024px) {
		.container {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}
</style>
