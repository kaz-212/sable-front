<template>
  <div class="radioplayer"
      data-src="http://streaming.radio.co/sced7c0e79/listen"
      data-autoplay="false"
      data-playbutton="true"
      data-volumeslider="false"
      data-elapsedtime="false"
      data-nowplaying="false"
      data-showplayer="false"
      data-volume="50">
  </div>
</template>

<script>
export default {
  name: 'RadioCo'
};
</script>

<style>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
[class*="fontawesome-"]:before {
    font-family: 'FontAwesome', sans-serif;
}

.radioco-playButton-playing:before {
    content: "\f04b";
    font-family: 'FontAwesome', sans-serif;
}
.radioco-playButton-paused:before {
    content: "\f04d";
    font-family: 'FontAwesome', sans-serif;
}
.radioco-playButton {
    color: $primaryTextColour;
    font-size: 30px;
}

.radioco-playButton-playing {
    color: $primaryTextColour;
    position: absolute;
}
.radioco-playButton-paused {
    position: absolute;
}

</style>
