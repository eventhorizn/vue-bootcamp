<script>
export default {
  props: ['topicTitle', 'text'],
};
</script>

<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>
