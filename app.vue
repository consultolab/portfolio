<template>
	<header>
		<img src="./assets/images/logo.png" alt="Logo" class="logo" />
		<nav>
			<ul>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li><NuxtLink to="/skills">Skills</NuxtLink></li>
				<li><NuxtLink to="/contact">Contact</NuxtLink></li>
			</ul>
		</nav>
	</header>
	<div>
		<NuxtPage />
	</div>
</template>
