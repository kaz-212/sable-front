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
        <div v-if="resident.soundcloud_url">
          <Icon
            :linkto="resident.soundcloud_url"
            :iconClass="'fa fa-soundcloud'"
          />
        </div>
        <div v-if="resident.mixcloud_url">
          <Icon :linkto="resident.mixcloud_url" :iconClass="'fa fa-mixcloud'" />
        </div>
        <div v-if="resident.mixcloud_url">
          <Icon
            :linkto="resident.mixcloud_url"
            :iconClass="'fab fa-facebook'"
          />
        </div>
        <div v-if="resident.twitter_url">
          <Icon :linkto="resident.twitter_url" :iconClass="'fa fa-twitter'" />
        </div>
        <div v-if="resident.instagram_url">
          <Icon
            :linkto="resident.instagram_url"
            :iconClass="'fa fa-instagram'"
          />
        </div>
        <div v-if="resident.bandcamp_url">
          <Icon :linkto="resident.bandcamp_url" :iconClass="'fa fa-bandcamp'" />
        </div>
        <div v-if="resident.youtube_url">
          <Icon :linkto="resident.youtube_url" :iconClass="'fab fa-youtube'" />
        </div>
        <div class="description">
          {{ resident.description }}
        </div>
        <div class="cards">
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
import Icon from '@/components/Icons/Icon.vue';

export default {
  name: 'showRes',
  components: {
    VerticalShow,
    Icon
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    resident() {
      return this.$store.getters['residents/getResidentById'];
    }
  },
  created() {
    this.$store.dispatch('residents/fetchIndividualResident', this.id);
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
      width: 100%;
      // height: calc(90vh - $navHeight);
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
