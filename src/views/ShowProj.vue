<template>
  <div class="showProj" v-if="project">
    <div class="banner">
      <img :src="project.banner" alt="" />
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <p class="header">project</p>
      </div>
      <div class="info">
        <h2 class="project-name">{{ project.name }}</h2>
        <div class="author" v-if="project.author || project.date">
          <p v-if="project.author">{{ project.author }}</p>
          <p class="date">{{ project.date }}</p>
        </div>
        <div class="text" v-if="project.chunk_one">
          <vue-markdown>
            {{ project.chunk_one }}
          </vue-markdown>
        </div>
        <div class="image image-one" v-if="project.image_one">
          <img :src="project.image_one" alt="dynamic" />
        </div>
        <div class="text" v-if="project.chunk_two">
          <vue-markdown>
            {{ project.chunk_two }}
          </vue-markdown>
        </div>
        <div class="image image-two" v-if="project.image_two">
          <img :src="project.image_two" alt="dynamic" />
        </div>
        <div class="text" v-if="project.chunk_three">
          <vue-markdown>
            {{ project.chunk_three }}
          </vue-markdown>
        </div>
        <div class="image image-three" v-if="project.image_three">
          <img :src="project.image_three" alt="dynamic" />
        </div>
        <div class="text" v-if="project.chunk_four">
          <vue-markdown>
            {{ project.chunk_four }}
          </vue-markdown>
        </div>
        <div class="image image-four" v-if="project.image_four">
          <img :src="project.image_four" alt="dynamic" />
        </div>
        <div class="text" v-if="project.chunk_five">
          <vue-markdown>
            {{ project.chunk_five }}
          </vue-markdown>
        </div>
        <div class="image image-five" v-if="project.image_five">
          <img :src="project.image_five" alt="dynamic" />
        </div>
        <div class="text" v-if="project.chunk_six">
          <vue-markdown>
            {{ project.chunk_six }}
          </vue-markdown>
        </div>
        <div class="image image-six" v-if="project.image_six">
          <img :src="project.image_six" alt="dynamic" />
        </div>
        <br />
        <br />
      </div>
    </section>
  </div>
</template>

<script>
import VerticalShow from '@/components/Banner/VerticalShow.vue';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'showproject',
  components: {
    VerticalShow,
    VueMarkdown
  },
  data() {
    return {
      project: ''
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  async created() {
    this.project = await this.$store.dispatch(
      'projects/fetchIndividualproject',
      this.id
    );
  }
};
</script>

<style lang="scss" scoped>
.showproject {
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
  .image {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    img {
      width: 80%;
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
      font-size: 22px;
      .text {
        width: 80%;
        margin-top: 40px;
        line-height: 30px;
      }
      .project-name {
        margin-top: 4vw;
        margin-bottom: 40px;
        font-size: 31px;
      }
      .author {
        display: flex;
        width: 80%;
        border-bottom: $primaryLineWidth solid black;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .text {
        display: flex;
        justify-content: center;
     }
    }
  }
}

@media (max-width: 600px) {
.showproject {
  .main {
    .header-pane {
      display: none;
    }
    .project-name {
      width: 80%;
    }
  }
    .image {
      img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 600px) {
  .info {
    margin-bottom: 40px;
  }
}
</style>
