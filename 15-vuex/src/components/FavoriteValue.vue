<script setup>
	import { useStore } from 'vuex';
	import { computed } from 'vue';

	const store = useStore();

	const counter = computed(() => {
		return store.getters['counter/normalizedCounter'];
	});
</script>

<template>
	<h3>{{ counter }}</h3>
	<p>We do more..</p>
</template>
