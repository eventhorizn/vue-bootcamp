<script setup>
	import BaseCard from '../../components/ui/BaseCard.vue';
	import RequestItem from '../../components/requests/RequestItem.vue';
	import { useStore } from 'vuex';
	import { computed } from 'vue';

	const store = useStore();

	const receivedRequests = computed(() => {
		return store.getters['requests/requests'];
	});
	const hasRequests = computed(() => {
		return store.getters['requests/hasRequests'];
	});
</script>

<template>
	<section>
		<BaseCard>
			<header>
				<h2>Requests Received</h2>
			</header>
			<ul v-if="hasRequests">
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
