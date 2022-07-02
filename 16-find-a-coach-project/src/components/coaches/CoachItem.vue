<script setup>
	import { computed } from 'vue';
	import { RouterLink, useRoute } from 'vue-router';

	const props = defineProps({
		id: String,
		firstName: String,
		lastName: String,
		rate: Number,
		areas: Array,
	});

	const fullName = computed(() => {
		return props.firstName + ' ' + props.lastName;
	});

	const route = useRoute();
	const coachContactLink = computed(() => {
		return route.path + '/' + props.id + '/contact';
	});
	const coachDetailsLink = computed(() => {
		return route.path + '/' + props.id;
	});
</script>

<template>
	<li>
		<h3>{{ fullName }}</h3>
		<h4>${{ rate }}/hour</h4>
		<div>
			<span v-for="area in areas" :key="area">{{ area }}</span>
		</div>
		<div class="actions">
			<RouterLink :to="coachContactLink">Contact</RouterLink>
			<RouterLink :to="coachDetailsLink">View Details</RouterLink>
		</div>
	</li>
</template>

<style scoped>
	li {
		margin: 1rem 0;
		border: 1px solid #424242;
		border-radius: 12px;
		padding: 1rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h3,
	h4 {
		margin: 0.5rem 0;
	}

	div {
		margin: 0.5rem 0;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
