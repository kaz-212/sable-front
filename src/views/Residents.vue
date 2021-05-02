<template>
  <div class="home">
    <div class="resident" v-bind:key="resident.id" v-for="resident in residents">
      <h1>{{ resident.name }}</h1>
      <p>{{ resident }}</p>
      <img :src="resident.image_url" alt="" width=500>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Residents',
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
