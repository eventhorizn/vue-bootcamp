<script>
	import ErrorAlert from './ErrorAlert.vue';

	export default {
		components: {
			ErrorAlert,
		},
		data() {
			return {
				inputIsInvalid: false,
			};
		},
		methods: {
			setGoal() {
				const enteredValue = this.$refs.goal.value;
				if (enteredValue === '') {
					this.inputIsInvalid = true;
				}
			},
			confirmError() {
				this.inputIsInvalid = false;
			},
		},
	};
</script>

<template>
	<div>
		<h2>Manage Goals</h2>
		<input type="text" ref="goal" />
		<button @click="setGoal">Set Goal</button>
		<Teleport to="body">
			<ErrorAlert v-if="inputIsInvalid">
				<h2>Input is Invalid!</h2>
				<p>Please enter at least a few characters</p>
				<button @click="confirmError">Ok</button>
			</ErrorAlert>
		</Teleport>
	</div>
</template>
