<template>
  <div class="showBlog" v-if="blog">
    <div class="banner">
      <img :src="blog.banner" alt="" />
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <p class="header">blog</p>
      </div>
      <div class="info">
        <h2 class="blog-name">{{ blog.name }}</h2>
        <div class="author">
          <p>Words by {{ blog.author }}</p>
          <p class="date">{{ blog.date }}</p>
        </div>
        <div class="text" v-if="blog.chunk_one">
          <vue-markdown>
            {{ blog.chunk_one }}
          </vue-markdown>
        </div>
        <div class="text" v-if="blog.chunk_two">
          <vue-markdown>
            {{ blog.chunk_two }}
          </vue-markdown>
        </div>
        <br />
      </div>
    </section>
  </div>
</template>

<script>
import VerticalShow from '@/components/Banner/VerticalShow.vue';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'showBlog',
  components: {
    VerticalShow,
    VueMarkdown
  },
  data() {
    return {
      blog: ''
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  async created() {
    this.blog = await this.$store.dispatch(
      'blogs/fetchIndividualBlog',
      this.id
    );
  }
};
</script>

<style lang="scss" scoped>
.showBlog {
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
      font-size: 22px;
      .text {
        width: 80%;
      }
      .blog-name {
        margin-top: 2vw;
        margin-bottom: 2vw;
        font-size: 31px;
        // width: 80%;
      }
      .author {
        display: flex;
        width: 80%;
        border-bottom: $primaryLineWidth solid black;
        justify-content: space-between;
        margin-bottom: 40px;
      }
      .text {
        margin-top: 2vw;
        display: flex;
        justify-content: center;
     }
    }
  }
}
</style>
