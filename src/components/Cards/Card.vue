<template>
  <div class="card">
    <div v-if="image">
      <img :src="image" :alt="name" />
    </div>
    <h2 class="name">{{ name }}</h2>
    <h3 class="date">{{ date }}</h3>
    <!-- <h3>{{ type }}</h3> -->
    <div class="tags">
      <h3 v-bind:key="tag.key" v-for="tag in tags" class="tag">{{ tag.name }}</h3>
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
    tags: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 300px;
  .image {
    width: 300px;
    height: 300px;
    img {
      object-fit: cover;
      width: 300px;
      height: 300px;
    }
  }
  .name {
    padding: 15px 0 20px 0;
    // background-color: red;
  }
  .date {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-top: 5px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
    .tag {
      padding-right: 10px;
      font-size: 16px;
      color: grey;
    }
  }
}
</style>
