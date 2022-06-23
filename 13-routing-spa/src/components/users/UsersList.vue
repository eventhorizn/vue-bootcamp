<script setup>
	import { inject } from 'vue';
	import { useRouter } from 'vue-router';
	import UserItem from './UserItem.vue';

	const users = inject('users');

	// Programmatic navigation
	const router = useRouter();
	const confirmInput = () => {
		router.push('/teams');
	};
</script>

<template>
	<button @click="confirmInput">Confirm</button>
	<ul>
		<UserItem
			v-for="user in users"
			:key="user.id"
			:name="user.fullName"
			:role="user.role"
		/>
	</ul>
</template>

<style scoped>
	ul {
		list-style: none;
		margin: 2rem auto;
		max-width: 20rem;
		padding: 0;
	}
</style>
