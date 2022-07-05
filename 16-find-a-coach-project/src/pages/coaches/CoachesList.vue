<script setup>
	import { computed, ref } from 'vue';
	import { useStore } from 'vuex';
	import CoachItem from '../../components/coaches/CoachItem.vue';
	import BaseCard from '../../components/ui/BaseCard.vue';
	import BaseButton from '../../components/ui/BaseButton.vue';
	import CoachFilter from '../../components/coaches/CoachFilter.vue';
	import BaseSpinner from '../../components/ui/BaseSpinner.vue';

	const store = useStore();

	const activeFilters = ref({
		frontend: true,
		backend: true,
		career: true,
	});
	const setFilters = (updatedFilters) => {
		activeFilters.value = updatedFilters;
	};

	const isLoading = ref(false);
	const loadCoaches = async () => {
		isLoading.value = true;
		await store.dispatch('coaches/loadCoaches');
		isLoading.value = false;
	};

	const filteredCoaches = computed(() => {
		const coaches = store.getters['coaches/coaches'];
		return coaches.filter((x) => {
			if (activeFilters.value.frontend && x.areas.includes('frontend')) {
				return true;
			}
			if (activeFilters.value.backend && x.areas.includes('backend')) {
				return true;
			}
			if (activeFilters.value.career && x.areas.includes('career')) {
				return true;
			}

			return false;
		});
	});

	const hasCoaches = computed(() => {
		return !isLoading.value && store.getters['coaches/hasCoaches'];
	});

	const isCoach = computed(() => {
		return store.getters['coaches/isCoach'];
	});

	loadCoaches();
</script>

<template>
	<section><CoachFilter @changeFilter="setFilters"></CoachFilter></section>
	<section>
		<BaseCard>
			<div class="controls">
				<BaseButton mode="outline" @click="loadCoaches">Refresh</BaseButton>
				<BaseButton v-if="!isCoach && !isLoading" link to="/register"
					>Register as Coach</BaseButton
				>
			</div>
			<div v-if="isLoading">
				<BaseSpinner></BaseSpinner>
			</div>
			<ul v-else-if="hasCoaches">
				<CoachItem
					v-for="coach in filteredCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:rate="coach.hourlyRate"
					:areas="coach.areas"
				/>
			</ul>
			<h3 v-else>No coaches found.</h3>
		</BaseCard>
	</section>
</template>

<style scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.controls {
		display: flex;
		justify-content: space-between;
	}
</style>
