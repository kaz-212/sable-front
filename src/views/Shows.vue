<template>
  <div class="home" v-if="allShows && allShows.data">
    <div class="show" v-bind:key="show.key" v-for="show in allShows.data">
      <ShowCard :name="show.name"
                :image="show.pictures.large"
                :type="'show'"
                :tags="show.tags" />
    </div>
  </div>
</template>

<script>
import ShowCard from '@/components/Cards/ShowCard.vue';

export default {
  name: 'Shows',
  components: {
    ShowCard
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
