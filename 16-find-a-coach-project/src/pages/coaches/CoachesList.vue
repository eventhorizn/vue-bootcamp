<script setup>
	import { computed, ref } from 'vue';
	import { useStore } from 'vuex';
	import CoachItem from '../../components/coaches/CoachItem.vue';
	import BaseCard from '../../components/ui/BaseCard.vue';
	import BaseButton from '../../components/ui/BaseButton.vue';
	import CoachFilter from '../../components/coaches/CoachFilter.vue';
	import BaseSpinner from '../../components/ui/BaseSpinner.vue';
	import BaseDialog from '../../components/ui/BaseDialog.vue';

	const store = useStore();

	const activeFilters = ref({
		frontend: true,
		backend: true,
		career: true,
	});

	const setFilters = (updatedFilters) => {
		activeFilters.value = updatedFilters;
	};

	const error = ref(null);
	const isLoading = ref(false);

	const loadCoaches = async (refresh = false) => {
		isLoading.value = true;
		try {
			await store.dispatch('coaches/loadCoaches', {
				forceRefresh: refresh,
			});
		} catch (err) {
			error.value = err.message || 'Something went wrong!';
		}

		isLoading.value = false;
	};

	const handleError = () => {
		error.value = null;
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

	const isLoggedIn = computed(() => {
		return store.getters.isAuthenticated;
	});

	loadCoaches();
</script>

<template>
	<div>
		<BaseDialog :show="!!error" title="An error occured!" @close="handleError">
			<p>{{ error }}</p>
		</BaseDialog>

		<section>
			<CoachFilter @changeFilter="setFilters"></CoachFilter>
		</section>

		<section>
			<BaseCard>
				<div class="controls">
					<BaseButton mode="outline" @click="loadCoaches(true)">
						Refresh
					</BaseButton>
					<BaseButton link to="/auth" v-if="!isLoggedIn">Login</BaseButton>
					<BaseButton
						v-if="isLoggedIn && !isCoach && !isLoading"
						link
						to="/register"
					>
						Register as Coach
					</BaseButton>
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
	</div>
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
