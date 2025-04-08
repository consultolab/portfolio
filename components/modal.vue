<template>
	<Teleport to="body">
		<Transition name="slide">
			<div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
				<button class="close-btn" @click="closeModal"></button>
				<div class="modal-content">
					<div class="info">
						<div class="label">{{ project.type }}</div>
						<h1>{{ project.title }}</h1>
						<p
							v-for="(infoRow, infoIndex) in project.description"
							:key="infoIndex"
							class="info-row"
						>
							{{ infoRow }}
						</p>
						<div class="tech-info">
							<div class="title">Tech stack:</div>
							<div class="tech-stack">
								<div
									v-for="(item, index) in project.tech"
									:key="item"
									class="item"
								>
									<span
										:style="{ 'background-color': getTechColor(item) }"
										class="tech-color"
									></span>
									<span>{{ item }}</span>
								</div>
							</div>
						</div>
						<div class="contribution">
							<h2>What I did</h2>
							<p
								v-if="project.contribution"
								v-for="(infoRow, infoIndex) in project.contribution"
								:key="infoIndex"
								class="extra-info-row"
							>
								{{ infoRow }}
							</p>
						</div>
						<NuxtLink to="/work" class="primary-button">
							See other projects
						</NuxtLink>
					</div>
					<img :src="`/images/` + project.image" alt="project.image" />
				</div>
				<slot></slot>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	const props = defineProps({
		isOpen: Boolean,
		project: Object,
		tech: Array,
	});
	const emit = defineEmits(['close']);

	const closeModal = () => {
		emit('close');
	};

	const getTechColor = (tech) => {
		return props?.tech?.find((i) => i.name === tech)?.color;
	};
</script>

<style scoped>
	.modal-overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		background: rgb(var(--white));
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.modal-content {
		position: relative;
		display: flex;
		align-items: stretch;
		overflow-y: scroll;
		padding: 2rem;
		width: calc(100% - 4rem);
		height: calc(100% - 4rem);
	}

	img {
		width: 40%;
		aspect-ratio: 1 / 1;
		object-fit: contain;
		object-position: center;
	}

	.info {
		padding: 3rem 5rem 3rem 3rem;
		flex-basis: 50%;
	}

	.label {
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: uppercase;
		color: rgb(var(--tint-orange));
		margin-bottom: 0.5rem;
	}

	h1 {
		margin-top: 0;
	}

	.info-row {
		color: rgb(var(--secondary-text-color));
	}

	.tech-info {
		padding: 2rem 0;
	}
	.tech-info .title {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: rgb(var(--tertiary));
		text-transform: uppercase;
	}
	.tech-info .item {
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}
	.tech-info .item span {
		display: inline-block;
		position: relative;
	}
	.tech-info .tech-color {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}

	.contribution {
		margin-bottom: 2rem;
	}
	.contribution h2 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-weight: 500;
		color: rgb(var(--tint-salmon));
	}

	.contribution .extra-info-row {
		font-size: 1rem;
		line-height: 1.6rem;
		color: rgb(var(--primary));
	}

	.close-btn {
		position: absolute;
		top: 0rem;
		left: 0rem;
		cursor: pointer;
		color: rgb(var(--main-text-color));
		border: none;
		background: none;
		z-index: 1;
		width: 4rem;
		height: 5rem;
		background-image: url('../assets/images/next-arrow.svg');
		transform: rotate(-180deg);
		background-size: 30%;
		background-position: center;
		background-repeat: no-repeat;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: transform 0.5s ease-in-out;
	}
	.slide-enter-from,
	.slide-leave-to {
		transform: translateX(100%); /* Start off-screen */
	}

	@media screen and (max-width: 768px) {
		.modal-content {
			flex-direction: column-reverse;
		}
		img {
			width: auto;
			height: 20rem;
		}
		.info {
			flex-basis: 100%;
			padding: 0 0 2rem 0;
		}
	}
</style>
