<template>
  <!-- <div class="blog">
    <h1>
      Woah there cowboy!
      <br />
      This bit of the site isn’t quite ready...
      <br />
      come back in a month and there will be more fun stuff here.
    </h1>
  </div> -->
  <div v-if="residents">
    <grid-template header="residents">
      <div class="grid">
        <ResCard
          v-bind:key="resident.id"
          v-for="resident in residents"
          :name="resident.name"
          :image="resident.image_url"
          type="resident"
          :id="slugify(resident.name)"
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
  methods: {
    slugify(name) {
      return name.split(' ').join('-');
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
