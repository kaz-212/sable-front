<template>
  <div class="search">
      <form @submit.prevent="searchQuerySubmitted">
        <input class="search-input"
               type="text"
               v-model="searchTerm"
               placeholder="search here">
        <button type="submit" name="button" class="btn-search">Search</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'searchQuery',
  data: () => ({
    searchTerm: ''
  }),
  methods: {
    searchQuerySubmitted() {
      console.log(this.searchTerm);
      this.$store.dispatch('search/searchAll', this.searchTerm);
    }
  }
};
</script>

<style>

</style>
