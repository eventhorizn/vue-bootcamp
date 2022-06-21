<script setup>
	import BaseCard from '../ui/BaseCard.vue';
	import BaseButton from '../ui/BaseButton.vue';

	defineProps({
		title: String,
		description: String,
		link: String,
	});
</script>

<template>
	<li>
		<BaseCard>
			<header>
				<h3>{{ title }}</h3>
				<BaseButton mode="flat">Delete</BaseButton>
			</header>

			<p>{{ description }}</p>
			<nav>
				<a :href="link">View Resource</a>
			</nav>
		</BaseCard>
	</li>
</template>

<style scoped>
	li {
		margin: auto;
		max-width: 40rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		font-size: 1.25rem;
		margin: 0.5rem 0;
	}

	p {
		margin: 0.5rem 0;
	}

	a {
		text-decoration: none;
		color: #ce5c00;
	}

	a:hover,
	a:active {
		color: #c89300;
	}
</style>
