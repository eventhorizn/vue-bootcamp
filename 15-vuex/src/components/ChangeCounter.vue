<script setup>
	import { useStore } from 'vuex';

	const store = useStore();

	const addOne = () => {
		store.commit('increment');
	};
</script>

<template>
	<button @click="addOne">Add 1</button>
</template>
