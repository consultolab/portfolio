<template>
	<div class="main-container">
		<header :class="{ 'header-secondary': route.path.includes('/skills') }">
			<div class="container">
				<div id="header" class="header">
					<img src="./assets/images/default-logo.png" alt="Logo" class="logo" />
					<nav>
						<ul class="navbar-menu">
							<li><NuxtLink to="/about">About me</NuxtLink></li>
							<li><NuxtLink to="/skills">Skills</NuxtLink></li>
							<li><NuxtLink to="/contact">Contact</NuxtLink></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<div class="page-container">
			<div class="circle" :style="{ top: `${y}px`, left: `${x}px` }"></div>
			<div class="circle-dot" :style="{ top: `${y}px`, left: `${x}px` }"></div>
			<NuxtPage />
		</div>
	</div>
</template>
<script setup>
	import { useMouse } from '@vueuse/core';
	const route = useRoute();

	const { x, y } = useMouse();
</script>

<style scoped>
	.main-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.circle,
	.circle-dot {
		border-radius: 50%;
		position: fixed;
		pointer-events: none;
		z-index: 999;
	}
	.circle {
		width: 25px;
		height: 25px;
		border: 1px solid rgb(var(--tertiary));
		transform: translate(-50%, -50%);
	}
	.circle-dot {
		width: 5px;
		height: 5px;
		animation: 0.4s linear;
		background-color: rgb(var(--tertiary));
		transform: translateX(-50%) translateY(-50%) translateZ(0px);
	}
</style>
