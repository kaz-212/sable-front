<template>
  <div>
    <p>
      LIVE NOW:
    <!-- {{ thisShow.data.date_time }} - {{ thisShow.data.end_time }} -->
    {{ thisShow.data.name }}
    </p>
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

<style></style>
