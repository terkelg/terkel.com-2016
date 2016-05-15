<template>
  <div class="buttons" v-if="showButtons" transition="buttons">
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
  </div>
</template>

<style lang="scss" scoped>
  @import '../../stylesheets/variables';
  .buttons {
    a::after { display: none; }
    .btn {
      display: block;
      margin: 0 auto;
      padding-bottom: 15px;
      fill: $white;
    }
    .btn--close { width: 15px; }
    .btn--next,
    .btn--prev { width: 17px; }
  }
</style>

<script>
import Vue from 'vue';
import Emitter from 'core/emitter';
import { SECONDARY_TOGGLE } from 'core/messages';

export default {

  data: () => {
    return {
      showButtons: false
    };
  },

  ready () {
    Emitter.on(SECONDARY_TOGGLE, this.onToggle);
  },

  methods: {
    onToggle ({open}) {
      console.log(open);
      if (open) {
        this.showButtons = true;
      } else {
        this.showButtons = false;
      }
    }
  }
};

Vue.transition('buttons', {
  css: false,
  beforeEnter: function (el) {
    TweenMax.set([...el.children], {
      opacity: 0,
      scale: 0
    });
  },
  enter: function (el, done) {
    console.log([...el.children]);
    TweenMax.staggerTo([...el.children], 0.5, {
      opacity: 1,
      scale: 1,
      ease: Expo.easeOut,
      onComplete: done
    }, 0.2);
  },
  leave: function (el, done) {
    // Just hide.
    done();
  }
});
</script>
