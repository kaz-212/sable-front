<template>
  <div class="search">
    <form @submit.prevent="searchQuerySubmitted">
      <input
        class="search-input"
        type="text"
        v-model="searchTerm"
        placeholder="search here"
      />
      <button type="submit" name="button" class="btn-search">
        <i class="fas fa-search icon"></i>
        <!-- Search -->
      </button>
      <i @click="setNotSearching" class="fas fa-times icon"></i>
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
      } else {
        this.$store.dispatch('search/clearAll');
      }
    },
    setNotSearching() {
      this.$store.dispatch('search/notSearching');
    }
  }
};
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: none;
  border-bottom: $primaryLineWidth solid;
  background-color: $backgroundColour;
  height: 25px;
  font-size: 20px;
}

input:focus {
  outline: none;
}

.icon {
  cursor: pointer;
  padding-left: 17px;
}

.btn-search {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding-left: 17px;
}

@media (max-width: 500px) {
 .search {
   transform: translateX(-50px);
 }
.search-input {
    width: 30vw;
  }
  .icon {
    padding-left: 3vw;
  }
  .btn-search {
    padding-left: 3vw;
  }
}
</style>
