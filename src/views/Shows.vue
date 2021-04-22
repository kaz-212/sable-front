<template>
  <div class="home" v-if="allShows && allShows.data">
    <div class="show" v-bind:key="show.key" v-for="show in allShows.data">
      <h2>{{ show.key }}</h2>
      <p>
        {{ show.name }}
      </p>
      <img :src="show.pictures.large" :alt="show.name" />
      <div class="tags" v-bind:key="tag.key" v-for="tag in show.tags">
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shows',
  computed: {
    allShows() {
      return this.$store.getters['pastShows/allShows'];
    }
  },
  created() {
    this.$store.dispatch('pastShows/fetchShows');
  }
};
</script>
