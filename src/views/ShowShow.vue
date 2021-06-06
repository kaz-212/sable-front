<template>
  <div class="showShow" v-if="show">
    <div class="image-section">
      <div class="banner" v-if="show.pictures">
        <div class="fade">
          <div class="banner">
          <img :src="show.pictures.extra_large" alt="" />
          <!-- <VerticalShow /> -->
          </div>
        </div>
        <div class="main-image">
          <img :src="show.pictures.extra_large" alt="" />
        </div>
      </div>
    </div>

    <div class="row">
      <!-- <div class="head">listen</div> -->
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
    <section class="main">
      <div class="header-pane">
        <div class="header">show</div>
      </div>
      <div class="info" v-if="show.name">
        <h2 class="show-name">
          {{ show.name.slice(0, -10) }}
        </h2>
        <div class="date">
          <p>{{ show.name.slice(-8) }}</p>
        </div>
        <div class="description">
          <p>{{ show.description }}</p>
        </div>
        <div class="widget"></div>
      </div>
    </section>
  </div>
</template>

<script>
// import VerticalShow from '@/components/Banner/VerticalShow.vue';

export default {
  name: 'showShow',
  // components: {
  //   VerticalShow
  // },
  data() {
    return {
      show: ''
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  async created() {
    const data = await this.$store.dispatch('pastShows/fetchIndividualShow', this.id);
    this.show = data;
  }
};
</script>

<style lang="scss" scoped>
.showShow {
  font-size: $navLinkSize;
  width: 100%;
  overflow: hidden;
    .fade {
    img {
      // opacity: 0.8;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
      filter: blur(7px);
      min-width: calc(100vw);
      height: 70vh;
      overflow: hidden;
      object-fit: cover;
    }
  }
  .banner {
    min-width: calc(100vw);
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .main-image {
    position: absolute;
    img {
      width: 70vh;
      height: 70vh;
    }
      margin-left: auto;
      margin-right: auto;
      display: block;
    // there's deffo a cleaner way of overlaying this image...
    transform: translate($leftColWidth);
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
      display: flex;
      flex-direction: column;
      align-items: center;
      .show-name {
        margin: 2vw auto 20px auto;
        // width: 80%;
        font-size: 31px;
      }
      .date {
        width: 80%;
        p {
          border-bottom: $primaryLineWidth solid black;
        }
      }
      .description {
        width: 80%;
        padding-top: 40px;
        margin: 30px 0 50px 0;
        p {
          font-size: 22px;
        }
      }
    }
  }
  .row {
    border-bottom: $primaryLineWidth solid $primaryTextColour;
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

@media (max-width: 600px) {
  .fade {
    visibility: hidden;
  }
  .banner {
    height: 100vw;
    width: 100vw;
    .main-image {
      img {
        position: absolute;
        height: 100vw;
        width: 100vw;
      }
      transform: none;
    }
  }
}
</style>
