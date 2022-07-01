<script setup>
	import { useStore } from 'vuex';
	import { computed } from 'vue';

	const store = useStore();

	const counter = computed(() => {
		return store.getters['counter/finalCounter'];
	});
</script>

<template>
	<h3>{{ counter }}</h3>
</template>
