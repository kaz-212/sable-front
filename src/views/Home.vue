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
      <div class="stream-info">
        <div class="info">
          {{ thisShow.name }}
          <span class="time"
            >{{ thisShow.date_time.slice(11, 16) }} -
            {{ thisShow.end_time.slice(11, 16) }}</span
          >
        </div>
      </div>
    </div>
    <div v-else class="">
      <Banner />
      <!-- <div class="stream-info" v-if="thisShow.name">
        <div class="info">
          {{ thisShow.name }}
          <span class="time"
            >{{ thisShow.date_time.slice(11, 16) }} -
            {{ thisShow.end_time.slice(11, 16) }}</span
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue';
import VideoStream from '../components/VideoStream/VideoStream.vue';

export default {
  name: 'Home',
  components: {
    VideoStream,
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
    .stream-info {
      border-left: $primaryLineWidth solid black;
      min-width: $sideBarWidth;
      // width: 5%;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      .info {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        position: absolute;
        top: 200px;
        font-size: 27px;
        width: 350px;
        .time {
          margin-left: 14px;
        }
      }
    }
  }
}
</style>
