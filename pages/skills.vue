<template>
	<div class="skills-container">
		<div class="container">
			<div class="tabs-container" :style="{ '--active-top': activeTop + 'px' }">
				<div
					v-for="(item, index) in data"
					:key="index"
					ref="items"
					class="tab"
					:class="{ active: activeIndex === index }"
					@click="setActive(index, $event)"
				>
					<img :src="`./images/` + item.image" />
				</div>
				<div class="active-border"></div>
			</div>
			<div class="tab-content">
				<transition name="fade" mode="out-in">
					<div :key="activeIndex" class="content-box">
						<div class="subtitle">Info</div>
						<div class="title-container">
							<div class="title-shadow">{{ data[activeIndex].title }}</div>
							<div class="title">{{ data[activeIndex].title }}</div>
						</div>
						<div class="info">
							<p
								v-for="(infoRow, infoIndex) in data[activeIndex].content"
								:key="infoIndex"
							>
								{{ infoRow }}
							</p>
						</div>
						<NuxtLink to="/work" class="primary-button">
							See related work
						</NuxtLink>
						<div class="carousel-wrapper" :class="{ 'disable-animation': !animateKeywords }">
							<div class="carousel">
								<div class="carousel-content">
									<span
										v-for="(text, index) in keywords"
										:key="index"
										class="carousel-item"
									>
										{{ text }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed, nextTick, onMounted } from 'vue';

	const activeIndex = ref(0);
	const activeTop = ref(0);
	const items = ref([]);
	const animateKeywords = true;

	const keywords = [
		'web-design',
		'responsive design',
		'performance',
		'scallability',
		'UI/UX',
		'adaptability',
		'team work',
	];

	// const repeatedKeywords = computed(() => [
	// 	...keywords,
	// 	...keywords,
	// 	...keywords,
	// ]);

	const data = [
		{
			title: 'Photoshop',
			content: [
				'Beyond just aesthetics, my expertise in Photoshop helps in translating design concepts into functional and intuitive interfaces.',
				'I focus on maintaining an efficient design-to-code workflow by slicing assets, managing layers effectively, and adhering to industry best practices for web and mobile performance. This ensures that the final implementation remains true to the original design while providing an optimized experience for users.',
			],
			image: 'photoshop-icon.png',
		},
		{
			title: 'Html/Css',
			content: [
				'Proficient in writing clean, semantic HTML and modern CSS to create responsive, accessible, and visually appealing web interfaces. Experienced in CSS frameworks, animations, and design techniques to enhance user experience.',
				'I focus on building pixel-perfect designs that adapt seamlessly across different devices and screen sizes. With a deep understanding of flexbox, grid, and modern CSS methodologies, I ensure that layouts are both functional and aesthetically pleasing.',
			],
			image: 'html-icon.png',
		},
		{
			title: 'Typescript',
			content: [
				'I first started working with JavaScript (ES6), building dynamic and interactive web applications while leveraging modern features like arrow functions, destructuring, and async/await.',
				'As projects grew in complexity, I transitioned to TypeScript to enhance maintainability and scalability. TypeScript’s static typing, advanced type inference, and interfaces have significantly improved my development workflow by catching potential errors early and making code more predictable.',
				'With TypeScript, I focus on writing clean, reusable, and well-structured code, ensuring better collaboration within teams and smoother integration with large-scale applications.',
			],
			image: 'typescript-icon.png',
		},
		{
			title: 'Python',
			content: [
				'With Python, I worked on the backend functionalities for both web and mobile applications, ensuring robust, scalable, and efficient server-side logic.',
				'Using Flask framework, I’ve built RESTful APIs, handled authentication, and optimized database interactions for seamless client-server communication. Python’s versatility allowed me to create well-structured and maintainable backend services, ensuring smooth integration with frontend applications while maintaining security and performance best practices.',
			],
			image: 'python-icon.webp',
		},
		{
			title: 'React Native',
			content: [
				'Working as part of a team, I contributed to the development of mobile applications using React Native, ensuring seamless performance across iOS and Android.',
				'With a focus on component-based architecture and a declarative UI approach, I helped build intuitive and high-performing apps while integrating native modules and optimizing animations for a smooth, native-like experience. Collaboration played a key role in refining features, troubleshooting issues, and maintaining code quality to deliver a polished final product.',
			],
			image: 'react-native-icon.svg',
		},
	];

	const setActive = (index) => {
		activeIndex.value = index;
		nextTick(() => {
			if (items.value[index]) {
				activeTop.value = items.value[index].offsetTop;
			}
		});
	};

	onMounted(() => {
		if (items.value[0]) {
			activeTop.value = items.value[0].offsetTop;
		}
	});
