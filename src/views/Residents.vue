<template>
  <div class="home">
    <div class="resident" v-bind:key="resident.id" v-for="resident in residents">
      <Card :name="resident.name"
            :image="resident.image_url"
            :type="'resident'"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Cards/Card.vue';

export default {
  name: 'Residents',
  components: {
    Card
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
