<template>
  <div class="home">
    <h2>Welcome to the home page. navigate around :)</h2>
    <VideoStream />
  </div>
</template>

<script>
import VideoStream from '../components/VideoStream/VideoStream.vue';

export default {
  name: 'Home',
  components: {
    VideoStream,
  },
};
</script>
