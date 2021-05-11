<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'Skeleton',
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
#app {
}
</style>
