<template>
  <div class="home">
    <h2>Welcome to the home page. navigate around :)</h2>
    <table>
      <tr>
        <td>HELLO</td>
        <td><VideoStream /></td>
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
