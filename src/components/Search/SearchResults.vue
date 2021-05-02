<template>
  <div>
    <div v-if="queryResidents">
      {{queryResidents}}
    </div>
    <div :key="show.key" v-for="show in queryShows">
      {{show.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
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
