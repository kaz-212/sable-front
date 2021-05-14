<template>
  <div class="show-card">
    <Card
      :name="name.slice(0, -10)"
      :image="image"
      :type="type"
      :date="name.slice(-8)"
      :tags="tags"
      :id="id"
    />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'show-card',
  components: {
    Card
  },
  props: {
    name: String,
    image: String,
    type: String,
    tags: Array,
    id: String
  }
};
</script>

<style></style>
