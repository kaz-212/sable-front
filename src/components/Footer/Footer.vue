<template>
  <div id="footer">
    <div class="contact">
      <div class="logo nav-link">
        Contact
      </div>
      <div @click="expandNav = false" class="links" :class="{ hide: !expandNav }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
#footer {
  display: block;
  width: 100%;
  background-color: $backgroundColour;
  height: $footerHeight;
  border-bottom: $primaryLineWidth solid black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  z-index: 1000;

  .nav-link {
    text-decoration: none;
    color: $primaryTextColour;
    margin-right: 80px;
    font-size: $navLinkSize;
    transition: 0.5s;
    // &:hover {
    //   background-color: $hoverColour;
    // }
  }

  .logo {
    width: $leftColWidth;
    height: $navHeight;
    // padding-right: 100px;
    padding-left: 30px;
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
      min-width: 150px;
    }
  }

  span {
    transition: all 0.5s ease-in-out;
  }

  .links {
    margin-left: 30px;
    margin-right: auto;
    padding-top: 5px;
    display: flex;
    align-items: center;
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
    margin-top: 15px;
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

@media (max-width: 1350px) {
  #nav {
    .nav-link {
      margin-right: 35px;
    }
  }
}
</style>
