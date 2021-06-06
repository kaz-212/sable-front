<template>
  <div v-if="residents">
    <grid-template header="residents">
      <div class="grid">
        <ResCard
          v-bind:key="blog.id"
          v-for="blog in blogs"
          :name="blog.name"
          :image="blog.banner"
          type="resident"
          :id="resident.id.toString()"
          class="grid-item"
        />
      </div>
    </grid-template>
  </div>
</template>

<script>
import ResCard from '@/components/Cards/ResCard.vue';
import GridTemplate from '@/components/Templates/GridTemplate.vue';

export default {
  name: 'Residents',
  components: {
    ResCard,
    GridTemplate
  },
  computed: {
    residents() {
      return this.$store.getters['residents/getResidents'];
    }
  },
  async created() {
    await this.$store.dispatch('residents/fetchResidents');
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
