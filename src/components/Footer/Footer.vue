<template>
  <div id="footer">
    <div class="row">
      <div class="contact head">contact</div>
      <div class="details">
        get in touch at
        <a href="hello@sableradio.live">hello@sableradio.live</a>
      </div>
    </div>
    <div class="row">
      <div class="socials head">socials</div>
      <div class="details">fb sc tw</div>
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
  width: 100%;
  font-size: $navLinkSize;
  // position: absolute;
  bottom: 0;
  .row {
    border-top: $primaryLineWidth solid $primaryTextColour;
    width: 100%;
    display: flex;
    .head {
      width: $leftColWidth;
      height: $footerHeight;
      display: flex;
      padding-left: 2vw;
      align-items: center;
      border-right: $primaryLineWidth solid $primaryTextColour;
    }
    .details {
      display: flex;
      align-items: center;
      margin-left: 30px;
      white-space: pre-wrap;
      a {
        color: $primaryTextColour;
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

@media (max-width: 1350px) {
  #nav {
    .nav-link {
      margin-right: 35px;
    }
  }
}
</style>
