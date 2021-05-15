<template>
  <div class="vertical-show" v-if="isLive">
    <div class="info">
      {{ thisShow.name }}
      <span class="time"
        >{{ thisShow.date_time.slice(11, 16) }} -
        {{ thisShow.end_time.slice(11, 16) }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'verticalShow',
  computed: {
    thisShow() {
      return this.$store.getters['currentShow/thisShow'];
    },
    isLive() {
      return this.$store.getters['currentShow/isLive'];
    }
  }
};
</script>

<style lang="scss" scoped>
.vertical-show {
  border-left: $primaryLineWidth solid black;
  min-width: $sideBarWidth;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  .info {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
    position: absolute;
    top: 200px;
    font-size: 27px;
    width: 350px;
    .time {
      margin-left: 14px;
    }
  }
}
</style>
