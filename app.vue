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
	<div>
		<NuxtPage />
	</div>
</template>
