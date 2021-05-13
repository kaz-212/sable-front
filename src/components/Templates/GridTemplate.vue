<template>
  <div class="grid-template">
    <div class="header-pane">
      <p class="header">{{ header }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridTemplate',
  props: { header: String }
};
</script>

<style lang="scss" scoped>
.grid-template {
  .header-pane {
    position: fixed;
    width: $leftColWidth;
    height: $pageHeight;
    border-right: $primaryLineWidth solid black;
    .header {
      margin-top: 110px;
      margin-left: 60px;
      font-size: 27px;
    }
  }
  .grid {
    // background-color: red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: $leftColWidth;
    padding: 70px 0;

    .grid-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 40px 0;
    }
  }
}
</style>
