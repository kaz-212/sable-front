<template>
  <div>
    <grid-template header="search results">
      <div class="grid">
        <ResCard
          v-bind:key="resident.id"
          v-for="resident in queryResidents"
          :name="resident.name"
          :image="resident.image_url"
          type="resident"
          :id="resident.id"
          class="grid-item"
        />
        <ShowCard
          v-bind:key="show.key"
          v-for="show in queryShows"
          :name="show.name"
          :image="show.pictures.large"
          :id="show.key"
          type="show"
          :tags="show.tags"
          class="grid-item"
        />
      </div>
    </grid-template>
  </div>
</template>

<script>
import GridTemplate from '@/components/Templates/GridTemplate.vue';
import ShowCard from '../Cards/ShowCard.vue';
import ResCard from '../Cards/ResCard.vue';

export default {
  name: 'SearchResults',
  components: {
    ShowCard,
    ResCard,
    GridTemplate
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
