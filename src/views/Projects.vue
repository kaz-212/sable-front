<template>
  <!-- <div class="project">
    <h1>Howdy !
      <br/>Rome wasn’t built in a day and this bit of our website is soon to be released...
      <br/>come back soon and we’ll have some fresh content here.
    </h1>
  </div> -->
  <grid-template header="projects">
    <div class="grid">
      <ProjCard
        v-bind:key="project.id"
        v-for="project in projects"
        :name="project.name"
        :image="project.banner"
        :date="project.post_type"
        type="blog"
        :id="slugify(project.name)"
        class="grid-item"
      />
    </div>
  </grid-template>
</template>

<script>
import ProjCard from '@/components/Cards/ProjCard.vue';
import GridTemplate from '@/components/Templates/GridTemplate.vue';

export default {
  name: 'Projects',
  components: {
    ProjCard,
    GridTemplate
  },
  methods: {
    slugify(name) {
      return name.replaceAll('-', '±').replaceAll(' ', '-').replaceAll('/', '|');
    }
  },
  async created() {
    await this.$store.dispatch('projects/fetchProjects');
  },
  computed: {
    projects() {
      return this.$store.getters['projects/getProjects'];
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  height: calc(100vh - (#{$navHeight} + #{$footerHeight * 2} + 3px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
