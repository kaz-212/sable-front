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
      if (this.searchTerm !== '') {
        this.$store.dispatch('search/searchAll', this.searchTerm);
        this.searchTerm = '';
      } else {
        this.$store.dispatch('search/clearAll');
      }
    }
  }
};
</script>

<style lang="scss" scoped>

  input[type=text] {
    border: none;
    border-bottom: $primaryLineWidth solid;
    height: 25px;
    font-size: 20px;
  }

  input:focus { outline: none; }

</style>
