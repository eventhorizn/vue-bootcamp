<script setup>
	import BaseCard from '../ui/BaseCard.vue';
	import BaseButton from '../ui/BaseButton.vue';
	import StoredResources from './StoredResources.vue';
	import AddResource from './AddResource.vue';
	import { ref, provide, shallowRef } from 'vue';
	import { computed } from '@vue/reactivity';

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

	const storedResButtonMode = computed(() => {
		return selectedTab.value === StoredResources ? null : 'flat';
	});
	const addResButtonMode = computed(() => {
		return selectedTab.value === AddResource ? null : 'flat';
	});
</script>

<template>
	<BaseCard>
		<BaseButton
			@click="setSelectedTab(StoredResources)"
			:mode="storedResButtonMode"
		>
			Stored Resources
		</BaseButton>
		<BaseButton @click="setSelectedTab(AddResource)" :mode="addResButtonMode">
			Add Resource
		</BaseButton>
	</BaseCard>
	<component :is="selectedTab"></component>
</template>
