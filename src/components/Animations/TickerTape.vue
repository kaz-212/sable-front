<template>
  <div class="ticker-wrap">
    <div class="ticker">
      <p class="marquee">
        <span>{{ showName }}</span>
      </p>
      <p class="marquee marquee2">
        <span>{{ showName }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showName']
};
</script>

<style lang="scss" scoped>
.ticker-wrap {
  background-color: $backgroundColour;
  box-sizing: content-box;
  margin: 5px;
  font-size: 16px;
  direction: rtl;

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
    width: 100%;
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
