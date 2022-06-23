<script setup>
	import { inject, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import UserItem from '../users/UserItem.vue';

	const teamName = ref('');
	const members = ref([]);

	const teams = inject('teams');
	const users = inject('users');
	const route = useRoute();

	const teamId = route.params.teamId;
	const selectedTeam = teams.find((x) => x.id === teamId);
	const stMembers = selectedTeam.members;
	const selectedMembers = [];
	for (const member of stMembers) {
		const selectedUser = users.find((x) => x.id === member);
		selectedMembers.push(selectedUser);
	}

	members.value = selectedMembers;
	teamName.value = selectedTeam.name;
</script>

<template>
	<section>
		<h2>{{ teamName }}</h2>
		<ul>
			<UserItem
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"
			/>
		</ul>
	</section>
</template>

<style scoped>
	section {
		margin: 2rem auto;
		max-width: 40rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		border-radius: 12px;
	}

	h2 {
		margin: 0.5rem 0;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
