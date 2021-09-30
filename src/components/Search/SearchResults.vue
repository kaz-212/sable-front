<template>
  <div>
    <div v-if="queryResidents.length > 0 ||
               queryShows.length > 0 ||
               queryBlogs.length > 0">
      <grid-template header="search results">
        <div class="grid">
          <ResCard
            v-bind:key="resident.id"
            v-for="resident in queryResidents"
            :name="resident.name"
            :image="resident.image_url"
            type="resident"
            :id="slugify(resident.name)"
            class="grid-item"
          />
          <ResCard
            v-bind:key="blog.id"
            v-for="blog in queryBlogs"
            :name="blog.name"
            :image="blog.banner"
            type="blog"
            :id="slugify(blog.name)"
            class="grid-item"
          />
          <ShowCard
            v-bind:key="show.key"
            v-for="show in queryShows"
            :name="show.name"
            :image="show.pictures.large"
            :id="show.key"
            type="show"
            class="grid-item"
          />
        </div>
      </grid-template>
    </div>
    <div v-else class="no-result">
      <h1>
        Sorry, no search results were found...
        <br />
        Find our full archive of shows <a href="https://www.mixcloud.com/sableradio/">here</a>
      </h1>
    </div>
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
    queryBlogs() {
      return this.$store.getters['search/getBlogs'];
    },
    queryShows() {
      return this.$store.getters['search/getShows'];
    }
  },
  methods: {
    slugify(name) {
      return name.replaceAll('-', '±').replaceAll(' ', '-').replaceAll('/', '|');
    }
  }
};
</script>

<style lang="scss" scoped>
.no-result {
  height: calc(100vh - (#{$navHeight} + #{$footerHeight * 2} + 3px));
  display: flex;
  justify-content: center;
  align-items: center;
  h1 a {
    color: $primaryTextColour;
  }
}
</style>
