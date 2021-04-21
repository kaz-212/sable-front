<template>
  <div class="home">
    <div class="wrapper">
      <div class="stream-row">
        <div class="stream-info">
          <div class="live">
            live (red square)
          </div>
          <div class="info">
            <span>{{ thisShow.name }}</span>
            <span
              >{{ thisShow.date_time.slice(11, 16) }} - {{ thisShow.end_time.slice(11, 16) }}</span
            >
          </div>
        </div>
        <div class="stream-video">
          <div class="video-wrapper"><VideoStream /></div>
        </div>
      </div>
    </div>
    {{ isLive }}
  </div>
</template>

<script>
import VideoStream from '../components/VideoStream/VideoStream.vue';

export default {
  name: 'Home',
  components: {
    VideoStream
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
.wrapper {
  width: 100vw;
  .stream-row {
    width: 100%;
    height: 60vh;
    display: flex;
    .stream-info {
      width: $leftColWidth;
      // background-color: olive;
      border-right: $primaryLineWidth solid black;
      border-bottom: $primaryLineWidth solid black;
      display: flex;
      justify-content: space-around;
      .info {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
      }
      .live {
        margin-top: 50px;
      }
    }
    .stream-video {
      width: $rightColWidth;
      height: 100%;
      // background-color: red;
      border-bottom: $primaryLineWidth solid black;
      .video-wrapper {
        width: 70%;
      }
    }
  }
}
</style>
