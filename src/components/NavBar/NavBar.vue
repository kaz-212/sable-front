<template>
  <nav id="nav">
    <div @click="expandNav = false" class="logo">
      <i class="fas fa-search icon"></i>
      <router-link class="nav-link" :to="{ name: 'Home' }">sable radio</router-link>
    </div>
    <div @click="expandNav = false" class="links" :class="{ hide: !expandNav }">
      <router-link @click="expandNav = false" class="nav-link" :to="{ name: 'Shows' }"
        >shows</router-link
      >
      <router-link @click="expandNav = false" class="nav-link" :to="{ name: 'About' }"
        >about</router-link
      >
      <router-link @click="expandNav = false" class="nav-link" :to="{ name: 'Schedule' }"
        >schedule</router-link
      >
      <router-link class="nav-link" :to="{ name: 'Residents' }">residents</router-link>
    </div>
    <div class="hamburger" :class="{ toggle: expandNav }" @click="expandNav = !expandNav">
      <span class="bar line1"></span>
      <span class="bar line2"></span>
      <span class="bar line3"></span>
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
  },
  data() {
    return {
      expandNav: false
    };
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
  flex-wrap: wrap;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;

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
    height: $navHeight;
    padding-right: 100px;
    padding-left: 30px;
    padding-top: 7px;
    border-right: $primaryLineWidth solid black;
    display: flex;
    align-items: center;
    .icon {
      cursor: pointer;
    }

    .nav-link {
      margin-left: 10vw;
      min-width: 150px;
    }
  }

  span {
    transition: all 0.5s ease-in-out;
  }

  .links {
    margin-left: 30px;
    margin-right: auto;
    display: flex;
    align-items: center;
  }

  .fa-search {
    padding-bottom: 6px;
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

    &.toggle {
      .line1 {
        background-color: $primaryTextColour;
        transform: rotate(-135deg) translate(-3px, -7px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        background-color: $primaryTextColour;
        transform: rotate(135deg) translate(-3px, 7px);
      }
    }
  }
}
@media (max-width: 1100px) {
  #nav {
    height: auto;
    justify-content: flex-end;
    flex-flow: column;
    .hamburger {
      display: flex;
    }

    .links {
      &.hide {
        display: none;
      }
      order: 3;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      .nav-link {
        margin: 30px 0;
      }
    }

    .logo {
      border: none;
      width: 100vw;
      margin-top: 10px;
      order: 1;
      .nav-link {
        font-size: 22px;
        margin-right: 0;
      }
    }

    .player {
      margin-left: auto;
      order: 2;
      .radio-player {
        justify-content: center;
      }
    }
  }
}
</style>
