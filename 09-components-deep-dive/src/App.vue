<script setup>
	import TheHeader from './components/layout/TheHeader.vue';
	import ActiveGoals from './components/ActiveGoals.vue';
	import ManageGoals from './components/ManageGoals.vue';
	// import BadgeList from './components/BadgeList.vue';
	// import UserInfo from './components/UserInfo.vue';
	// import CourseGoals from './components/CourseGoals.vue';
</script>

<template>
	<div>
		<TheHeader />
		<button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
		<button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
		<!-- <ActiveGoals v-if="selectedComponent === 'activeGoals'"></ActiveGoals>
		<ManageGoals v-if="selectedComponent === 'manageGoals'"></ManageGoals> -->
		<KeepAlive>
			<component :is="selectedComponent"></component>
		</KeepAlive>

		<!-- <BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
		<CourseGoals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps['anotherProp'] }}</p>
		</CourseGoals> -->
	</div>
</template>

<script>
	export default {
		components: {
			ActiveGoals,
			ManageGoals,
		},
		data() {
			return {
				selectedComponent: 'ActiveGoals',
				activeUser: {
					name: 'Gary Hake',
					description: 'Site owner and admin',
					role: 'admin',
				},
			};
		},
		methods: {
			setSelectedComponent(cmp) {
				this.selectedComponent = cmp;
			},
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
