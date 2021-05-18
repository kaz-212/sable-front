<template>
  <div v-if="thisShow && thisShow.name" class="radio-player">
    <div class="ticker-container">
      <TickerTape :showName="thisShow.name" />
    </div>
  </div>
</template>

<script>
import TickerTape from '@/components/Animations/TickerTape.vue';

export default {
  name: 'RadioPlayer',
  components: {
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
  // background-color: olive;
  margin: 10px 20px;
  display: flex;
  justify-content: flex-end;
  width: 120px;

  .blinker-container,
  .ticker-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;
    margin-right: 175px;
    margin-left: auto;
  }
}
@media (max-width: 1100px) {
  .radio-player {
    .ticker-container {
      margin-right: 200px;
    }
  }
}
</style>
