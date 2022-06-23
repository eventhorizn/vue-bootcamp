<script setup>
	import { ref, provide } from 'vue';
	import TheNavigation from './components/nav/TheNavigation.vue';

	const teams = ref([
		{ id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
		{ id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
		{ id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
	]);
	const users = ref([
		{ id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
		{ id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
		{ id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
		{ id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
		{ id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
	]);

	provide('teams', teams.value);
	provide('users', users.value);
</script>

<template>
	<TheNavigation />
	<main>
		<RouterView></RouterView>
	</main>
</template>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
