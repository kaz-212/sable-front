<template>
  <div class="home">
    <div
      class="stream-wrapper"
      v-if="
        thisShow &&
        thisShow.name &&
        thisShow.date_time &&
        thisShow.end_time &&
        thisShow.live
      "
    >
      <div class="stream-video">
        <div class="video-wrapper"><VideoStream /></div>
      </div>
      <vertical-show />
    </div>
    <div v-else>
      <Banner />
      <!-- <vertical-show /> -->
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue';
import VideoStream from '@/components/VideoStream/VideoStream.vue';
import VerticalShow from '@/components/Banner/VerticalShow.vue';

export default {
  name: 'Home',
  components: {
    VideoStream,
    VerticalShow,
    Banner
  },
  computed: {
    isLive() {
      return this.$store.getters['currentShow/isLive'];
    },
    thisShow() {
      return this.$store.getters['currentShow/thisShow'];
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  overflow: hidden;
  .stream-wrapper {
    min-width: calc(100vw - #{$sideBarWidth});
    height: calc(100vh - #{$navHeight});
    display: flex;
    justify-content: space-between;

    .stream-video {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translate(0, -10%);
      // top: -10%;
    }
  }
}

@media (max-width: 700px) {
  .home {
    height: calc(100vh - 174px);
  }
}
</style>
