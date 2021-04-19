<template>
  <div class="home">
    <table rules="cols">
      <tr class="video">
        <td class="cell left"><div>HELLO</div></td>
        <td class="cell right">
          <div>
            <div class="video-wrapper"><VideoStream /></div>
          </div>
        </td>
      </tr>
    </table>

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
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  .video {
    width: 100%;
    // background-color: olive;
    .cell {
      height: 60vh;
      &.right {
        width: 73%;
        .video-wrapper {
          width: 70%;
        }
      }
    }
  }
}
</style>
