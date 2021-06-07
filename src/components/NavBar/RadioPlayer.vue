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
  }
};
</script>

<style lang="scss" scoped>
.radio-player {
  margin: 10px 20px;
  display: flex;
  justify-content: flex-end;
  width: 120px;

  .blinker-container,
  .ticker-container {
    display: flex;
    padding-bottom: 10px;
  }
}
@media (max-width: 900px) {
  .radio-player {
    .ticker-container {
      margin-right: -60px;
      margin-left: 20px;
    }
  }
}
</style>
