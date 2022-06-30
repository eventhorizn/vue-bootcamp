<script setup>
	import BaseContainer from './components/BaseContainer.vue';
	import TheCounter from './components/TheCounter.vue';
	import { useStore } from 'vuex';

	const store = useStore();

	const addOne = () => {
		store.state.counter++;
	};
</script>

<template>
	<BaseContainer title="Vuex">
		<TheCounter></TheCounter>
		<button @click="addOne">Add 1</button>
	</BaseContainer>
</template>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
