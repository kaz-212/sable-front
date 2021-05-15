<template>
  <div class="page-not-found">
    <div class="message">
      <h1>oops - 404 error</h1>
      <br />
      <p>this page does not exist</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-not-found {
  height: calc(100vh - (#{$navHeight} + #{$footerHeight * 2} + 3px));
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
