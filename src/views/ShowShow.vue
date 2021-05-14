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
  .banner {
    display: flex;
    width: 100%;
    border-bottom: $primaryLineWidth solid black;
    img {
      width: 95%;
      height: 500px;
      overflow: hidden;
      object-fit: cover;
    }
  }
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
    }
  }
  .fade {
    display: flex;
    width: 100%;
    border-bottom: $primaryLineWidth solid black;
    img {
      width: 95%;
      height: 500px;
      overflow: hidden;
      object-fit: cover;
      opacity: 40%;
      border-right: $primaryLineWidth solid black;
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
  .row {
    border-top: $primaryLineWidth solid $primaryTextColour;
    width: 100%;
    display: flex;

    .head {
      min-width: $leftColWidth;
      display: flex;
      padding-left: 2vw;
      padding-right: 2vw;
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
