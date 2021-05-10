<template>
  <div class="home">
    <div class="wrapper">
      <div class="stream-row">
        <div class="stream-info">
          <div
            class="info"
            v-if="thisShow && thisShow.name && thisShow.date_time && thisShow.end_time"
          >
            <span>{{ thisShow.name }}</span>
            <span
              >{{ thisShow.date_time.slice(11, 16) }} - {{ thisShow.end_time.slice(11, 16) }}</span
            >
          </div>
          <div
            v-else>
            <Banner />
          </div>
        </div>
        <div class="stream-video">
          <div class="video-wrapper"><VideoStream /></div>
        </div>
      </div>
    </div>
    {{ isLive }}

    <h3>Query</h3>
    <SearchBar />
    <h3>Results:</h3>
    <SearchResults />

  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue';
import VideoStream from '../components/VideoStream/VideoStream.vue';
import SearchBar from '../components/Search/SearchBar.vue';
import SearchResults from '../components/Search/SearchResults.vue';

export default {
  name: 'Home',
  components: {
    VideoStream,
    SearchBar,
    SearchResults,
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
      justify-content: flex-start;
      .info {
        display: flex;
        flex-direction: column;
        margin: 30px 0 0 100px;
      }
    }
    .stream-video {
      width: $rightColWidth;
      height: 100%;
      // background-color: red;
      border-bottom: $primaryLineWidth solid black;
      .video-wrapper {
        width: 70%;
        margin: 30px 0 0 30px;
      }
    }
  }
}
</style>
