<template>
  <div class="card">
    <router-link :to="{ name: targetLocation, params: { id } }">
      <div class="image">
        <img v-if="image" :src="image" :alt="name" />
      </div>
    </router-link>
    <h2 class="name">{{ name }}</h2>
    <h3 v-if="date" class="date">{{ date }}</h3>
    <!-- <h3>{{ type }}</h3> -->
    <div class="tags">
      <h3 v-bind:key="tag.key" v-for="tag in tags" class="tag">
        {{ tag.name }}
      </h3>
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
    id: Number,
    date: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: null
    }
  },
  computed: {
    targetLocation() {
      return this.type === 'resident' ? 'ShowResident' : 'ShowShow';
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
    cursor: pointer;
    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .name {
    padding: 15px 0 20px 0;
  }
  .date {
    border-top: $primaryLineWidth solid black;
    border-bottom: $primaryLineWidth solid black;
    padding: 10px 0 10px 0;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 10px;
    .tag {
      margin-right: 10px;
      margin-bottom: 3px;
      font-size: 16px;
      color: grey;
      padding: 5px 5px 5px 0;
      // border: $primaryLineWidth solid black;
    }
  }
}
</style>
