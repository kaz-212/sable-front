<template>
  <div>
    <div :key="resident.id" v-for="resident in queryResidents">
      {{resident.name}}
      <div v-if="resident.image_url">
        <img :src="resident.image_url" :alt="resident.name" />
      </div>
    </div>
    <div :key="show.key" v-for="show in queryShows">
      {{show.name}}
      <img :src="show.pictures.large" :alt="show.name" />
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
