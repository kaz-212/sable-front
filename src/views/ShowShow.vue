<template>
  <div class="showShow" v-if="resident">
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
        <div class="description">
          {{ resident.description }}
        </div>
        <div
          class="cards"
          v-if="
            resident.mix_url_one ||
            resident.mix_url_two ||
            resident.mix_url_three
          "
        >
          {{ resident.mix_url_one.slice(24) }}
          {{ resident.mix_url_two.slice(24) }}
          {{ resident.mix_url_three.slice(24) }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VerticalShow from '@/components/Banner/VerticalShow.vue';

export default {
  name: 'showShow',
  components: {
    VerticalShow
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    resident() {
      return this.$store.getters['pastShows/getShowById'];
    }
  },
  created() {
    this.$store.dispatch('pastShows/fetchIndividualShow', this.id);
  }
};
</script>

<style lang="scss" scoped>
.showShow {
  .banner {
    display: flex;
    width: 100%;
    border-bottom: $primaryLineWidth solid black;
    img {
      border-right: $primaryLineWidth solid black;
      width: 95%;
      height: 500px;
      overflow: hidden;
      object-fit: cover;
      // object-position: 50% 50%;
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
