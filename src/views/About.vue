<template>
  <div class="showBlog">
    <div class="banner">
      <img src="https://i.imgur.com/RwtDzIE.jpg"/>
      <VerticalShow />
    </div>
    <section class="main">
      <div class="header-pane">
        <p class="header">About</p>
      </div>
      <div class="info">
        <div class="text">
          Sable is a creative studio + production company :)
        </div>
        <div class="text">
          We shoot films, take photos, record audio, make podcasts, host workshops,
          throw events, hire equipment, curate programmes and more from our 4000 sq
          ft home in Mabgate, Leeds.
        </div>
        <div class="text">
          Central to everything we do is the mission to lower barriers to creative media
          for young (especially Black) people in the city whether that be through providing
          access to equipment, free workshops, training + mentorship programmes or just access
          to space. All our work ultimately goes back to supporting that goal.
        </div>
        <br />
        <br />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.showBlog {
  width: 100%;
  overflow: hidden;
  .banner {
    min-width: calc(100vw - #{$sideBarWidth});
    display: flex;
    justify-content: space-between;
    border-bottom: $primaryLineWidth solid black;
    img {
      width: 100%;
      height: 70vh;
      overflow: hidden;
      object-fit: cover;
      // object-position: 50% 50%;
    }
  }
  .image {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    img {
      width: 80%;
      overflow: hidden;
      object-fit: cover;
      // object-position: 50% 50%;
    }
  }

  .main {
    display: flex;
    .header-pane {
      min-width: $leftColWidth;
      border-right: $primaryLineWidth solid black;
      .header {
        padding-left: 2vw;
        padding-top: 2vw;
        font-size: 27px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 22px;
      .text {
        width: 80%;
        margin-top: 40px;
        line-height: 30px;
      }
      .blog-name {
        margin-top: 4vw;
        margin-bottom: 40px;
        font-size: 31px;
      }
      .author {
        display: flex;
        width: 80%;
        border-bottom: $primaryLineWidth solid black;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .text {
        display: flex;
        justify-content: left;
     }
    }
  }
}

@media (max-width: 600px) {
.showBlog {
  .main {
    .header-pane {
      display: none;
    }
    .blog-name {
      width: 80%;
    }
  }
    .image {
      img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 600px) {
  .info {
    margin-bottom: 40px;
  }
}
</style>
