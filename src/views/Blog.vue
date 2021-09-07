<template>
  <!-- <div class="blog">
    <h1>Oops!
      <br/>Rome wasn’t built in a day and this bit of our website isn’t finished...
      <br/>come back soon and we’ll have some pretty editorials here.
    </h1>
  </div> -->
  <grid-template header="blogs">
    <div class="grid">
      <BlogCard
        v-bind:key="blog.id"
        v-for="blog in blogs"
        :name="blog.name"
        :image="blog.banner"
        :date="blog.post_type"
        type="blog"
        :id="blog.id.toString()"
        class="grid-item"
      />
    </div>
  </grid-template>
</template>

<script>
import BlogCard from '@/components/Cards/BlogCard.vue';
import GridTemplate from '@/components/Templates/GridTemplate.vue';

export default {
  name: 'Blogs',
  components: {
    BlogCard,
    GridTemplate
  },
  async created() {
    await this.$store.dispatch('blogs/fetchBlogs');
  },
  computed: {
    blogs() {
      return this.$store.getters['blogs/getBlogs'];
    }
  }
};
</script>

<style lang="scss" scoped>
.blog {
  height: calc(100vh - (#{$navHeight} + #{$footerHeight * 2} + 3px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
