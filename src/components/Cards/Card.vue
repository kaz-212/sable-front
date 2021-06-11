<template>
  <div class="card" v-bind:class="{ fade: $route.name === 'Search' }">
    <router-link :to="{ name: targetLocation, params: { id } }">
    <h2 class="type" v-if="$route.name === 'Search'">{{ type }}</h2>
      <img v-if="image"
           :src="image"
           :alt="name"
      />
    <h2 class="name">{{ name }}</h2>
    <h3 v-if="date" class="date">{{ date }}</h3>
    <div class="tags">
      <h3 v-bind:key="tag.key" v-for="tag in tags" class="tag">
        {{ tag.name }}
      </h3>
    </div>
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
    },
    tags: {
      type: Array,
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
    position: relative;
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
    border-bottom: $primaryLineWidth solid $primaryTextColour;
    padding: 10px 0 10px 0;
    letter-spacing: 1px;
    color: $primaryTextColour;
  }
  .type {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
    background: rgb(2, 2, 2);
    color: #fff;
    opacity: 1;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 10px;
    .tag {
      margin-right: 10px;
      margin-bottom: 3px;
      font-size: 16px;
      color: grey;
      padding-right: 7px;
    }
  }
}

.fade:hover {
  img {
  opacity: 0.3;
  }
  .type {
  opacity: 1;
  }
}
</style>
