<script setup>
	import BaseContainer from './components/BaseContainer.vue';
	import TheCounter from './components/TheCounter.vue';
	import ChangeCounter from './components/ChangeCounter.vue';
	import FavoriteValue from './components/FavoriteValue.vue';

	import { useStore } from 'vuex';

	const store = useStore();

	const addOne = () => {
		//store.commit('increase', { value: 10 });
		store.commit({
			type: 'increase',
			value: 10,
		});
	};
</script>

<template>
	<BaseContainer title="Vuex">
		<TheCounter></TheCounter>
		<FavoriteValue></FavoriteValue>
		<button @click="addOne">Add 10</button>
		<ChangeCounter></ChangeCounter>
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
