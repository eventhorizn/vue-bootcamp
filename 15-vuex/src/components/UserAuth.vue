<script setup>
	import { computed } from '@vue/reactivity';
	import { useStore } from 'vuex';

	const store = useStore();

	const login = () => {
		store.dispatch('auth/login');
	};
	const logout = () => {
		store.dispatch('auth/logout');
	};

	const isAuth = computed(() => {
		return store.getters['auth/userIsAuthenticated'];
	});

	const isTestAuth = computed(() => {
		return store.getters['auth/testAuth'];
	});
</script>

<template>
	<button @click="login" v-if="!isAuth">Login</button>
	<button @click="logout" v-if="isAuth">Logout</button>
	<p>{{ isTestAuth }}</p>
</template>
