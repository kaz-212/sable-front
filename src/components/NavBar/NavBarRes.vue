<template>
  <nav id="nav" :class="{ scrolling: scrolling }">
    <div class="logo">
      <router-link class="nav-link" :to="{ name: 'Home' }">sable radio</router-link>
    </div>
    <div class="nav-links" :class="{ 'nav-active': !hideLinks }">
      <router-link class="nav-link" :class="{ 'first-link': !hideLinks }" :to="{ name: 'Shows' }">
        shows
      </router-link>
      <!-- <router-link class="nav-link"
            :class="{ 'second-link': !hideLinks }" :to="{ name: 'About' }">
        about
      </router-link> -->
      <router-link class="nav-link" :class="{ 'third-link': !hideLinks }" :to="{ name: 'Schedule'}">
        schedule
      </router-link>
      <router-link class="nav-link" :class="{ 'fourth-link': !hideLinks }"
                                    :to="{ name: 'Residents'}">
        residents
      </router-link>
    </div>

    <div class="burger" :class="{ toggle: !hideLinks }" @click="navSlide">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <SecondaryNav />
  </nav>
</template>

<script>
import SecondaryNav from './SecondaryNav.vue';

export default {
  name: 'Navbar',
  components: {
    SecondaryNav
  },
  data() {
    return {
      scrolling: false,
      hideLinks: true
    };
  },
  methods: {
    navSlide() {
      this.hideLinks = !this.hideLinks;
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        this.scrolling = true;
      } else {
        this.scrolling = false;
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  overflow-x: hidden; // stops us being able to scroll to see translate-x(100%) nav bar
  #nav {
    display: block;
    width: 100vw;
    background-color: $backgroundColour;
    border-bottom: $primaryLineWidth solid black;
    display: flex;
    height: $navHeight;
    position: fixed;
    transition: background 0.5s ease-out, height 0.5s ease-out;
    align-items: center;

    z-index: 10000;

    .logo {
      width: $leftColWidth;
      height: $navHeight;
      padding-right: 30px;
      padding-left: 30px;
      border-right: $primaryLineWidth solid black;
      display: flex;
      align-items: center;

      @include media('<=tablet') {
        margin-left: 10px;
      }
      @include media('<=tabletPortrait') {
        margin-left: 10px;
      }
    }
    .nav-links {
      display: flex;
      justify-content: space-around;
      width: 30%;
      margin-left: auto;
    //   margin-right: 30px;

      .first-link {
        animation: navLinkFade 0.5s ease forwards 0.3s;
      }
      .second-link {
        animation: navLinkFade 0.5s ease forwards 0.4s;
      }
      .third-link {
        animation: navLinkFade 0.5s ease forwards 0.5s;
      }
      .fourth-link {
        animation: navLinkFade 0.5s ease forwards 0.6s;
      }
      .fifth-link {
        animation: navLinkFade 0.5s ease forwards 0.7s;
      }
      @include media('<=desktop') {
        width: 40%;
      }
      @include media('<=tablet') {
        width: 50%;
        margin-left: auto;
        margin-right: 20px;
      }
      @include media('<=tabletPortrait') {
        position: absolute;
        height: 100vh;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-right: 0;
        transform: translateX(100%); //moves it off the screen
        transition: transform 0.4s ease-out;
      }
      a {
        @include media('<=tabletPortrait') {
          opacity: 0;
        }
      }
    }
    .nav-active {
      transform: translateX(0%);
    }
    .burger {
      display: none;
      @include media('<=tabletPortrait') {
        display: block;
        cursor: pointer;
        margin-left: 20px;
        margin-right: auto;
      }
      div {
        width: 20px;
        height: 2px;
        background-color: $primaryTextColour;
        margin: 5px;
        margin-right: 20px;
        transition: all 0.5s ease-in-out;
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
}
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
  .nav-link {
    text-decoration: none;
    color: $primaryTextColour;
    // margin-right: 80px;
    font-size: $navLinkSize;
    transition: 0.5s;
    &:hover {
      background-color: $hoverColour;
    }
    @include media('<=tabletPortrait') {
      color: rgb(0, 0, 0);
    }
  }
// #8a0000;
</style>
