<script setup>
	import { useRouter } from 'vue-router';
	import { useStore } from 'vuex';
	import CoachForm from '../../components/coaches/CoachForm.vue';
	import BaseCard from '../../components/ui/BaseCard.vue';

	const store = useStore();
	const router = useRouter();

	const saveData = (data) => {
		store.dispatch('coaches/registerCoach', data);
		router.replace('/coaches');
	};
</script>

<template>
	<section>
		<BaseCard>
			<h2>Register as a coach now!</h2>
			<CoachForm @save-data="saveData"></CoachForm>
		</BaseCard>
	</section>
</template>
