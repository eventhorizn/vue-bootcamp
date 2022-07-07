<script setup>
	import BaseButton from '../../components/ui/BaseButton.vue';
	import BaseCard from '../../components/ui/BaseCard.vue';
	import BaseDialog from '../../components/ui/BaseDialog.vue';
	import BaseSpinner from '../../components/ui/BaseSpinner.vue';
	import { ref, computed } from 'vue';
	import { useStore } from 'vuex';

	const email = ref('');
	const password = ref('');
	const formIsValid = ref(true);
	const mode = ref('login');
	const isLoading = ref(false);
	const error = ref(null);

	const store = useStore();

	const submitForm = async () => {
		formIsValid.value = true;
		if (
			email.value === '' ||
			!email.value.includes('@') ||
			password.value.length < 6
		) {
			formIsValid.value = false;
			return;
		}

		isLoading.value = true;

		const actionPayload = {
			email: email.value,
			password: password.value,
		};

		try {
			if (mode.value === 'login') {
				await store.dispatch('login', actionPayload);
			} else {
				await store.dispatch('signup', actionPayload);
			}
		} catch (err) {
			error.value = err.message || 'Failed to authenticate, try later';
		}

		isLoading.value = false;
	};
	const switchAuthMode = () => {
		if (mode.value === 'login') {
			mode.value = 'signup';
		} else {
			mode.value = 'login';
		}
	};

	const handleError = () => {
		error.value = null;
	};

	const submitButtonCaption = computed(() => {
		if (mode.value === 'login') {
			return 'Login';
		} else {
			return 'Signup';
		}
	});
	const switchModeButtonCaption = computed(() => {
		if (mode.value === 'login') {
			return 'Signup instead';
		} else {
			return 'Login instead';
		}
	});
</script>

<template>
	<div>
		<BaseDialog :show="!!error" title="An error occured" @close="handleError">
			<p>{{ error }}</p>
		</BaseDialog>
		<BaseDialog :show="isLoading" title="Authenticating..." fixed>
			<BaseSpinner></BaseSpinner>
		</BaseDialog>
		<BaseCard>
			<form @submit.prevent="submitForm">
				<div class="form-control">
					<label for="email">Email</label>
					<input type="email" id="email" v-model.trim="email" />
				</div>

				<div class="form-control">
					<label for="password">Password</label>
					<input type="password" id="password" v-model.trim="password" />
				</div>

				<p v-if="!formIsValid">
					Please enter a valid email and password (must be at least 6 characters
					long)
				</p>

				<BaseButton>{{ submitButtonCaption }}</BaseButton>
				<BaseButton type="button" mode="flat" @click="switchAuthMode">
					{{ switchModeButtonCaption }}
				</BaseButton>
			</form>
		</BaseCard>
	</div>
</template>

<style scoped>
	form {
		margin: 1rem;
		padding: 1rem;
	}

	.form-control {
		margin: 0.5rem 0;
	}

	label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		border: 1px solid #ccc;
		padding: 0.15rem;
	}

	input:focus,
	textarea:focus {
		border-color: #3d008d;
		background-color: #faf6ff;
		outline: none;
	}
</style>
