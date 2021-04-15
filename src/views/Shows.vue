<template>
  <div class="home">
    <div class="show" v-bind:key='show.key' v-for='show in allShows.data.data' >
      <h2>{{ show.key }}</h2>
      <p>
        {{show.name}}
      </p>
      <img :src='show.pictures.large' :alt='show.name'>
      <div class="tags" v-bind:key='tag.key' v-for='tag in show.tags'>
        {{tag.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Shows',
  methods: {
    ...mapActions(['fetchShows']),
  },
  computed: mapGetters(['allShows']),
  created() {
    this.fetchShows();
  },
};
</script>
