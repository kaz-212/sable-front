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
  width: 300px;
  .ticker-container {
    overflow: hidden;
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
