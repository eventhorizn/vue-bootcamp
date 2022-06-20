<script setup>
	import LearningResource from './LearningResource.vue';

	defineProps(['resources']);
</script>

<template>
	<ul>
		<LearningResource
			v-for="sr in resources"
			:key="sr.id"
			:title="sr.title"
			:description="sr.description"
			:link="sr.link"
		/>
	</ul>
</template>

<style scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		margin: auto;
		max-width: 40rem;
	}
</style>
