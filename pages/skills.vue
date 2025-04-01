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
						<h2>{{ data[activeIndex].title }}</h2>
						<p
							v-for="(infoRow, infoIndex) in data[activeIndex].content"
							:key="infoIndex"
						>
							{{ infoRow }}
						</p>
						<div v-if="data[activeIndex].labels?.length" class="labels">
							<span
								v-for="(label, labelIndex) in data[activeIndex].labels"
								:key="labelIndex"
								class="label"
							>
								{{ label }}
							</span>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { nextTick, onMounted } from 'vue';

	const activeIndex = ref(0);
	const activeTop = ref(0);
	const items = ref([]);

	const data = [
		{
			title: 'Photoshop',
			content: ['Tab 1'],
			image: 'photoshop-icon.png',
		},
		{
			title: 'Html/Css',
			content: [
				'Proficient in writing clean, semantic HTML and modern CSS to create responsive, accessible, and visually appealing web interfaces. Experienced in CSS frameworks, animations, and design techniques to enhance user experience.',
				'I focus on building pixel-perfect designs that adapt seamlessly across different devices and screen sizes. With a deep understanding of flexbox, grid, and modern CSS methodologies, I ensure that layouts are both functional and aesthetically pleasing.',
			],
			labels: ['web design', 'responsive', 'UI/UX'],
			image: 'html-icon.png',
		},
		{
			title: 'Javascript',
			content: ['Tab 3'],
			image: 'typescript-icon.png',
		},
		{
			title: 'Python',
			content: ['Tab 4'],
			image: 'python-icon.webp',
		},
		{
			title: 'React Native',
			content: ['Tab 5'],
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
	}

	.active-border {
		position: absolute;
		right: -1px;
		width: 4px;
		height: 4rem;
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
		border: none;
		background-color: transparent;
		padding: 1rem;
		transition: border-color 0.5s ease;
		border-right: 2px solid rgba(var(--primary), 0.1);
	}

	.tab img {
		width: 2rem;
		height: 2rem;
		object-fit: contain;
		filter: grayscale(1);
	}

	.tab.active img,
	.tab:hover img {
		filter: grayscale(0);
	}

	.tab-content {
		padding: 2rem 1rem;
		width: 40%;
		display: flex;
		align-items: center;
	}

	.tab-content h2 {
		color: rgb(var(--primary));
		text-transform: uppercase;
	}

	.labels {
		display: flex;
		flex-wrap: wrap;
	}

	.label {
		padding: 0.25rem 0.75rem;
		font-size: 0.9rem;
		margin-right: 0.5rem;
		border-radius: 0.2rem;
		background-color: rgba(var(--tertiary), 0.05);
		color: rgb(var(--tertiary));
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
</style>
