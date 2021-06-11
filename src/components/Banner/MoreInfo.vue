<template>
  <div class="more-info">
    <div class="banner-info-name" v-if="name">{{ name.trim() }}</div>
    <a v-if="link_url" :href="link_url" target="_blank">
      <button v-if="link_text">{{ link_text }}</button>
      <button v-else>explore</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MoreInfo',
  props: {
    link_url: String,
    link_text: String,
    name: String
  }
};
</script>

<style>
.more-info {
  position: absolute;
  z-index: 1000;
  bottom: 0;
}
button {
  padding: 10px;
  margin-bottom: 1.5vw;
  margin-left: 2vw;
  text-decoration: none;
  border: 1px solid black;
  color: white;
  background-color: black;
  transition: 0.2s;
}
button:hover {
  background-color: grey;
  cursor: pointer;
}
.banner-info-name {
  padding: 10px;
  margin-bottom: 1.5vw;
  margin-left: 2vw;
  margin-right: 2vw;
  border: 1px solid black;
  background-color: rgb(255, 255, 255);
}
</style>
