<template>
  <div class="menu menu--mobile">
    <div class="bg" v-if="secondary.status === 'closed'">
      <slot name="section"></slot>
    </div>
    <div class="nav" v-if="secondary.status === 'open'" transition="buttons">
      <slot name="navigation"></slot>
    </div>
    <div v-if="secondary.status === 'closed'">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../stylesheets/variables';

.menu--mobile {
  position: relative;
  height: $nav-mobile-height;
  border-top: 1px solid $babyBlue;
  border-bottom: 1px solid rgba($white, 0.1);
  .nav {
    position: relative;
    width: 100%;
    height: $nav-mobile-height;
    div {
      position: absolute;
      top: 50%;
      transform: translateY(-35%);
      width: 100%;
    }
    .btn {
      fill: $white;
      display: inline-block;
      cursor: pointer;
      width: 20px;
      margin: 0 20px;
    }
    .btn--prev { float: left; }
    .btn--close { float: right; }
  }
  .bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: $nav-mobile-height;
    line-height: $nav-mobile-height;
    text-align: center;

    color: rgba($babyBlue, 0.35);
    font-weight: 600;
    font-size: 40px;
    user-select: none;
    pointer-events: none;
    transition: color $secondary-sec $secondary-ease;
  }
  ul {
    position: relative;
    height: $nav-mobile-height;
    line-height: $nav-mobile-height;
  }

  /*
   * Transitions
   * TODO: Missing transitions
   * debug med v-show eller brug JS
   */
  .buttons-transition {
    transition: all .4s ease;
    opacity: 1;
    transform: scale(1);
  }
  .buttons-enter, .buttons-leave {
    transform: scale(0);
    opacity: 0;
  }
}
.open .menu--mobile {
  transform: translateY(-1px); // Hide border
}
</style>

<script>
import { getSize, getSecondary } from 'vuex/getters';
//  import Vue from 'vue';

export default {

  vuex: {
    getters: {
      size: getSize,
      secondary: getSecondary
    }
  }
};

/*
Vue.transition('buttons', {
  css: false,
  beforeEnter: function (el) {
    TweenMax.set([...el.children[0].children], {
      opacity: 0,
      scale: 0
    });
  },
  enter: function (el, done) {
    TweenMax.staggerTo([...el.children[0].children], 0.5, {
      opacity: 1,
      scale: 1,
      ease: Expo.easeOut,
      delay: 0.5,
      onComplete: done
    }, 0.2);
  },
  leave: function (el, done) {
    done();
  }
});
*/
</script>
