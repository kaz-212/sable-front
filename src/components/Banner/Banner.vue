<template>
  <div class="banner">
    <div class="selectas">
      <div
        v-for="(img, index) in imgs"
        :key="index"
        class="selecta"
        :class="{ selected: selectedImg === index }"
        @click="selectedImg = index"
      ></div>
    </div>
    <div class="img-wrapper">
      <img :src="imgs[selectedImg].url" alt="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      selectedImg: 0,
      imgs: [
        {
          url:
            'https://images.unsplash.com/photo-1498145645178-ab2c7cebc433?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFkaW8lMjB2aW55bHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
          url:
            'https://images.unsplash.com/photo-1589448369336-7e68b874f245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        },
        {
          url:
            'https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFkaW98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  overflow: hidden;
  position: relative;
  .img-wrapper {
    min-width: 100vw;
    height: 60vh;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    // display: flex;
    img {
      min-width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // max-height: 100%;
    }
  }
  .selectas {
    position: absolute;
    z-index: 100;
    bottom: 10px;
    left: 50%;
    margin-left: auto;
    display: flex;
    align-items: center;
    height: 25px;
    width: 120px;
    .selecta {
      position: relative;
      left: -50%;
      border: 2px solid white;
      height: 14px;
      width: 14px;
      border-radius: 7px;
      margin: 10px;
      cursor: pointer;
      // transition: height 0.3s ease, width 0.3s ease;
      &.selected {
        height: 18px;
        width: 18px;
        border-radius: 9px;
      }
    }
  }
}
</style>
