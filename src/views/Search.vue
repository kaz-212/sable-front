<template>
  <div>
    <h1>Search Results</h1>
    <SearchResults />
  </div>
</template>

<script>
import SearchResults from '@/components/Search/SearchResults.vue';

export default {
  name: 'Search',
  components: {
    SearchResults
  }
  // mounted() {
  //   /*eslint-disable*/
  //   this.$store.dispatch('search/searching');
  // },
  // destroyed() {
  //   this.$store.dispatch('search/notSearching');
  // }
};
</script>

<style lang="scss" scoped></style>
