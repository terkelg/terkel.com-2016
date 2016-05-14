<template>
  <a class="btn btn--close" href="#">
    <svg version="1.1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       x="0px" y="0px" viewBox="0 0 26.3 26.3" style="enable-background:new 0 0 26.3 26.3;"
       xml:space="preserve">
    <defs>
    </defs>
    <polygon points="26.3,2.8 23.5,0 13.2,10.3 2.8,0 0,2.8 10.3,13.2 0,23.5 2.8,26.3 13.2,16 23.5,26.3 26.3,23.5 16,13.2 "/>
    </svg>
  </a>

  <a class="btn btn--next">
    <svg version="1.1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       x="0px" y="0px" viewBox="0 0 30.7 24" style="enable-background:new 0 0 30.7 24;"
       xml:space="preserve">
    <defs>
    </defs>
    <polygon points="18.7,0 15.9,2.8 23,10 0,10 0,14 23,14 15.9,21.1 18.7,24 30.7,12 "/>
    </svg>
  </a>

  <a class="btn btn--prev">
    <svg version="1.1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       x="0px" y="0px" viewBox="0 0 30.7 24" style="enable-background:new 0 0 30.7 24;"
       xml:space="preserve">
    <defs>
    </defs>
    <polygon points="30.7,14 30.7,10 7.7,10 14.8,2.8 12,0 0,12 12,24 14.8,21.1 7.7,14 "/>
    </svg>
  </a>
  <a @click=didClick>hej</a>
</template>

<style lang="scss" scoped>
  @import '../../variables';

  a::after { display: none; }
  .btn--close,
  .btn--next,
  .btn--prev {
    display: none;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 20px;
    opacity: 0;
    fill: $white;
    transform: scale(0);
  }
  .btn--close { width: 15px; }
  .btn--next,
  .btn--prev { width: 17px; }
</style>

<script>
export default {

  ready () {},

  methods: {
    didClick () {
      TweenMax.staggerTo('.btn', 1, {
        opacity: 1,
        scale: 1,
        display: 'block',
        force3D: true,
        ease: Elastic.easeOut.config(1, 0.5)
      }, 0.1);
    }
  }
};
</script>
