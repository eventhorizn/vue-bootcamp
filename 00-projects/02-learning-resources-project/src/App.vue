<script setup>
	import TheHeader from './components/layouts/TheHeader.vue';
	import TheResources from './components/learning-resources/TheResources.vue';
</script>

<template>
	<TheHeader title="Remember Me" />
	<TheResources />
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
</style>
