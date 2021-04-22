<template>
  <div id="app">
    <NavBarRes />
    <router-view />
  </div>
</template>

<script>
import NavBarRes from './components/NavBar/NavBarRes.vue';

export default {
  name: 'Skeleton',
  components: {
    NavBarRes
  }
};
</script>
