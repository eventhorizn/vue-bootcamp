<script setup>
	import { RouterLink } from 'vue-router';
	import BaseCard from '../components/ui/BaseCard.vue';
</script>

<template>
	<section>
		<BaseCard>
			<h2>Page not found</h2>
			<p>
				This page could not be found - maybe check out all our
				<RouterLink to="/coaches">coaches.</RouterLink>
			</p>
		</BaseCard>
	</section>
</template>
