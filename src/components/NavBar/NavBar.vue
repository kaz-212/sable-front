<template>
  <nav id="nav">
    <div @click="expandNav = false" class="logo">
      <i @click="setSearching" class="fas fa-search icon" :class="{ searchtoggle: isSearching }">
      </i>
      <SearchBar v-if="isSearching" class="searchbar" />
      <router-link v-else class="nav-link logo-link" :to="{ name: 'Home' }"><img class="logo-image" src="https://imgur.com/NqfyxTx.png" alt=""></router-link>
    </div>
    <div @click="expandNav = false" class="links" :class="{ hide: !expandNav }">
      <router-link @click="expandNav = false" class="nav-link" :to="{ name: 'Shows' }"
        >shows</router-link
      >
      <router-link @click="expandNav = false" class="nav-link" :to="{ name: 'Blog' }"
        >blog</router-link
      >
      <div @click="expandNav = false" class="nav-link chat">
        <a href="https://www.youtube.com/channel/UCm8EBbqs6nOquh0dW17y4Rw/videos" target="_blank"
          >watch</a
        >
      </div>
      <router-link class="nav-link" :to="{ name: 'Residents' }">residents</router-link>
    </div>
    <div class="hamburger" :class="{ toggledropdown: expandNav }" @click="expandNav = !expandNav">
      <span class="bar line1"></span>
      <span class="bar line2"></span>
      <span class="bar line3"></span>
    </div>
    <div class="player" v-show="thisShow.length !== 0">
      <RadioPlayer />
      <RadioEmbed class="embed" />
      <LiveNow class="blinker" />
    </div>
    <div class="upnext" v-if="thisShow.length === 0" :class="{ searchToggle: isSearching }">
      <div class="upnext-desktop">
        <ticker-tape showName="studio back open and broadcasting again soon" />
      </div>
    </div>
  </nav>
</template>

<script>
import RadioEmbed from '@/components/Radio/RadioEmbed.vue';
import LiveNow from '@/components/Animations/LiveNow.vue';
import TickerTape from '@/components/Animations/TickerTape.vue';
import SearchBar from '@/components/Search/SearchBar.vue';
import RadioPlayer from './RadioPlayer.vue';

export default {
  name: 'NavBar',
  components: {
    RadioPlayer,
    RadioEmbed,
    LiveNow,
    SearchBar,
    TickerTape
  },
  data() {
    return {
      expandNav: false
    };
  },
  computed: {
    isSearching() {
      return this.$store.getters['search/isSearching'];
    },
    thisShow() {
      return this.$store.getters['currentShow/thisShow'];
    }
  },
  methods: {
    setSearching() {
      this.$store.dispatch('search/searching');
    }
  },
  created() {
    this.$store.dispatch('currentShow/fetchCurrentShow');
  }
};
</script>

<style lang="scss" scoped>
#nav {
  display: block;
  width: 100%;
  background-color: $backgroundColour;
  height: $navHeight;
  border-bottom: $primaryLineWidth solid black;
  display: flex;
  flex-wrap: wrap;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10000;

  .nav-link {
    text-decoration: none;
    color: $primaryTextColour;
    margin-right: 30px;
    font-size: $navLinkSize;
    transition: 0.5s;
    // &:hover {
    //   background-color: $hoverColour;
    // }
    a {
      text-decoration: none;
      color: $primaryTextColour;
    }
  }

  .logo-image {
    height: 20px;
  }

  .logo {
    width: $leftColWidth;
    height: $navHeight;
    // padding-right: 100px;
    padding-left: 60px;
    padding-top: 7px;
    border-right: $primaryLineWidth solid black;
    display: flex;
    align-items: center;
    .icon {
      cursor: pointer;
      &.searchtoggle {
        display: none;
      }
    }

    .nav-link {
      margin-left: 10vw;
    }
  }

  span {
    transition: all 0.5s ease-in-out;
  }

  .links {
    margin-left: 40px;
    margin-right: auto;
    padding-top: 5px;
    display: flex;
    align-items: center;
  }

  .chat {
    text-decoration: none;
  }

  .fa-search {
    padding-bottom: 4px;
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
    margin-top: 18px;
    .bar {
      height: 3px;
      width: 100%;
      background-color: $primaryTextColour;
      border-radius: 10px;
    }

    &.toggledropdown {
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
  .searchbar {
    padding-left: 30px;
  }

  .upnext {
    // justify-content: flex-end;
    display: flex;
    align-items: center;
    padding-right: 18px;
    margin-bottom: 17px;
  }
}
@media (max-width: 1200px) {
  #nav {
    height: auto;
    justify-content: flex-end;
    flex-flow: column;
    padding-bottom: 10px;
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
      margin-top: 7px;
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
      &.searchToggle {
        display: none;
      }
    }
    .upnext {
      margin-left: auto;
      justify-content: center;
      margin-bottom: 0;
      transform: translateY(30px);
      padding-right: 60px;
    }
  }
}

@media (max-width: 1350px) {
  #nav {
    .nav-link {
      margin-right: 35px;
    }
  }
}

@media (max-width: 700px) {
  #nav {
    .upnext {
      &.searchToggle {
        display: none;
      }
    }
  }
}

@media (max-width: 700px) {
  #nav {
    .upnext {
      display: none;
    }
    .hamburger {
      margin-top: 16px;
    }
  }
}
</style>
