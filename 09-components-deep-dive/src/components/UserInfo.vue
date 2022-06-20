<script>
	import BaseBadge from './BaseBadge.vue';
	import BaseCard from './BaseCard.vue';

	export default {
		components: {
			BaseBadge,
			BaseCard,
		},
		props: ['fullName', 'infoText', 'role'],
	};
</script>

<template>
	<section>
		<BaseCard>
			<template #header>
				<h3>{{ fullName }}</h3>
				<BaseBadge :type="role" :caption="role.toUpperCase()" />
			</template>
			<p>{{ infoText }}</p>
		</BaseCard>
	</section>
</template>
