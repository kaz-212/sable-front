<template>
  <div class="vertical-show" v-if="isLive">
    <div
      class="info"
      :class="{
        medium: thisShow.name.length >= 21 && 30 > thisShow.name.length,
        small: thisShow.name.length >= 30
      }"
    >
      {{ thisShow.name }}
      <span class="time"
        >{{ thisShow.date_time.slice(11, 16) }} - {{ thisShow.end_time.slice(11, 16) }}</span
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
  background-color: $backgroundColour;
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
    align-items: center;
    top: 305px;
    font-size: 25px;
    width: 450px;
    .time {
      margin-left: 14px;
    }
  }
  .medium {
    font-size: 19px;
  }
  .small {
    font-size: 15px;
  }
}
</style>
