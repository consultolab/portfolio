<template>
	<div class="work-container">
		<div class="page-content container">
			<div class="work-page">
				<div class="label">Portfolio</div>
				<div class="title-container">
					<div class="title-shadow">My work</div>
					<div class="title">My work</div>
				</div>
				<div class="projects">
					<PortfolioCarousel
						ref="carousel"
						v-bind="config"
						v-model="currentSlide"
						@slide-visible="updateProgress"
					>
						<PortfolioSlide
							v-for="(item, index) in data"
							:key="index"
							ref="items"
							@click="setActive(index, $event)"
						>
							<div class="item">
								<img :src="`/images/` + item.image" alt="item.image" />
								<h3>{{ item.title }}</h3>
								<p class="type">{{ item.type }}</p>
							</div>
						</PortfolioSlide>
						<template #addons>
							<PortfolioNavigation />
						</template>
					</PortfolioCarousel>
					<div class="progress-container">
						<div class="progress-bar" :style="{ width: progress + '%' }"></div>
					</div>
				</div>
			</div>
		</div>
		<Modal
			:isOpen="showModal"
			@close="setInactive"
			:project="data[activeIndex]"
			:tech="techStack"
		></Modal>
	</div>
</template>
<script setup>
	import { computed, onMounted, ref } from 'vue';
	import Modal from '../components/modal.vue';

	const showModal = ref(false);
	const activeIndex = ref(0);
	const currentSlide = ref(0);
	const items = ref([]);
	const itemsToShow = ref(1);

	const breakpoints = {
		1: { itemsToShow: 1, snapAlign: 'center', paginateByItemsToShow: true },
		768: { itemsToShow: 2, snapAlign: 'start', paginateByItemsToShow: true },
		1024: { itemsToShow: 3, snapAlign: 'start', paginateByItemsToShow: true },
	};

	const config = {
		height: 'auto',
		itemsToShow: 3,
		gap: 35,
		wrapAround: true,
		touchDrag: true,
		paginateByItemsToShow: true,
		disableOnClick: true,
		snapAlign: 'start',
		breakpoints,
	};
	const techStack = [
		{
			name: 'vuejs',
			color: '#64b586',
		},
		{
			name: 'html',
			color: '#e44c24',
		},
		{
			name: 'jade',
			color: '#6db879',
		},
		{
			name: 'css',
			color: '#58a7d7',
		},
		{
			name: 'python',
			color: '#ffca1d',
		},
		{
			name: 'stylus',
			color: '#b9d043',
		},
		{
			name: 'flask',
			color: '#000000',
		},
		{
			name: 'wordpress',
			color: '#3b7397',
		},
		{
			name: 'react-native',
			color: '#7ed0ef',
		},
		{
			name: 'expo',
			color: '#000000',
		},
	];

	const data = [
		{
			type: 'website',
			title: 'Ajusto',
			image: 'ajusto-website-presentation.webp',
			description: [
				'Ajusto is an on-demand home services marketplace that links customers with skilled pros for everything from simple repairs to larger renovation jobs. ',
			],
			contribution: [
				'On the beginning I handled the design implementation and the re-design, based on the clients agreed sketch. The frontend side was a Flask app with code written in jade, stylus and Javascript(ES6).',
				'I have also collaborate with the team on implementing the booking flow logic, based on the API data. This implied writing functions and logic in Python.'
			],
			tech: ['vuejs', 'jade', 'stylus', 'flask', 'python'],
		},
		{
			type: 'mobile app',
			title: 'UViewit',
			image: 'uviewit-app.webp',
			description: [
				'The mobile app offers the posibility to the users to have live private streaming, with a rewarding system.',
			],
			tech: ['react-native', 'expo'],
		},
		{
			type: 'website',
			title: 'Alexandru Poenaru',
			image: 'cars-website.webp',
			description: [
				'The platform contain a collection of cars for sale and other related info for the automotive domain.',
			],
			tech: ['wordpress', 'css'],
		},
		{
			type: 'mobile app',
			title: 'brainx',
			image: 'brainx-app.webp',
			description: [
				'The mobile app offers the posibility to the users to scan their profiles and establish matching connections base on profiling scores.',
			],
			tech: ['react-native', 'expo'],
		},
	];

	const totalSlides = ref(items.length);

	const progress = computed(
		() => ((currentSlide.value + itemsToShow.value) / totalSlides.value) * 100
	);

	// Detect the correct `itemsToShow` based on screen width
	const updateItemsToShow = () => {
		const width = window.innerWidth;
		if (width >= 1024) {
			itemsToShow.value = breakpoints[1024].itemsToShow;
		} else if (width >= 768) {
			itemsToShow.value = breakpoints[768].itemsToShow;
		} else {
			itemsToShow.value = breakpoints[1].itemsToShow;
		}
	};

	const updateProgress = (visibleSlides) => {
		currentSlide.value = visibleSlides[0];
	};

	onMounted(() => {
		totalSlides.value = data.length;
		updateItemsToShow();
		window.addEventListener('resize', updateItemsToShow);
	});

	watch(itemsToShow, () => {
		updateProgress([currentSlide.value]); // Recalculate when itemsToShow changes
	});

	const setActive = (index) => {
		activeIndex.value = index;
		nextTick(() => {
			if (items.value[index]) {
				showModal.value = true;
			}
		});
	};
	const setInactive = () => {
		showModal.value = false;
		activeIndex.value = null;
	};
</script>
<style scoped>
	.work-container {
		display: flex;
		align-items: center;
		flex-grow: 1;
		justify-content: center;
		width: 100%;
		z-index: 0;
		background-color: rgba(var(--tertiary), 0.05);
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
	}
	.work-page {
		width: 100%;
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
		color: rgba(var(--tertiary), 0.06);
		min-width: 30rem;
	}
	.projects {
		margin: 3rem auto;
		position: relative;
	}
	.item img {
		width: 100%;
		aspect-ratio: 2 / 1.5;
		object-fit: cover;
		object-position: top;
		margin-bottom: 1rem;
	}
	.item h3 {
		font-size: 1.2rem;
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: rgb(var(--secondary-text-color));
		font-weight: 600;
	}
	.type {
		font-size: 0.9rem;
		color: rgb(var(--tint-orange));
		margin: 0;
	}
	.progress-container {
		width: 6rem;
		height: 0.5rem;
		background: rgba(var(--primary), 0.3);
		margin: 2.5rem auto 0 auto;
		border-radius: 5px;
		overflow: hidden;
	}

	.progress-bar {
		height: 100%;
		background: rgba(var(--primary), 0.9);
		transition: width 0.3s ease-in-out;
	}
	@media screen and (max-width: 768px) {
		.page-content {
			padding-top: 1rem;
		}
		.container {
			width: calc(100% - 3rem);
		}
		.label {
			margin-bottom: 0;
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
</style>
