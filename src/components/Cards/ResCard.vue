<template>
  <div class="res-card">
    <Card :name="name" :image="image" :type="type" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'ResCard',
  components: {
    Card
  },
  props: {
    name: String,
    image: String,
    type: String
  }
};
</script>

<style lang="scss" scoped></style>
