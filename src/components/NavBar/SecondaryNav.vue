<template>
  <div v-if='getCurrentShow.data[0].name == "SugarSpice&EverythingNice"'>
    {{ getCurrentShow.data[0].name }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// if start_time < time.now < end_time - return name
// maybe this should be done at the backend level
// will need to add an endpoint for api/schedule/:time.now

export default {
  name: 'ShowNow',
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
