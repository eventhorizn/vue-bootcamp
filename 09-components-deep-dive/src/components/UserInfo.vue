<script setup>
	import BaseBadge from './BaseBadge.vue';
	import BaseCard from './BaseCard.vue';
</script>

<template>
	<section>
		<BaseCard>
			<template v-slot:header>
				<h3>{{ fullName }}</h3>
				<BaseBadge :type="role" :caption="role.toUpperCase()" />
			</template>
			<p>{{ infoText }}</p>
		</BaseCard>
	</section>
</template>

<script>
	export default {
		props: ['fullName', 'infoText', 'role'],
	};
</script>
