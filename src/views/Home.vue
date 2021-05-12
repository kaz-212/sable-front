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
            >{{ thisShow.date_time.slice(11, 16) }} - {{ thisShow.end_time.slice(11, 16) }}</span
          >
        </div>
      </div>
    </div>
    <div v-else>
      <Banner />
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
  .stream-wrapper {
    height: auto;
    display: flex;
    .stream-video {
      width: 95%;
      height: auto;
      // border-bottom: 1px solid black;
      border-right: 1px solid black;
    }
    .stream-info {
      width: 5%;
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
  // .stream-row {
  //   width: 100%;
  //   height: 60vh;
  //   display: flex;
  //   .stream-info {
  //     width: $leftColWidth;
  //     // background-color: olive;
  //     border-right: $primaryLineWidth solid black;
  //     border-bottom: $primaryLineWidth solid black;
  //     display: flex;
  //     justify-content: flex-start;
  //     .info {
  //       display: flex;
  //       flex-direction: column;
  //       margin: 30px 0 0 100px;
  //     }
  //   }
  //   .stream-video {
  //     width: $rightColWidth;
  //     height: 100%;
  //     // background-color: red;
  //     border-bottom: $primaryLineWidth solid black;
  //     .video-wrapper {
  //       width: 70%;
  //       margin: 30px 0 0 30px;
  //     }
  //   }
  // }
}
</style>
