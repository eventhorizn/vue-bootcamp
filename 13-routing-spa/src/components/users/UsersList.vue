<script setup>
	import { inject } from 'vue';
	import UserItem from './UserItem.vue';

	const users = inject('users');
</script>

<template>
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
