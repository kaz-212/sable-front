<template>
  <div class="more-info">
    <button>Hi {{ link_url }}</button>
  </div>
</template>

<script>
export default {
  name: 'MoreInfo',
  props: {
    link_url: String
  }
};
</script>

<style>
.more-info {
  z-index: 10000;
  background-color: red;
}
</style>
