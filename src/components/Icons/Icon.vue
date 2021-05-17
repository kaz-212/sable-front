<template>
  <div>
    <a v-if="linkto" :href="linkto" target="_blank">
      <i :class="iconClass" class="fa-lg" style="color: black;"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    linkto: String,
    iconClass: String
  }
};
</script>

<style>
</style>
