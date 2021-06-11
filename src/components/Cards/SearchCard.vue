<template>
  <div class="card">
    <router-link :to="{ name: targetLocation, params: { id } }">
      <img v-if="image" :src="image" :alt="name" />
      <h2 class="name">{{ name }}</h2>
      <h3 v-if="date" class="date">{{ date }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    image: String,
    type: String,
    id: String,
    date: {
      type: String,
      default: null
    }
  },
  computed: {
    targetLocation() {
      let target;
      switch (this.type) {
        case 'resident':
          target = 'ShowResident';
          break;
        case 'show':
          target = 'ShowShow';
          break;
        case 'blog':
          target = 'ShowBlog';
          break;
        default:
          console.log('no type');
          break;
      }
      return target;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 240px;
  margin-bottom: 25px;
  a {
    text-decoration: none;
  }
  img {
    width: 240px;
    height: 240px;
    border: $primaryLineWidth solid black;
    vertical-align: bottom;
    object-fit: cover;
  }
  .name {
    padding: 15px 0 20px 0;
    font-size: 20px;
    color: $primaryTextColour;
  }
  .date {
    border-top: $primaryLineWidth solid $primaryTextColour;
    padding: 10px 0 10px 0;
    letter-spacing: 1px;
    color: $primaryTextColour;
  }
}
</style>
