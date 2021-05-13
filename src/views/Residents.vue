<template>
  <div class="shows" v-if="residents">
    <grid-template header="residents">
      <div class="grid">
        <ResCard
          v-bind:key="resident.id"
          v-for="resident in residents"
          :name="resident.name"
          :image="resident.image_url"
          :type="'resident'"
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
  created() {
    this.$store.dispatch('residents/fetchResidents');
  }
};
</script>
