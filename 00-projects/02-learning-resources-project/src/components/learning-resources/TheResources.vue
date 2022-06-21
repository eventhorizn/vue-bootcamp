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

	provide('addResource', (title, description, url) => {
		const newResource = {
			id: new Date().toISOString(),
			title,
			description,
			link: url,
		};

		storedResources.value.unshift(newResource);
		selectedTab.value = StoredResources;
	});
	provide('deleteResource', (resId) => {
		const index = storedResources.value.findIndex((x) => x.id === resId);

		storedResources.value.splice(index, 1);
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
	<KeepAlive>
		<component :is="selectedTab"></component>
	</KeepAlive>
</template>
