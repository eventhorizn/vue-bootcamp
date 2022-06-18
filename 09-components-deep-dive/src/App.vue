<script setup>
	import TheHeaderVue from './components/TheHeader.vue';
	import BadgeListVue from './components/BadgeList.vue';
	import UserInfoVue from './components/UserInfo.vue';
</script>

<template>
	<div>
		<TheHeaderVue />
		<BadgeListVue />
		<UserInfoVue
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeUser: {
					name: 'Maximilian Schwarzmüller',
					description: 'Site owner and admin',
					role: 'admin',
				},
			};
		},
	};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
