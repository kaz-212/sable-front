<template>
  <div>
    <p v-if="thisShow">
      LIVE NOW:
      <!-- {{ thisShow.data.date_time }} - {{ thisShow.data.end_time }} -->
      {{ thisShow.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SecondaryNav',
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
