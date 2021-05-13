<template>
  <div class="shows" v-if="allShows && allShows.data">
    <grid-template header="shows">
      <div class="grid">
        <ShowCard
          v-bind:key="show.key"
          v-for="show in allShows.data"
          :name="show.name"
          :image="show.pictures.large"
          :type="'show'"
          :tags="show.tags"
          class="grid-item"
        />
      </div>
    </grid-template>
  </div>
</template>

<script>
import ShowCard from '@/components/Cards/ShowCard.vue';
import GridTemplate from '@/components/Templates/GridTemplate.vue';

export default {
  name: 'Shows',
  components: {
    ShowCard,
    GridTemplate
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

<style lang="scss" scoped>
.shows {
}
</style>
