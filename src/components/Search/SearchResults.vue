<template>
  <div>
    <div :key="resident.id" v-for="resident in queryResidents">
      <Card :name="resident.name"
            :image="resident.image_url"
            :type="'resident'"/>
    </div>
    <div :key="show.key" v-for="show in queryShows">
      <Card :name="show.name"
            :image="show.pictures.large"
            :type="'show'"
            :tags="show.tags" />
    </div>
  </div>
</template>

<script>
import Card from '../Cards/Card.vue';

export default {
  name: 'SearchResults',
  components: {
    Card
  },
  computed: {
    queryResidents() {
      return this.$store.getters['search/getResidents'];
    },
    queryShows() {
      return this.$store.getters['search/getShows'];
    }
  }
};
</script>

<style>

</style>
