<template>
  <div class="showRes" v-if="resident">
    <div class="banner">
      <img :src="resident.image_url" alt="" />
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <p class="header">resident</p>
      </div>
      <div class="info">
        <h2 class="res-name">{{ resident.name }}</h2>
        <div class="links">
          <div v-if="resident.soundcloud_url" class="link">
            <Icon
              :linkto="resident.soundcloud_url"
              :iconClass="'fa fa-soundcloud'"
            />
          </div>
          <div v-if="resident.mixcloud_url" class="link">
            <Icon
              :linkto="resident.mixcloud_url"
              :iconClass="'fa fa-mixcloud'"
            />
          </div>
          <div v-if="resident.facebook_url" class="link">
            <Icon
              :linkto="resident.facebook_url"
              :iconClass="'fab fa-facebook'"
            />
          </div>
          <div v-if="resident.twitter_url" class="link">
            <Icon :linkto="resident.twitter_url" :iconClass="'fa fa-twitter'" />
          </div>
          <div v-if="resident.instagram_url" class="link">
            <Icon
              :linkto="resident.instagram_url"
              :iconClass="'fa fa-instagram'"
            />
          </div>
          <div v-if="resident.bandcamp_url" class="link">
            <Icon
              :linkto="resident.bandcamp_url"
              :iconClass="'fa fa-bandcamp'"
            />
          </div>
          <div v-if="resident.youtube_url" class="link">
            <Icon
              :linkto="resident.youtube_url"
              :iconClass="'fab fa-youtube'"
            />
          </div>
        </div>
        <div class="description">
          <vue-markdown>
            {{ resident.description }}
          </vue-markdown>
        </div>
        <div class="cards">
          <ShowCard
            v-bind:key="show.key"
            v-for="show in shows"
            :name="show.name"
            :image="show.pictures.large"
            :type="'show'"
            :id="show.key"
            :tags="show.tags"
            :small="true"
            class="grid-item show"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VerticalShow from '@/components/Banner/VerticalShow.vue';
import Icon from '@/components/Icons/Icon.vue';
import axios from 'axios';
import ShowCard from '@/components/Cards/ShowCard.vue';

import VueMarkdown from 'vue-markdown';

export default {
  name: 'showRes',
  components: {
    VerticalShow,
    Icon,
    VueMarkdown,
    ShowCard
  },
  data() {
    return {
      resident: '',
      shows: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    showUrls() {
      const showsArray = [];
      if (this.resident.mix_url_one) showsArray.push(this.resident.mix_url_one);
      if (this.resident.mix_url_two) showsArray.push(this.resident.mix_url_two);
      if (this.resident.mix_url_three) showsArray.push(this.resident.mix_url_three);
      return showsArray;
    }
  },
  async created() {
    this.resident = await this.$store.dispatch(
      'residents/fetchIndividualResident',
      this.id
    );
    /*eslint-disable*/
    for (const url of this.showUrls) {
      const { data } = await axios.get(
        `https://api.mixcloud.com${url.slice(24)}`
      );
      this.shows.push(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.showRes {
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
      // object-position: 50% 50%;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .description {
        font-size: 25px;
        margin-bottom: 45px;
        width: 80%;
      }
      .res-name {
        margin-top: 50px;
        font-size: 31px;
      }
      .links {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        .link {
          margin: 8px;
        }
      }
      .description {
        margin-top: 70px;
        display: flex;
        justify-content: center;
      }
      .cards {
        width: 80%;
        display: flex;
        justify-content: space-between;

        .show {
          margin: 20px;
        }
      }
    }
  }
}
</style>
