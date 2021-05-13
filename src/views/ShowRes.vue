<template>
  <div class="showRes" v-if="resident">
    <div class="banner">
      <img :src="resident.image_url" alt="" />
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header">
        <h1>Resident</h1>
      </div>
      <div class="info"></div>
    </section>
  </div>
</template>

<script>
import VerticalShow from '@/components/Banner/VerticalShow.vue';

export default {
  name: 'showRes',
  components: {
    VerticalShow
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    resident() {
      return this.$store.getters['residents/getResidentById'](this.id);
    }
  },
  created() {
    if (!this.resident) {
      this.$store.dispatch('residents/fetchResidents');
    }
  }
};
</script>

<style lang="scss" scoped>
.showRes {
  .banner {
    display: flex;
    width: 100%;
    border-bottom: $primaryLineWidth solid black;
    img {
      border-right: $primaryLineWidth solid black;
      width: 95%;
      height: 400px;
      overflow: hidden;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  .main {
    display: flex;
    .header {
      width: $leftColWidth;
      border-right: $primaryLineWidth;
    }
  }
}
</style>
