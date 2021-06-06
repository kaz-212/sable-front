<template>
  <div class="blog">
    <grid-template header="blogs">
      <div class="grid">
        <Card
          v-bind:key="blog.id"
          v-for="blog in blogs"
          :name="blog.name"
          :image="blog.banner"
          type="blog"
          :id="blog.id.toString()"
          class="grid-item"
        />
      </div>
    </grid-template>
  </div>
</template>

<script>
import Card from '@/components/Cards/Card.vue';
import GridTemplate from '@/components/Templates/GridTemplate.vue';

export default {
  name: 'Blogs',
  components: {
    Card,
    GridTemplate
  },
  computed: {
    blogs() {
      return this.$store.getters['blogs/getBlogs'];
    }
  },
  async created() {
    await this.$store.dispatch('blogs/fetchBlogs');
  }
};
</script>

<style lang="scss" scoped>
</style>
