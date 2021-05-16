<template>
  <div class="showShow" v-if="show">
    <div class="banner fade" v-if="show.pictures">
      <img :src="show.pictures.extra_large" alt="" />
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <div class="header">show</div>
      </div>
      <div class="info" v-if="show.name">
        <div class="show-name">
          {{ show.name.slice(0, -10) }}
        </div>
        <div class="date">
          {{ show.name.slice(-8) }}
        </div>
        <div class="description">
          {{ show.description }}
        </div>
        <div class="widget"></div>
      </div>
    </section>
    <div class="row">
      <div class="head">listen</div>
      <div class="details">
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
  font-size: $navLinkSize;
  width: 100%;
  overflow: hidden;
  .banner {
    min-width: calc(100vw - #{$sideBarWidth});
    display: flex;
    justify-content: space-between;
    border-bottom: $primaryLineWidth solid black;
    img {
      width: 100%;
      height: 70vh;
      overflow: hidden;
      object-fit: cover;
      // border-right: $primaryLineWidth solid black;
    }
  }
  .fade {
    img {
      opacity: 40%;
    }
  }
  .main {
    display: flex;
    .header-pane {
      min-width: $leftColWidth;
      border-right: $primaryLineWidth solid black;
      .header {
        padding-left: 2vw;
        padding-top: 2vw;
        font-size: 27px;
      }
    }
    .info {
      .description {
        font-size: 25px;
      }
      .show-name {
        margin: 110px auto 0 auto;
      }
    }
  }
  .row {
    border-top: $primaryLineWidth solid $primaryTextColour;
    width: 100%;
    display: flex;

    .head {
      min-width: $leftColWidth;
      display: flex;
      padding-left: 2vw;
      padding-top: 2vw;
      align-items: center;
      height: auto;
      min-height: $footerHeight;
      border-right: $primaryLineWidth solid $primaryTextColour;
    }

    .details {
      display: flex;
      align-items: center;
      width: 100%;
      white-space: pre-wrap;
    }
  }
}
</style>
