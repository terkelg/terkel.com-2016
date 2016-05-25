<template>
  <div class="menu menu--desktop">
    <div class="menu__top" v-if="secondary.status === 'open'" transition="top">
      <slot name="navigation"></slot>
    </div>
    <div class="menu__middle-bg">
      <slot name="section"></slot>
    </div>
    <div class="menu__vertical">
      <nav class="menu__vertical__inner">
        <slot name="menu"></slot>
      </nav>
    </div>
    <div class="menu__bottom">
      <div class="mini-logo">
        <logo></logo>
      </div>
      	<span class="year">&copy;{{year}}</span>
    </div>
    </div>
  </div>
</template>

<script>
import { getSecondary } from 'vuex/getters';

import Logo from '../common/logo';

export default {
  vuex: {
    getters: {
      secondary: getSecondary
    }
  },

  data: () => {
    return {
      year: '1993'
    };
  },

  ready () {
    this.year = new Date().getFullYear();
  },

  components: {
    Logo
  },

  transitions: {
    top: {
      css: false,
      beforeEnter: function (el) {
        TweenMax.set([...el.children[0].children], {
          opacity: 0,
          scale: 0
        });
      },
      enter: function (el, done) {
        TweenMax.staggerTo([...el.children[0].children], 0.2, {
          opacity: 1,
          scale: 1,
          ease: Expo.easeOut,
          delay: 0.75,
          onComplete: done
        }, 0.2);
      },
      leave: function (el, done) {
        TweenMax.to(el, 0.3, {
          opacity: 0,
          ease: Expo.easeOut,
          onComplete: done
        }, 0.2);
      }
    }
  }
};
</script>

<style lang="scss">
@import '../../stylesheets/variables';

.menu--desktop {
  /* This is used to center the vertical navigation
   * inside the sidebar. This is called height, because it's
   * visual use. It really set the height
   */
  $nav-height: 30px;
  $nav-length: 600px;

  position: relative;
  width: $nav-width;
  height: 100%;
  float: right;
  user-select: none;
  border-right: 1px solid $babyBlue;
  // border-left: 1px solid rgba($white, 0.1); // Uses scrollbar as border instead
  transform: translateZ(0);
  backface-visibility: hidden;
  .menu__vertical {
    margin: 0 auto;
    height: 100%;
    width: $nav-height;
    transform: translateZ(0);
  }
  .menu__vertical__inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateY(0);

    //  Prevnt overlay on normal content
    width: 0;
    left: -($nav-length/2);

    ul {
      position: relative;
      left: -50%;
      transform: rotate(90deg) translateY(-50%) translateZ(0);
      width: $nav-length; // Can work with auto, but not with relative on sidebar itself
      height: $nav-height;
      line-height: $nav-height;
    }
  }
  .menu__top,
  .menu__bottom,
  .menu__middle-bg {
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 2;
    transform: translateZ(0);
  }
  .menu__top {
    top: 0;
    margin-top: 20px;
    .btn {
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
  .menu__bottom {
    bottom: 0;
    z-index: 2;
    font-size: 7px;
    margin-bottom: 20px;
    color: $blue;
    transition: color $secondary-sec $secondary-ease;
    .year { padding-right: 4px; } // Optical center
    .mini-logo {
      width: 25px;
      margin: 0 auto;
      padding-bottom: 5px;
      .logo {
        fill: $blue;
        transition: fill $secondary-sec $secondary-ease;
      }
    }
  }
  .menu__middle-bg {
    z-index: 0;
    top: 50%;
    color: rgba($babyBlue, 0.35);
    transform: translateY(-50%);
    font-weight: 600;
    font-size: 40px;
    user-select: none;
    pointer-events: none;
    transition: color $secondary-sec $secondary-ease;
  }
}
// dark mode
.dark .menu--desktop {
  .menu__bottom { color: $white; }
  .mini-logo .logo { fill: $white; }
  .menu__middle-bg { color: rgba($white, 0.1); }
}
</style>
