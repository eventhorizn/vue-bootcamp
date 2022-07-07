<script setup>
	import { watch } from 'vue';
	import { RouterView, useRouter } from 'vue-router';
	import { useStore } from 'vuex';
	import TheHeader from './components/layout/TheHeader.vue';

	const store = useStore();
	const router = useRouter();

	store.dispatch('tryLogin');

	watch(store.getters.didAutoLogout, (curValue, oldValue) => {
		if (curValue && curValue !== oldValue) {
			router.replace('/coaches');
		}
	});
</script>

<template>
	<TheHeader></TheHeader>
	<RouterView v-slot="slotProps">
		<Transition name="route" mode="out-in">
			<Component :is="slotProps.Component"></Component>
		</Transition>
	</RouterView>
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

	* {
		box-sizing: border-box;
	}

	html {
		font-family: 'Roboto', sans-serif;
	}

	body {
		margin: 0;
	}

	.route-enter-from {
		opacity: 0;
		transform: translateY(-30px);
	}

	.route-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}

	.route-enter-active {
		transition: all 0.3s ease-out;
	}

	.route-leave-active {
		transition: all 0.3s ease-in;
	}

	.route-enter-to,
	.route-leave-from {
		opacity: 1;
		transform: translateY(0);
	}
</style>
