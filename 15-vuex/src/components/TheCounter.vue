<script setup>
	import { useStore } from 'vuex';
	import { computed } from 'vue';

	const store = useStore();

	const counter = computed(() => {
		return store.state.counter;
	});
</script>

<template>
	<h3>{{ counter }}</h3>
</template>
