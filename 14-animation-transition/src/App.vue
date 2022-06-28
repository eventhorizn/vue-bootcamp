<script setup>
	import BaseModal from './components/BaseModal.vue';
	import { ref } from 'vue';

	const dialogIsVisible = ref(false);
	const animatedBlock = ref(false);
	const paraIsVisible = ref(false);
	const usersAreVisible = ref(false);
	const enterInterval = ref(null);
	const leaveInterval = ref(null);

	const showDialog = () => {
		dialogIsVisible.value = true;
	};

	const hideDialog = () => {
		dialogIsVisible.value = false;
	};

	const animateBlock = () => {
		animatedBlock.value = true;
	};

	const toggleParagraph = () => {
		paraIsVisible.value = !paraIsVisible.value;
	};

	const showUsers = () => {
		usersAreVisible.value = true;
	};

	const hideUsers = () => {
		usersAreVisible.value = false;
	};

	const beforeEnter = (e) => {
		console.log('beforeEnter', e);
		e.style.opacity = 0;
	};

	const beforeLeave = (e) => {
		console.log('beforeLeave', e);
		e.style.opacity = 1;
	};

	const enter = (e, done) => {
		console.log('enter', e);

		let round = 1;

		enterInterval.value = setInterval(() => {
			e.style.opacity = round * 0.1;
			round++;

			if (round > 10) {
				clearInterval(enterInterval.value);
				done();
			}
		}, 20);
	};

	const afterEnter = (e) => {
		console.log('afterEnter', e);
	};

	const leave = (e, done) => {
		console.log('leave', e);

		let round = 1;

		leaveInterval.value = setInterval(() => {
			e.style.opacity = 1 - round * 0.1;
			round++;

			if (round > 10) {
				clearInterval(leaveInterval.value);
				done();
			}
		}, 20);
	};

	const afterLeave = (e) => {
		console.log('afterLeave', e);
	};

	const enterCancelled = (e) => {
		console.log('enterCancelled', e);
		clearInterval(enterInterval.value);
	};

	const leaveCancelled = (e) => {
		console.log('leaveCancelled', e);
		clearInterval(leaveInterval.value);
	};
</script>

<template>
	<div class="container">
		<div class="block" :class="{ animate: animatedBlock }"></div>
		<button @click="animateBlock">Animate</button>
	</div>

	<div class="container">
		<transition
			:css="false"
			name="para"
			@before-enter="beforeEnter"
			@before-leave="beforeLeave"
			@enter="enter"
			@after-enter="afterEnter"
			@leave="leave"
			@after-leave="afterLeave"
			@enter-cancelled="enterCancelled"
			@leave-cancelled="leaveCancelled"
		>
			<p v-if="paraIsVisible">This is only sometimes visible...</p>
		</transition>

		<button @click="toggleParagraph">Toggle Paragraph</button>
	</div>

	<div class="container">
		<Transition name="fade-button" mode="out-in">
			<button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
			<button @click="hideUsers" v-else>Hide Users</button>
		</Transition>
	</div>

	<BaseModal @close="hideDialog" :open="dialogIsVisible">
		<p>This is a test dialog!</p>
		<button @click="hideDialog">Close it!</button>
	</BaseModal>

	<div class="container">
		<button @click="showDialog">Show Dialog</button>
	</div>
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

	button {
		font: inherit;
		padding: 0.5rem 2rem;
		border: 1px solid #810032;
		border-radius: 30px;
		background-color: #810032;
		color: white;
		cursor: pointer;
	}

	button:hover,
	button:active {
		background-color: #a80b48;
		border-color: #a80b48;
	}

	.block {
		width: 8rem;
		height: 8rem;
		background-color: #290033;
		margin-bottom: 2rem;
		/* transition: transform 0.3s ease-out; */
	}

	.container {
		max-width: 40rem;
		margin: 2rem auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 2rem;
		border: 2px solid #ccc;
		border-radius: 12px;
	}

	.animate {
		/* transform: translateX(-150px); */
		animation: slide-scale 0.3s ease-out forwards;
	}

	.fade-button-enter-from,
	.fade-button-leave-to {
		opacity: 0;
	}

	.fade-button-enter-active {
		transition: opacity 0.3s ease-out;
	}

	.fade-button-leave-active {
		transition: opacity 0.3s ease-in;
	}

	.fade-button-enter-to,
	.fade-button-leave-from {
		opacity: 1;
	}

	@keyframes slide-scale {
		0% {
			transform: translateX(0) scale(1);
		}

		70% {
			transform: translateX(-120px) scale(1.1);
		}

		100% {
			transform: translateX(-150px) scale(1);
		}
	}
</style>
