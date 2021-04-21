<template>
  <div class="ticker-wrap" :key='showName'>
    <div class="ticker">
      <div class="ticker__item">{{ showName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showName']
};
</script>

<style lang='scss' scoped>
@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  display: inline-block;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: $backgroundColour;
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {
    display: inline-block;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
   -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: $tickerDuration;
    animation-duration: $tickerDuration;

    &__item {
      display: inline-block;
      color: $primaryTextColour;
      font-size: $navLinkSize;
    }
  }
}
</style>
