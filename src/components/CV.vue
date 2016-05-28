<template>
  <div>
    This is the about page!
    <img src="https://placekitten.com/800/250" class="cover">
    <img src="https://placekitten.com/550/250" class="cover">
    <img src="https://placekitten.com/550/250" class="cover">
    <img src="https://placekitten.com/553/270" class="cover">
    <img src="https://placekitten.com/550/260" class="cover">
    <img src="https://placekitten.com/552/280" class="cover">
    <img src="https://placekitten.com/551/211" class="cover">
  </div>
</template>

<style lang="scss">
@import '../stylesheets/variables';
</style>

<script>
import imagesLoaded from 'imagesloaded';

export default {
  events: {
    'route-change': function (route) {
      return true;
    },
    'secondary-opened': function () {
      console.log('CASE: Secondary Opnened - Im case!!');
      return true;
    }
  },

  ready () {
    console.log('Ready CASE');
  },

  route: {
    activate: function ({ next }) {
      imagesLoaded(this.$el, () => {
        next();
        console.log('About with images loaded');
      });
    },
    canDeactivate: function (transition) {
      TweenLite.to(this.$el, 0.3, {
        opacity: 0,
        onComplete: () => {
          transition.next();
        }
      });
    }
  }
};
</script>
