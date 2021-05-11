<template>
  <div id="footer">
    <div class="row">
      <div class="contact head">
        contact
      </div>
      <div class="details">karan.basu@gmail.com</div>
    </div>
    <div class="row">
      <div class="socials head">
        socials
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
  width: 100%;
  font-size: $navLinkSize;
  // position: absolute;
  bottom: 0;
  .row {
    border-top: $primaryLineWidth solid $primaryTextColour;
    width: 100%;
    display: flex;
    .head {
      border-right: $primaryLineWidth solid $primaryTextColour;
      width: $leftColWidth;
      height: $footerHeight;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .details {
      display: flex;
      align-items: center;
      justify-content: center;
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
