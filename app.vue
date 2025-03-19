<template>
	<header>
		<div class="container">
			<div class="header">
				<img src="./assets/images/logo.png" alt="Logo" class="logo" />
				<nav>
					<ul class="navbar-menu">
						<li><NuxtLink to="/about">About</NuxtLink></li>
						<li><NuxtLink to="/skills">Skills</NuxtLink></li>
						<li><NuxtLink to="/contact">Contact</NuxtLink></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<div class="page-content container">
		<div class="circle" :style="{ top: `${y}px`, left: `${x}px` }"></div>
		<div class="circle-dot" :style="{ top: `${y}px`, left: `${x}px` }"></div>
		<NuxtPage />
	</div>
</template>
<script setup>
	import { useMouse } from '@vueuse/core';

	const { x, y } = useMouse();
</script>

<style scoped>
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
		border: 2px solid blue;
		transform: translate(-50%, -50%);
	}
	.circle-dot {
		width: 5px;
		height: 5px;
		animation: 0.4s linear;
		background-color: blue;
		transform: translateX(-50%) translateY(-50%) translateZ(0px);
	}
</style>
