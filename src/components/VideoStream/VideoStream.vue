<template>
  <div id="video">
    <iframe
      id="frame"
      src="https://player.vimeo.com/video/538380125"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoStream'
};
</script>

<style lang="scss" scoped>
#video {
  padding: 56.25% 0 0 0;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  #frame {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
