<template>
  <div class="card">
    <div class="image">
      <img v-if="image" :src="image" :alt="name" />
    </div>
    <h2 class="name">{{ name }}</h2>
    <h3 v-if="date" class="date">{{ date }}</h3>
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
    date: {
      type: String,
      default: null
    },
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
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
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
