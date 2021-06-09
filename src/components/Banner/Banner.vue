<template>
  <div class="banner" v-if="slides">
    <div class="selectas">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="selecta"
        :class="{ selected: selectedImg === index }"
        @click="(selectedImg = index), pause()"
      ></div>
    </div>
    <MoreInfo
      :link_url="slides[selectedImg].link_url"
      :name="slides[selectedImg].name"
      :link_text="slides[selectedImg].link_text"
    />
    <div class="img-wrapper" v-if="slides[selectedImg].image_url">
      <img :src="slides[selectedImg].image_url" alt="banner-image" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MoreInfo from './MoreInfo.vue';

const bannerImgURL = 'https://sable-radio.herokuapp.com/api/banner';

export default {
  name: 'Banner',
  components: {
    MoreInfo
  },
  data() {
    return {
      selectedImg: 0,
      imgs: [
        {
          image_url:
            'https://images.unsplash.com/photo-1498145645178-ab2c7cebc433?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFkaW8lMjB2aW55bHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1589448369336-7e68b874f245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        },
        {
          image_url:
            'https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFkaW98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
      ],
      slides: ''
    };
  },
  methods: {
    nextImg() {
      if (this.selectedImg === this.imgs.length - 1) {
        this.selectedImg = 0;
      } else {
        this.selectedImg += 1;
      }
    },
    pause() {
      clearInterval(this.interval);
    }
  },
  async created() {
    this.interval = setInterval(() => this.nextImg(), 12000);

    try {
      const { data } = await axios.get(bannerImgURL);
      this.slides = data;
    } catch (e) {
      this.slides = this.imgs;
    }
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
    height: 70vh;
    // overflow: hidden;
    // margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // max-height: 100%;
    }
  }
  .selectas {
    position: absolute;
    z-index: 2;
    bottom: 10px;
    left: 50%;
    margin-left: auto;
    display: flex;
    align-items: center;
    height: 25px;
    width: auto;
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

@media (max-width:1100px) {
  .banner {
    img {
      height: 100%;
      object-fit: cover;
      border-bottom: $primaryLineWidth solid black;
    }
  }
}
</style>
