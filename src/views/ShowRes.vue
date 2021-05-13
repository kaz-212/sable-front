<template>
  <div class="showRes" v-if="resident">
    <div class="banner">
      <img :src="resident.image_url" alt="" />
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <p class="header">Resident</p>
      </div>
      <div class="info">
        <h2 class="res-name">{{ resident.name }}</h2>
        <div v-if="resident">
          <p>{{ resident }}</p>
        </div>
      </div>
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
    .header-pane {
      width: $leftColWidth;
      border-right: $primaryLineWidth solid black;
      .header {
        margin-top: 110px;
        margin-left: 110px;
        font-size: 27px;
      }
    }
    .info {
      .res-name {
        margin: 110px auto 0 auto;
      }
    }
  }
}
</style>
