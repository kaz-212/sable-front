<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="500"
        height="299"
        id="gmap_canvas"
        src="https://maps.google.com/maps?ll=53.7992842,-1.5296654&q=Sable Radio&t=&z=16&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 299px;
  width: 500px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 299px;
  width: 500px;
}
</style>
