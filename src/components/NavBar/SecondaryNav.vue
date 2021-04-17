<template>
  <div>
    <p>Secondary nav</p>
    <!-- {{ thisShow.data.date_time }} - {{ thisShow.data.end_time }} -->
    {{ thisShow.data.name }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SecondaryNav',
  methods: {
    ...mapActions(['fetchCurrentShow'])
  },
  computed: mapGetters(['thisShow']),
  created() {
    this.fetchCurrentShow();
  }
};
</script>

<style>

</style>
