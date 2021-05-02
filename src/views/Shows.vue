<template>
  <div class="home" v-if="allShows && allShows.data">
    <div class="show" v-bind:key="show.key" v-for="show in allShows.data">
      <Card :name="show.name"
            :image="show.pictures.large"
            :type="'show'"
            :tags="show.tags"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Cards/Card.vue';

export default {
  name: 'Shows',
  components: {
    Card
  },
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
