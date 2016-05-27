<template>
  <div>
    <img src="https://placekitten.com/500/250" class="cover">
    <img src="https://placekitten.com/800/250" class="cover">
    <img src="https://placekitten.com/550/250" class="cover">
    <img src="https://placekitten.com/800/150" class="cover">
    <img src="https://placekitten.com/200/450" class="cover">
    <!-- <iframe src="//player.vimeo.com/video/168272818" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
  </div>
</template>

<script>
import imagesLoaded from 'imagesloaded';

export default {
  activate: function (insert) {
    imagesLoaded(this.$el, () => {
      insert();
      this.$dispatch('case-loaded');
    });
  },
  beforeDestroy () {
    console.log('Stop video!');
    this.$dispatch('case-destroy');
  }
};
</script>
