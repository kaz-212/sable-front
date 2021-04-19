<template>
  <div class="home" v-if="schedule">
    <div class="schedule" :key="show.id" v-for="show in schedule">
      <!-- INSERT BEAUTIFUL REGEX FOR DATE TIMES !  -->
      <p>{{ show.date_time }} - {{ show.end_time }}</p>
      <h2>{{ show.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  computed: {
    schedule() {
      return this.$store.getters['schedule/schedule'];
    }
  },
  created() {
    this.$store.dispatch('schedule/fetchSchedule');
  }
};
</script>
