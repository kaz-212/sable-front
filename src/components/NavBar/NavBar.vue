<template>
  <nav id="nav">
    <div class="logo">
      <router-link class="nav-link" :to="{ name: 'Home' }">sable radio</router-link>
    </div>
    <div class="links">
      <router-link class="nav-link" :to="{ name: 'Shows' }">shows</router-link>
      <router-link class="nav-link" :to="{ name: 'About' }">about</router-link>
      <router-link class="nav-link" :to="{ name: 'Schedule' }">schedule</router-link>
    </div>
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

<style lang="scss" scoped>
#nav {
  display: block;
  width: 100vw;
  height: $navHeight;
  border-bottom: 1px solid black;
  display: flex;

  .nav-link {
    text-decoration: none;
    color: $primaryTextColour;
    margin: 0 40px;
    padding: 0 5px;
    font-size: $navLinkSize;
    &:hover {
      background-color: $hoverColour;
    }
  }

  .logo {
    margin-left: 100px;
    padding-right: 100px;
    border-right: 1px solid black;
    display: flex;
    align-items: center;
  }

  .links {
    margin-left: auto;
    margin-right: 100px;
    display: flex;
    align-items: center;
  }
}
</style>
