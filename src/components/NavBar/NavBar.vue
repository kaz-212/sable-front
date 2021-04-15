<template>
    <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/shows">Shows</router-link>
      <router-link to="/about">About</router-link>
      <!-- <h2>{{ currentShow }}</h2> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    currentShow() {
      return this.$store.getters.getCurrentShow;
    },
  },
};
</script>
