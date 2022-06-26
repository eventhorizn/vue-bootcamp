<script>
	export default {
		beforeRouteEnter(to, from, next) {
			console.log('UsersList Cmp beforeRouteEnter');
			console.log(to, from);
			next();
		},
	};
</script>

<script setup>
	import { inject, ref } from 'vue';
	import { onBeforeRouteLeave, useRouter } from 'vue-router';
	import UserItem from './UserItem.vue';

	const users = inject('users');

	// Programmatic navigation
	const router = useRouter();
	const confirmInput = () => {
		router.push('/teams');
	};

	const changesSaved = ref(false);
	const saveChanges = () => {
		changesSaved.value = true;
	};

	onBeforeRouteLeave((to, from, next) => {
		console.log('Users Cmp beforeRouteLeave');
		console.log(to, from);

		if (changesSaved.value) {
			next();
		} else {
			const userLeaves = confirm('Are you sure? You have unsaved changes');
			next(userLeaves);
		}
	});
</script>

<template>
	<button @click="confirmInput">Confirm</button>
	<button @click="saveChanges">Save Changes</button>
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
