<template>
  <div class="loader-container">
    <h1>
      sable
      <br/>
      <div class="loader fa fa-play">
      </div>
      <div class="rotate">
      </div>
      <div class="radio-text">
      radio
      </div>
    </h1>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.loader-container {
  z-index: -10;
  height: 100%;
  width: 100%;
  background-color: $backgroundColour;
  // position: fixed;
  position: absolute;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  h1 {
  line-height: 70px;
  }

  .radio-text {
    margin-top: 8px;
  }
}

.loader {
  margin-left: 55px;
  transform-origin: 36% 50%;
  // transform: rotate(479deg);
  animation: rotate 2s infinite;
  font-size: 40px;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
</style>
