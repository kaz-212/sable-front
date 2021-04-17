<template>
  <div class="home">
    <div class="schedule" :key='show.id' v-for='show in schedule.data'>
      <!-- INSERT BEAUTIFUL REGEX FOR DATE TIMES !  -->
      <p>{{ show.date_time }} - {{ show.end_time }}</p>
      <h2>{{ show.name }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Schedule',
  methods: {
    ...mapActions(['fetchSchedule']),
  },
  computed: mapGetters(['schedule']),
  created() {
    this.fetchSchedule();
  },
};
</script>
