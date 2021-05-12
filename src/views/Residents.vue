<template>
  <div class="home">
    <ResCard
      v-bind:key="resident.id"
      v-for="resident in residents"
      :name="resident.name"
      :image="resident.image_url"
      :type="'resident'"
    />
  </div>
</template>

<script>
import ResCard from '@/components/Cards/ResCard.vue';

export default {
  name: 'Residents',
  components: {
    ResCard
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
