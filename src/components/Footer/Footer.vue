<template>
  <div id="footer">
    <div class="row row-tall about" v-if="this.$route.name === 'Home'">
      <div class="contact chunky">about</div>
      <div class="findus">
        <!-- <div class="about-image">
          <img src="https://imgur.com/TNaYw1T.jpg" />
        </div> -->
        <div class="about-text">
          <p>Sable Studio is a creative platform made in Leeds.
            We run workshops, produce podcasts and curate programmes all
            from our studio on the edge of the city.
          </p>
        </div>
      </div>
    </div>
    <div class="row row-tall not-on-mobile" v-if="$route.name === 'Home'">
      <div class="contact chunky">find us</div>
      <div class="findus" id="findus">
        <FindUs />
        <div class="findus-text">
          <p>If you need to find us, we are located at 10A Byron Street Mills, Mabgate.
          </p>
        </div>
      </div>
    </div>
    <div class="row row-tall not-on-mobile">
      <div class="contact head">contact</div>
      <div class="details contact-text">
        Get in touch at
        <a href="mailto:hello@sablestudio.co">hello@sablestudio.co</a>, sign up to our
        <a href="https://live.us5.list-manage.com/subscribe?u=8a1c0f23dfbe02fba90e7cab1&id=8b73b6b6a7">newsletter</a>, or find us at
        <a href="https://goo.gl/maps/BK9dRNynsgkBXQiF8"
        target="_blank">byron street mills</a>
      </div>
    </div>
    <div class="row">
      <div class="head">
      <div class="not-on-mobile">socials</div>
      <div class="on-mobile">contact</div>
      </div>
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
        <a
          class="footer-link"
          href="https://soundcloud.com/sableradioleeds"
          target="_blank"
        >
          <i class="fab fa-soundcloud icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://www.mixcloud.com/sableradio/"
          target="_blank"
        >
          <i class="fab fa-mixcloud icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://www.youtube.com/@sableradio6870"
          target="_blank"
        >
          <i class="fab fa-youtube icon"></i>
        </a>
        <div class="on-mobile">
        <a
          class="footer-link"
          href="mailto:info@sableradio.live"
        >
          <i class="fas fa-envelope-square icon"></i>
        </a>
        <a
          class="footer-link"
          href="https://www.google.com/maps/place/Sable+Radio/@53.7993197,-1.5320086,17z/data=!4m5!3m4!1s0x48795dee12aa30b7:0x974e0ba8a48d296a!8m2!3d53.7992842!4d-1.5296654"
        >
          <i class="fas fa-map-marker-alt icon"></i>
        </a>
        </div>
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

    .chunky {
      min-width: $leftColWidth;
      display: flex;
      padding-left: 2vw;
      padding-right: 2vw;
      height: auto;
      min-height: $footerHeight;
      border-right: $primaryLineWidth solid $primaryTextColour;
      padding-top: 2vw;
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

@media (min-width: 1100px) {
  #footer {
    .on-mobile {
      display: none;
    }
  }
}

@media (max-width: 1100px) {
  #footer {
    .row-tall {
      height: 40vh;
    }
    .contact-text {
      font-size: 17px;
    }
    .not-on-mobile {
      display: none;
    }

    .chunky {
      align-items: center;
    }
  }
}
</style>
