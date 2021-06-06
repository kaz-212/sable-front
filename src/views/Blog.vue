<template>
    <div class="blog">
    <h1>
      Woah there cowboy!
      <br />
      This bit of the site isn’t quite ready...
      <br />
      come back in a month and there will be more fun stuff here.
    </h1>
  </div>
  <!-- <div class="blog">
    <grid-template header="blogs">
      <div class="grid">
        <BlogCard
          v-bind:key="blog.id"
          v-for="blog in blogs"
          :name="blog.name"
          :image="blog.banner"
          type="blog"
          :id="blog.id.toString()"
          class="grid-item"
        />
      </div>
    </grid-template> -->
  <!-- </div> -->
</template>

<script>
// import BlogCard from '@/components/Cards/BlogCard.vue';
// import GridTemplate from '@/components/Templates/GridTemplate.vue';

// export default {
//   name: 'Blogs',
//   components: {
//     BlogCard,
//     GridTemplate
//   },
//   async created() {
//     await this.$store.dispatch('blogs/fetchBlogs');
//   },
//   computed: {
//     blogs() {
//       return this.$store.getters['blogs/getBlogs'];
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.blog {
  height: calc(100vh - (#{$navHeight} + #{$footerHeight * 2} + 3px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
