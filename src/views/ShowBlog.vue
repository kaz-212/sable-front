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
        <div class="author" v-if="blog.author || blog.date">
          <p v-if="blog.author">{{ blog.author }}</p>
          <p class="date">{{ blog.date }}</p>
        </div>
        <div class="text" v-if="blog.chunk_one">
          <vue-markdown>
            {{ blog.chunk_one }}
          </vue-markdown>
        </div>
        <div class="image image-one" v-if="blog.image_one">
          <img :src="blog.image_one" alt="dynamic" />
        </div>
        <div class="text" v-if="blog.chunk_two">
          <vue-markdown>
            {{ blog.chunk_two }}
          </vue-markdown>
        </div>
        <div class="image image-two" v-if="blog.image_two">
          <img :src="blog.image_two" alt="dynamic" />
        </div>
        <div class="text" v-if="blog.chunk_three">
          <vue-markdown>
            {{ blog.chunk_three }}
          </vue-markdown>
        </div>
        <div class="image image-three" v-if="blog.image_three">
          <img :src="blog.image_three" alt="dynamic" />
        </div>
        <div class="text" v-if="blog.chunk_four">
          <vue-markdown>
            {{ blog.chunk_four }}
          </vue-markdown>
        </div>
        <div class="image image-four" v-if="blog.image_four">
          <img :src="blog.image_four" alt="dynamic" />
        </div>
        <div class="text" v-if="blog.chunk_five">
          <vue-markdown>
            {{ blog.chunk_five }}
          </vue-markdown>
        </div>
        <div class="image image-five" v-if="blog.image_five">
          <img :src="blog.image_five" alt="dynamic" />
        </div>
        <div class="text" v-if="blog.chunk_six">
          <vue-markdown>
            {{ blog.chunk_six }}
          </vue-markdown>
        </div>
        <div class="image image-six" v-if="blog.image_six">
          <img :src="blog.image_six" alt="dynamic" />
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
        color: $primaryTextColour;
          a:-webkit-any-link {
            color: black;
            cursor: pointer;
            text-decoration: underline;
          }
      }
      .blog-name {
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
.showBlog {
  .main {
    .header-pane {
      display: none;
    }
    .blog-name {
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
