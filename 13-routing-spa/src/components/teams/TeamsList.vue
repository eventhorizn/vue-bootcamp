<script setup>
	import { inject } from 'vue';
	import TeamsItem from './TeamsItem.vue';

	const teams = inject('teams');
</script>

<template>
	<ul>
		<TeamsItem
			v-for="team in teams"
			:key="team.id"
			:name="team.name"
			:member-count="team.members.length"
		/>
	</ul>
</template>

<style scoped>
	ul {
		list-style: none;
		margin: 2rem auto;
		max-width: 40rem;
		padding: 0;
	}
</style>
