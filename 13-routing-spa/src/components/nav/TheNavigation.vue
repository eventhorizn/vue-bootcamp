<script setup>
	import TeamsList from '../teams/TeamsList.vue';
	import UsersList from '../users/UsersList.vue';

	const emit = defineEmits(['setPage']);
	const setActivePage = (page) => {
		emit('setPage', page);
	};
</script>

<template>
	<header>
		<nav>
			<ul>
				<li>
					<button @click="setActivePage(TeamsList)">Teams</button>
				</li>
				<li>
					<button @click="setActivePage(UsersList)">Users</button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
	header {
		width: 100%;
		height: 5rem;
		background-color: #11005c;
	}

	nav {
		height: 100%;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li {
		margin: 0 2rem;
	}

	button {
		font: inherit;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		color: white;
		padding: 0.5rem 1.5rem;
		display: inline-block;
	}

	button:hover,
	button:active {
		color: #f1a80a;
		border-color: #f1a80a;
		background-color: #1a037e;
	}
</style>
