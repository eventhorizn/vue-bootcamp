<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<section>FILTER</section>
	<section>
		<div class="controls">
			<button>Refresh</button>
			<RouterLink to="/register">Register as Coach</RouterLink>
		</div>
		<ul>
			LIST OF COACHES
		</ul>
	</section>
</template>
