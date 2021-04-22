<template>
  <div>
    <p v-if="thisShow && thisShow.name">
      LIVE NOW:
      <LiveNow />
      <TickerTape :showName='thisShow.name' />
            <!-- {{ thisShow.date_time }} - {{ thisShow.end_time }} -->
    </p>
  </div>
</template>

<script>
import LiveNow from '../Animations/LiveNow.vue';
import TickerTape from '../Animations/TickerTape.vue';

export default {
  name: 'SecondaryNav',
  components: {
    LiveNow,
    TickerTape
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

<style></style>
