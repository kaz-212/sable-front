<template>
  <div class="show-card">
    <Card
      v-if="!small"
      :name="name.slice(0, -24)"
      :image="image"
      :type="type"
      :date="name.slice(-23, -13)"
      :tags="tags"
      :id="id"
      :small="small"
    />
    <SmallCard
      v-else
      :name="name.slice(0, -24)"
      :image="image"
      :type="type"
      :date="name.slice(-23, -13)"
      :tags="tags"
      :id="id"
      :small="small"
    />
  </div>
</template>

<script>
import Card from './Card.vue';
import SmallCard from './SmallCard.vue';

export default {
  name: 'show-card',
  components: {
    Card,
    SmallCard
  },
  props: {
    name: String,
    image: String,
    type: String,
    tags: Array,
    id: String,
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