</script>

<style scoped>
	.skills-container {
		display: flex;
		align-items: stretch;
		flex-grow: 1;
		justify-content: center;
		width: 100%;
		z-index: 0;
		background-color: rgb(var(--secondary));
		transition: background 0.2s ease-in-out;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		min-height: calc(100% - 5.4rem);
		padding-top: 5.4rem; /* this is the header height */
	}

	.skills-container .container {
		display: flex;
		align-items: stretch;
		margin: 0 auto;
		gap: 1.5rem;
		justify-content: center;
		width: 100%;
	}

	.tabs-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		border-right: 2px solid rgba(var(--primary), 0.1);
		margin: 2rem 0;
	}

	.active-border {
		position: absolute;
		right: -3px;
		width: 4px;
		height: 5.5rem;
		background: rgb(var(--primary));
		border-radius: 5px;
		transition: top 0.3s ease-in-out;
		top: var(--active-top);
	}

	.tab {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding: 1.5rem;
		transition: border-color 0.5s ease;
	}

	.tab img {
		width: 2.5rem;
		height: 2.5rem;
		object-fit: contain;
		filter: grayscale(1);
	}

	.tab.active img,
	.tab:hover img {
		filter: grayscale(0);
	}

	.tab-content {
		padding: 2rem 1rem;
		width: 50%;
		display: flex;
		align-items: center;
	}

	.content-box {
		width: 100%;
	}

	.info {
		margin-bottom: 2rem;
	}

	.info p {
		font-size: 1.1rem;
		line-height: 1.6rem;
	}

	.subtitle {
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
		color: rgba(var(--tint-salmon), 0.15);
		min-width: 30rem;
	}

	.primary-button {
		display: block;
		width: fit-content;
		margin-bottom: 2rem;
	}

	.carousel-wrapper {
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
		background: rgb(var(--secondary));
		padding: 0.5rem 0;
	}

	.carousel-wrapper.disable-animation {
		overflow: visible;
		white-space: wrap;
	}

	.carousel {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.carousel-content {
		display: flex;
		gap: 3rem;
		animation: scrollText 20s linear infinite;
		min-width: max-content; /* Ensures smooth looping */
	}
	.carousel-wrapper.disable-animation .carousel-content {
		animation: none;
		min-width: 100%;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.carousel-content:hover {
		animation-play-state: paused;
	}

	.carousel-item {
		color: rgb(var(--tint-salmon));
		font-size: 0.9rem;
		text-transform: uppercase;
	}
	.carousel-wrapper.disable-animation .carousel-item {
		background-color: rgba(var(--tint-salmon), 0.15);
		padding: 0.25rem 0.5rem;
		font-size: 0.8rem;
	}

	@keyframes scrollText {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	/* Swipe-Up Transition */
	.swipe-up-enter-active,
	.swipe-up-leave-active {
		transition:
			transform 0.5s ease-in-out,
			opacity 0.3s ease-in-out;
	}

	.swipe-up-enter {
		transform: translateY(100%);
		opacity: 1;
	}

	.swipe-up-leave-to {
		transform: translateY(-100%);
		opacity: 0;
	}

	/* Fade-In Transition */
	.fade-enter-to {
		opacity: 1;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease-in-out;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	@media screen and (max-width: 767px) {
		.skills-container .container {
			gap: 0;
			padding-left: 0;
			padding-right: 0;
		}
		.tabs-container {
			justify-content: flex-start;
		}
		.tab {
			padding: 1rem;
		}
		.tab-content {
			width: calc(100% - 7rem);
		}
		.title {
			font-size: 2rem;
			line-height: 4rem;
		}
		.title-shadow {
			min-width: 16rem;
			max-width: 16rem;
			font-size: 3rem;
			line-height: 4rem;
			height: 4rem;
			overflow: hidden;
		}
	}

	@media screen and (min-width: 2000px) {
		.tabs-container {
			margin: 8rem 0;
		}
	}
</style>
