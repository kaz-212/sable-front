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
      margin-top: 2vw;
      margin-left: 2vw;
      // font-size: 27px;
      font-size: $navLinkSize;
    }
  }
  .grid {
    // background-color: red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: $leftColWidth;
    padding-top: 2vw;

    .grid-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
}

@media (max-width: 1100px) {
  .grid-template {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 750px) {
  .grid-template {
    .grid {
      grid-template-columns: 1fr;
      padding-top: 10vh;
    }
  }
}

@media (max-width: 500px) {
    .header-pane {
      display: none;
    }
    .grid-item {
      margin-left: calc(#{-$leftColWidth});
    }
}

@media (min-width: 1700px) {
  .grid-template {
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
