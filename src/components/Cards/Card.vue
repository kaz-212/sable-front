<template>
  <div class="card">
    <div v-if="image">
      <img :src="image" :alt="name" />
    </div>
    <h2>{{name}}</h2>
    <h2>{{date}}</h2>
    <h3>{{type}}</h3>
    <div class="tags" v-bind:key="tag.key" v-for="tag in tags">
      <h3 class="tag">{{ tag.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    image: String,
    type: String,
    date: String,
    tags: Array
  }
};
</script>

<style lang="scss" scoped>

  img {
    object-fit: cover;
    width:300px;
    height:300px;
  }

</style>
