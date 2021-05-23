<template>
  <div id="app">
    <NavBar />
    <div v-if="loading">
    <Loader />
    </div>
    <div v-else>
    <router-view />
    <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import Footer from './components/Footer/Footer.vue';
import Loader from './components/Animations/Loader.vue';

export default {
  name: 'Skeleton',
  components: {
    NavBar,
    Footer,
    Loader
  },
  computed: {
    loading() {
      return this.$store.getters['loader/getLoaderState'];
    }
  },
  methods: {
    setLoadingFalse() {
      this.$store.dispatch('loader/loaderAction', false);
    }
  },
  updated() {
    return this.$store.getters['loader/getLoaderState'];
  }
};
</script>

<style lang="scss">
#app {
  background-color: $backgroundColour;
  margin: 0;
  padding: 0;
  height: 100%;
  // min-height: 100vh;
}

@font-face {
  font-family: 'TWKLausanne';
  src: url('../public/TWKLausanne-300.otf');
}

* {
  font-family: TWKLausanne;
}
</style>
