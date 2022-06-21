<script setup>
	import BaseCard from '../ui/BaseCard.vue';
	import BaseButton from '../ui/BaseButton.vue';
	import StoredResources from './StoredResources.vue';
	import AddResource from './AddResource.vue';
	import { ref, provide, shallowRef } from 'vue';

	const storedResources = ref([
		{
			id: 'official-guide',
			title: 'Official Guide',
			description: 'The official Vue.js documentation',
			link: 'https://vuejs.org',
		},
		{
			id: 'goggle',
			title: 'Google',
			description: 'Learn to google...',
			link: 'https://google.com',
		},
	]);
	provide('resources', storedResources);

	const selectedTab = shallowRef(StoredResources);
	const setSelectedTab = (tab) => {
		selectedTab.value = tab;
	};
</script>

<template>
	<BaseCard>
		<BaseButton @click="setSelectedTab(StoredResources)">
			Stored Resources
		</BaseButton>
		<BaseButton @click="setSelectedTab(AddResource)"> Add Resource </BaseButton>
	</BaseCard>
	<component :is="selectedTab"></component>
</template>
