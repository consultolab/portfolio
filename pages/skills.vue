<template>
	<div class="skills-container">
		<div class="container">
			<div class="tabs-container">
				<button
					v-for="(tab, index) in tabs"
					:key="index"
					class="tab"
					:class="{ active: activeTab === index }"
					@click="activeTab = index"
				>
					<span class="title">{{ tab.title }}</span>
					<div class="tab-dot-container">
						<span class="tab-dot"></span>
					</div>
				</button>
			</div>
			<div class="tab-content">
				<transition name="fade" mode="out-in">
					<div :key="activeTab" class="content-box">
						<h2>{{ tabs[activeTab].title }}</h2>
						<p
							v-for="(infoRow, infoIndex) in tabs[activeTab].content"
							:key="infoIndex"
						>
							{{ infoRow }}
						</p>
						<div v-if="tabs[activeTab].labels?.length" class="labels">
							<span
								v-for="(label, labelIndex) in tabs[activeTab].labels"
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

<script>
	export default {
		data() {
			return {
				activeTab: 0,
				tabs: [
					{
						title: 'Photoshop',
						content: ['Tab 1'],
					},
					{
						title: 'Html/Css',
						content: [
							'Proficient in writing clean, semantic HTML and modern CSS to create responsive, accessible, and visually appealing web interfaces. Experienced in CSS frameworks, animations, and design techniques to enhance user experience.',
							'I focus on building pixel-perfect designs that adapt seamlessly across different devices and screen sizes. With a deep understanding of flexbox, grid, and modern CSS methodologies, I ensure that layouts are both functional and aesthetically pleasing.',
						],
						labels: ['web design', 'responsive', 'UI/UX'],
					},
					{ title: 'Javascript', content: ['Tab 3'] },
					{ title: 'Python', content: ['Tab 4'] },
					{ title: 'React Native', content: ['Tab 5'] },
				],
				headerHeight: '0px',
			};
		},

		mounted() {
			const header = document.getElementById('header');
			if (header) {
				this.headerHeight = header.offsetHeight + 'px';
			}
		},
	};
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
		gap: 2.5rem;
		justify-content: center;
		width: 100%;
	}

	.tabs-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
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
	}

	.tab .title {
		font-size: 1.1rem;
		font-weight: 500;
		color: rgba(var(--secondary-text-color), 1);
	}

	.tab.active .title,
	.tab:hover .title {
		color: rgb(var(--main-text-color));
	}

	.tab-dot-container {
		width: 35px;
		height: 35px;
		margin-left: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.tab-dot {
		display: block;
		width: 16px;
		height: 16px;
		background-color: rgba(var(--primary), 0.6);
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
	}

	.tab.active .tab-dot,
	.tab:hover .tab-dot {
		background-color: rgb(var(--primary));
		width: 26px;
		height: 26px;
	}

	.tab-content {
		padding: 2rem;
		width: 40%;
		display: flex;
		align-items: center;
	}

	.tab-content h2 {
		color: rgb(var(--tint-orange));
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
		background-color: rgba(var(--tertiary), 0.2);
		color: rgb(var(--tertiary));
	}

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
