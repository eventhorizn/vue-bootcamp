<script setup>
	import { useStore } from 'vuex';
	import { computed } from '@vue/reactivity';

	import BaseContainer from './components/BaseContainer.vue';
	import TheCounter from './components/TheCounter.vue';
	import ChangeCounter from './components/ChangeCounter.vue';
	import FavoriteValue from './components/FavoriteValue.vue';
	import UserAuth from './components/UserAuth.vue';

	const store = useStore();

	const addOne = () => {
		//store.commit('increase', { value: 10 });
		store.dispatch({
			type: 'counter/increase',
			value: 10,
		});
	};

	const isAuth = computed(() => {
		return store.getters['auth/userIsAuthenticated'];
	});
</script>

<template>
	<BaseContainer title="Vuex" v-if="isAuth">
		<TheCounter></TheCounter>
		<FavoriteValue></FavoriteValue>
		<button @click="addOne">Add 10</button>
		<ChangeCounter></ChangeCounter>
	</BaseContainer>
	<BaseContainer title="Auth">
		<UserAuth></UserAuth>
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
