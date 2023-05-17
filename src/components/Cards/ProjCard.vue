<template>
  <div class="project-card">
    <Card :name="name" :image="image" :type="type" :id="id" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'ProjectCard',
  components: {
    Card
  },
  props: {
    name: String,
    image: String,
    type: String,
    id: String
  }
};
</script>

<style lang="scss" scoped></style>
