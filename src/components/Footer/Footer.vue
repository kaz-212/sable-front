<template>
  <div id="footer">
    <div class="row">
      <div class="contact head">find us</div>
      <div class="details findus-text">
        <p>
          Our studio is located on St Mary's Street at the top of Mabgate green,
          a 5 minute walk from Leeds Bus Station.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="contact head">contact</div>
      <div class="details contact-text">
        get in touch at
        <a href="hello@sableradio.live">hello@sableradio.live</a>
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
    .socials {
      padding-left: 5px;
    }
    .findus-text {
      font-size: 18px;
    }
    .details {
      display: flex;
      align-items: center;
      margin-left: 30px;
      white-space: pre-wrap;
      .footer-link {
        padding-right: 2vw;
      }
      a {
        color: $primaryTextColour;
      }
    }
  }
}

@media (max-width: 700px) {
  #footer {
    .contact-text {
      font-size: 17px;
    }
    .details {
      .footer-link {
        margin-right: 5vw;
      }
    }
  }
}
</style>
