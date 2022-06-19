<script setup>
	import TheHeader from './components/TheHeader.vue';
	import BadgeList from './components/BadgeList.vue';
	import UserInfo from './components/UserInfo.vue';
	import CourseGoals from './components/CourseGoals.vue';
</script>

<template>
	<div>
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
		<CourseGoals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps['anotherProp'] }}</p>
		</CourseGoals>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeUser: {
					name: 'Gary Hake',
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
