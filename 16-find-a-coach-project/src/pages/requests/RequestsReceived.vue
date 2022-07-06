<script setup>
	import BaseCard from '../../components/ui/BaseCard.vue';
	import RequestItem from '../../components/requests/RequestItem.vue';
	import { useStore } from 'vuex';
	import { computed, ref } from 'vue';
	import BaseDialog from '../../components/ui/BaseDialog.vue';
	import BaseSpinner from '../../components/ui/BaseSpinner.vue';

	const store = useStore();

	const receivedRequests = computed(() => {
		return store.getters['requests/requests'];
	});
	const hasRequests = computed(() => {
		return store.getters['requests/hasRequests'];
	});

	const isLoading = ref(false);
	const error = ref(null);

	const loadRequests = async () => {
		isLoading.value = true;

		try {
			await store.dispatch('requests/fetchRequests');
		} catch (err) {
			error.value = err.message || 'Something failed!';
		}

		isLoading.value = false;
	};

	const handleError = () => {
		error.value = null;
	};

	loadRequests();
</script>

<template>
	<BaseDialog :show="!!error" title="An error occured!" @close="handleError">
		<p>{{ error }}</p>
	</BaseDialog>
	<section>
		<BaseCard>
			<header>
				<h2>Requests Received</h2>
			</header>
			<BaseSpinner v-if="isLoading"></BaseSpinner>
			<ul v-else-if="hasRequests && !isLoading">
				<RequestItem
					v-for="req in receivedRequests"
					:key="req.id"
					:email="req.userEmail"
					:message="req.message"
				></RequestItem>
			</ul>
			<h3 v-else>You haven't received any requests yet!</h3>
		</BaseCard>
	</section>
</template>

<style scoped>
	header {
		text-align: center;
	}

	ul {
		list-style: none;
		margin: 2rem auto;
		padding: 0;
		max-width: 30rem;
	}

	h3 {
		text-align: center;
	}
</style>
