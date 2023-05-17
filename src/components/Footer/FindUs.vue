<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="500"
        height="299"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.81500152667417!2d-1.532377691905128!3d53.802034361441784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c11f384bab7%3A0x9f6a526568d20631!2sByron%20Street%20Mills%2C%20Millwright%20St%2C%20Leeds%20LS2%207QG!5e0!3m2!1sen!2suk!4v1684348032275!5m2!1sen!2suk"
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
