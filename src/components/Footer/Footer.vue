<template>
  <div id="footer">
    <div class="row about" v-if="this.$route.name === 'Home'">
      <div class="contact head">about</div>
      <div class="findus">
        <div class="about-text">
          <p>
            we are a community radio station, broadcasting out of convention house, leeds.
            pop in and say hi if you're around
          </p>
          <br />
          <p>we started as this and now we are still this</p>
        </div>
      </div>
    </div>
    <div class="row" v-if="$route.name === 'Home'">
      <div class="contact head">find us</div>
      <div class="findus" id="findus">
        <FindUs />
        <div class="findus-text">
          <p>
            Our studio is located on St Mary's Street at the top of Mabgate
            green, a 5 minute walk from Leeds Bus Station.
          </p>
          <br />
          <p>The studio is on the first floor and accessible via lift.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="contact head">contact</div>
      <div class="details contact-text">
        get in touch at
        <a href="hello@sableradio.live">hello@sableradio.live</a>
        or find us at
        <a href="https://www.google.com/maps/place/Sable+Radio/@53.7993197,-1.5320086,17z/data=!4m5!3m4!1s0x48795dee12aa30b7:0x974e0ba8a48d296a!8m2!3d53.7992842!4d-1.5296654"
        target="_blank">convention house</a>
      </div>
    </div>
    <div class="row">
      <div class="head">socials</div>
      <div class="details socials">
        <a
          class="footer-link"
          href="https://www.facebook.com/sableradio/"
          target="_blank"
        >
          <i class="fab fa-facebook icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://www.instagram.com/sable.radio/"
          target="_blank"
        >
          <i class="fab fa-instagram icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FindUs from './FindUs.vue';

export default {
  name: 'Footer',
  components: {
    FindUs
  }
};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  font-size: $navLinkSize;
  bottom: 0;
  z-index: 1000;
  .row {
    border-top: $primaryLineWidth solid $primaryTextColour;
    width: 100%;
    display: flex;
    .contact-text {
      font-size: 18px;
    }
    .head {
      min-width: $leftColWidth;
      display: flex;
      padding-left: 2vw;
      padding-right: 2vw;
      align-items: center;
      height: auto;
      min-height: $footerHeight;
      border-right: $primaryLineWidth solid $primaryTextColour;
    }

    .findus-text {
      margin: 0;
      padding: 0;
      font-size: 18px;
      line-height: 25px;
      margin-right: 2vw;
      margin-left: 2vw;
    }

    .about-text {
      margin: 1vh;
      padding: 0;
      font-size: 18px;
      line-height: 25px;
      margin-right: 2vw;
      margin-left: 2vw;
    }

    .details {
      display: flex;
      align-items: center;
      margin-left: 3vw;
      margin-right: 3vw;
      white-space: pre-wrap;
      .footer-link {
        margin-right: 5vw;
        margin-left: 3px;
      }
      a {
        color: $primaryTextColour;
      }
    }
    .findus {
      display: flex;
      align-items: center;
      white-space: pre-wrap;
      a {
        color: $primaryTextColour;
      }
    }
  }
  .about {
  height: calc(100vh - (70vh + #{$navHeight}));
  }
}

@media (max-width: 700px) {
  #footer {
    .contact-text {
      font-size: 17px;
    }
  }
}
</style>
