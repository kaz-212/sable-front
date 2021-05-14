<template>
  <div class="showShow" v-if="show">
    <div class="banner">
      <!-- <img :src="show.image_url" alt="" /> -->
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <p class="header">show</p>
      </div>
      <div class="info">
        {{ show }}
        <div class="description">
          {{ show.description }}
        </div>
        <div class="widget">
          <iframe
            width="100%"
            height="60"
            :src="
              'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=' +
              encodeURI(show.key)
            "
            frameborder="0"
          ></iframe>
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
    show() {
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
      .description {
        font-size: 25px;
      }
      .res-name {
        margin: 110px auto 0 auto;
      }
    }
  }
}
</style>
