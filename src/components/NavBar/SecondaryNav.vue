<template>
  <div>
    {{ getCurrentShow }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Shows',
  methods: {
    ...mapActions(['setCurrentShow']),
  },
  computed: mapGetters(['getCurrentShow']),
  created() {
    this.setCurrentShow();
  },
};
</script>

<style>

</style>
