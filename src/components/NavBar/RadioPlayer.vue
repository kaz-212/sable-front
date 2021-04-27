<template>
  <div v-if="thisShow && thisShow.name" class="radio-player">
    <div class="ticker-container">
      <TickerTape :showName="thisShow.name" />
      <i @click="playing = !playing" v-if="!playing" class="fas fa-play icon"></i>
      <i @click="playing = !playing" v-else class="fas fa-pause icon"></i>
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
  margin: 10px 30px;
  display: flex;
  justify-content: flex-end;
  width: 300px;
  .ticker-container {
    overflow: hidden;
    border-right: 1px solid black;
    .icon {
      margin-right: 40px;
      margin-left: 10px;
      cursor: pointer;
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
