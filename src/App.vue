<template>
  <div id="app">
    <div>
    <Loader />
    </div>
    <NavBar />
    <router-view />
    <Footer />
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
