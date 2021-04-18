<template>
  <div style='top:0' class='live-now-circle'>
  </div>
</template>

<style lang='scss' scoped>
.live-now-circle {
  display: inline-block;
  position: relative;
  top: 1px;
  width: 8px;
  height: 8px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: $hoverColour;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: flickerAnimation;
  -webkit-animation: flickerAnimation 2s infinite;
  -moz-animation: flickerAnimation 2s infinite;
  -o-animation: flickerAnimation 2s infinite;
  animation: flickerAnimation 2s infinite;
}

@keyframes flickerAnimation {
  0% {opacity: 1;}
  50% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
