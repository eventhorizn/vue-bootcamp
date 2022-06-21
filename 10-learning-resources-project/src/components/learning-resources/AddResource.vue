<script setup>
	import BaseCard from '../ui/BaseCard.vue';
	import BaseButton from '../ui/BaseButton.vue';
	import { inject, ref } from 'vue';

	const titleInput = ref('');
	const descInput = ref('');
	const linkInput = ref('');

	const addResource = inject('addResource');
	const submitData = () => {
		addResource(titleInput.value, descInput.value, linkInput.value);
	};
</script>

<template>
	<BaseCard>
		<form @submit.prevent="submitData">
			<div class="form-control">
				<label for="title">Title</label>
				<input type="text" name="title" id="title" v-model="titleInput" />
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					name="description"
					id="description"
					rows="3"
					v-model="descInput"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input type="url" name="link" id="title" v-model="linkInput" />
			</div>
			<div>
				<BaseButton type="submit">Add Resourse</BaseButton>
			</div>
		</form>
	</BaseCard>
</template>

<style scoped>
	label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		padding: 0.15rem;
		border: 1px solid #ccc;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #3a0061;
		background-color: #f7ebff;
	}

	.form-control {
		margin: 1rem 0;
	}
</style>
