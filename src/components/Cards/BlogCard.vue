<template>
  <div class="blog-card">
    <Card :name="name" :image="image" :type="type" :id="id" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'BlogCard',
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
