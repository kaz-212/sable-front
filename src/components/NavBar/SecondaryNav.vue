<template>
  <div>
    <p>
      LIVE
      <LiveNow />
      <TickerTape />
            <!-- {{ thisShow.data.date_time }} - {{ thisShow.data.end_time }} -->
      {{ thisShow.data.name }}
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
