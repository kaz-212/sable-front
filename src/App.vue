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

    br {
      display: block; /* makes it have a width */
      content: ""; /* clears default height */
      margin-top: 2vw; /* change this to whatever height you want it */
    }

    @media (max-width: 600px) {
      br {
        margin-top: 4vw;
      }
    }
</style>
