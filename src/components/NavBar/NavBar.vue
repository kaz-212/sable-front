<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'Shows' }">Shows</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Schedule' }">Schedule</router-link>
    <!-- <h2>{{ currentShow }}</h2> -->
    <SecondaryNav />
  </nav>
</template>

<script>
import SecondaryNav from './SecondaryNav.vue';

export default {
  name: 'NavBar',
  components: {
    SecondaryNav
  }
};
</script>
