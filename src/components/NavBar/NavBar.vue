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
  background-color: $backgroundColour;
  height: $navHeight;
  border-bottom: $primaryLineWidth solid black;
  display: flex;

  .nav-link {
    text-decoration: none;
    color: $primaryTextColour;
    margin-right: 80px;
    font-size: $navLinkSize;
    transition: 0.5s;
    &:hover {
      background-color: $hoverColour;
    }
  }

  .logo {
    width: $leftColWidth;
    padding-right: 100px;
    padding-left: 30px;
    border-right: $primaryLineWidth solid black;
    display: flex;
    align-items: center;
  }

  .links {
    margin-left: 30px;
    margin-right: auto;
    display: flex;
    align-items: center;
  }
}
</style>
