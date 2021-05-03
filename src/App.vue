<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'Skeleton',
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
}
</style>
