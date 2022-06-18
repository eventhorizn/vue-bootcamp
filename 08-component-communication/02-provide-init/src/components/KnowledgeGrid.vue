<script setup>
import KnowledgeElementVue from './KnowledgeElement.vue';
</script>

<template>
  <ul>
    <KnowledgeElementVue
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    />
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
};
</script>
