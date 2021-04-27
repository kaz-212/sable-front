<template>
  <div v-if="thisShow && thisShow.name" class="radio-player">
    <div class="ticker-container">
      <TickerTape :showName="thisShow.name" />
      <i v-if="!playing" class="fas fa-play"></i>
      <i v-else class="fas fa-pause"></i>
    </div>
    <div class="blinker-container">
      <LiveNow />
    </div>
    <!-- {{ thisShow.date_time }} - {{ thisShow.end_time }} -->
  </div>
</template>

<script>
import LiveNow from '../Animations/LiveNow.vue';
import TickerTape from '../Animations/TickerTape.vue';

export default {
  name: 'RadioPlayer',
  components: {
    LiveNow,
    TickerTape
  },
  data() {
    return {
      playing: false
    };
  },
  computed: {
    thisShow() {
      return this.$store.getters['currentShow/thisShow'];
    }
  },
  created() {
    this.$store.dispatch('currentShow/fetchCurrentShow');
  }
};
</script>

<style lang="scss" scoped>
.radio-player {
  // margin-right: 90px;
  // background-color: olive;
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
  width: 300px;
  .ticker-container {
    overflow: hidden;
    border-right: 1px solid black;
    i {
      margin-right: 40px;
      margin-left: 10px;
    }
  }
  .blinker-container,
  .ticker-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
}
</style>
