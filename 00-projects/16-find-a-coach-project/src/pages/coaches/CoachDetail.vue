<script setup>
	import { RouterView } from 'vue-router';
	import { ref, computed } from 'vue';
	import { useStore } from 'vuex';
	import { useRoute } from 'vue-router';
	import BaseCard from '../../components/ui/BaseCard.vue';
	import BaseButton from '../../components/ui/BaseButton.vue';
	import BaseBadge from '../../components/ui/BaseBadge.vue';

	const props = defineProps({ id: String });
	const store = useStore();
	const route = useRoute();

	const selectedCoach = ref(null);
	selectedCoach.value = store.getters['coaches/coaches'].find(
		(coach) => coach.id === props.id
	);

	const fullName = computed(() => {
		return selectedCoach.value.firstName + ' ' + selectedCoach.value.lastName;
	});
	const contactLink = computed(() => {
		return route.path + '/contact';
	});
	const areas = computed(() => {
		return selectedCoach.value.areas;
	});
	const rate = computed(() => {
		return selectedCoach.value.hourlyRate;
	});
	const description = computed(() => {
		return selectedCoach.value.description;
	});
</script>

<template>
	<div>
		<section>
			<BaseCard>
				<h2>{{ fullName }}</h2>
				<h3>${{ rate }}/hour</h3>
			</BaseCard>
		</section>
		<section>
			<BaseCard>
				<header>
					<h2>Interested? Reach out now!</h2>
					<BaseButton link :to="contactLink">Contact</BaseButton>
				</header>
				<RouterView></RouterView>
			</BaseCard>
		</section>
		<section>
			<BaseCard>
				<BaseBadge
					v-for="area in areas"
					:key="area"
					:type="area"
					:title="area"
				/>
				<p>{{ description }}</p>
			</BaseCard>
		</section>
	</div>
</template>
