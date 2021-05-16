<template>
  <div class="schedule-page" v-if="schedule">
    <div class="header-pane">
      <div class="header">
        <p>schedule</p>
      </div>
    </div>
    <div class="schedule-items">
      <div class="schedule-item" :key="show.id" v-for="show in schedule">
        <!-- INSERT BEAUTIFUL REGEX FOR DATE TIMES !  -->
        <p>{{ show.date_time }} - {{ show.end_time }}</p>
        <h2>{{ show.name }}</h2>
      </div>
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

<style lang="scss" scoped>
.schedule-page {
  height: calc(100vh - (#{$navHeight} + #{$footerHeight * 2} + 3px));
  .header-pane {
    position: fixed;
    width: $leftColWidth;
    height: $pageHeight;
    border-right: $primaryLineWidth solid black;
    .header {
      margin-top: 2vw;
      margin-left: 2vw;
      // font-size: 27px;
      font-size: $navLinkSize;
    }
  }
  .schedule-item {
    padding-top: $navHeight;
    margin-left: $leftColWidth;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    white-space: pre-wrap;
  }
}
</style>
