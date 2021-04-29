<template>
  <nav id="nav">
    <div class="logo">
      <i class="fas fa-search icon"></i>
      <router-link class="nav-link" :to="{ name: 'Home' }">sable radio</router-link>
    </div>
    <div class="links">
      <router-link class="nav-link" :to="{ name: 'Shows' }">shows</router-link>
      <router-link class="nav-link" :to="{ name: 'About' }">about</router-link>
      <router-link class="nav-link" :to="{ name: 'Schedule' }">schedule</router-link>
    </div>
    <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div class="player">
      <RadioPlayer />
      <RadioEmbed class="embed" />
      <LiveNow class="blinker" />
    </div>
  </nav>
</template>

<script>
import RadioEmbed from '@/components/Radio/RadioEmbed.vue';
import LiveNow from '@/components/Animations/LiveNow.vue';

import RadioPlayer from './RadioPlayer.vue';

export default {
  name: 'NavBar',
  components: {
    RadioPlayer,
    RadioEmbed,
    LiveNow
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
    .icon {
      cursor: pointer;
    }

    .nav-link {
      margin-left: 10vw;
    }
  }

  .links {
    margin-left: 30px;
    margin-right: auto;
    display: flex;
    align-items: center;
  }

  .player {
    display: flex;
    align-items: center;
    .embed {
      padding-right: 15px;
    }
    .blinker {
      margin: 15px;
    }
  }

  .hamburger {
    position: absolute;
    display: none;
    top: 0.75rem;
    right: 1rem;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    .bar {
      height: 3px;
      width: 100%;
      background-color: $primaryTextColour;
      border-radius: 10px;
    }
  }

  @media (max-width: 450px) {
    .hamburger {
      display: flex;
    }

    .links {
      display: none;
    }
  }
}
</style>
