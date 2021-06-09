<template>
  <div class="ticker-wrap">
    <div class="ticker" v-if="isNotIOS && isNotSafari">
      <p class="marquee">
        <span>{{ showName }}</span>
      </p>
      <p class="marquee marquee2">
        <span>{{ showName }}</span>
      </p>
    </div>
    <div class="static" v-else>
      <span>{{ showName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showName'],
  data() {
    return {
      isNotIOS: true,
      isNotSafari: true
    };
  },
  methods: {
    checkOSNotiOS() {
      const disabled = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ];

      const result = !disabled.includes(navigator.platform);
      this.isNotIOS = result;
    },
    checkBrowserNotSafari() {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('safari') !== -1) {
        this.isNotSafari = (ua.indexOf('chrome') > -1);
      }
    }
  },
  created() {
    this.checkBrowserNotSafari();
    this.checkOSNotiOS();
  }
};
</script>

<style lang="scss" scoped>
.ticker-wrap {
  background-color: $backgroundColour;
  box-sizing: content-box;
  margin: 5px;
  font-size: 16px;
  direction: rtl;
  .static {
    line-height: 1;
    overflow-x: hidden;
    white-space: nowrap;
    position: absolute;
  }
  .marquee {
    line-height: 1;
    overflow-x: hidden;
    white-space: nowrap;
    position: absolute;
  }

  .marquee span {
    display: inline-block;
    // if more gap needed up this value
    padding-left: 120%;
    animation: marquee 12s linear infinite;
  }

  .marquee2 span {
    animation-delay: 6s;
  }

  @keyframes marquee {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    100% {
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }
  }
  @-webkit-keyframes marquee {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    100% {
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }
  }
}

  .ticker > * {
    direction: ltr;
  }
</style>
