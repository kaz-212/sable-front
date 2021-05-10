<template>
  <div id="app">
    <NavBar />
    <Banner />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import Banner from './components/Banner/Banner.vue';

export default {
  name: 'Skeleton',
  components: {
    NavBar,
    Banner
  }
};
</script>

<style lang="scss">
#app {
}
</style>
