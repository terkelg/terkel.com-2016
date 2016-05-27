<template>
  <div>
    <img src="https://placekitten.com/500/250" class="cover">
    <img src="https://placekitten.com/800/250" class="cover">
    <img src="https://placekitten.com/550/250" class="cover">
    <img src="https://placekitten.com/800/150" class="cover">
    <img src="https://placekitten.com/200/450" class="cover">
  </div>
</template>

<script>
import imagesLoaded from 'imagesloaded';

export default {
  activate: function (insert) {
    console.log('About to activate: ', this.$el);
    imagesLoaded(this.$el, () => {
      insert();
    });
  }
};
</script>
