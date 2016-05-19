<template>
  <div class="menu menu--mobile">
    <div class="section-bg" v-if="secondary.status === 'closed'" transition="section">
      <slot name="section"></slot>
    </div>
    <nav class="navigation" v-if="secondary.status === 'open'" transition="nav">
      <slot name="navigation"></slot>
    </nav>
    <div class="menu-links" v-if="secondary.status === 'closed'" transition="links">
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
  transform: translateZ(0);
  backface-visibility: hidden;
  .navigation {
    position: absolute;
    width: 100%;
    height: $nav-mobile-height;
    div {
      position: absolute;
      top: 50%;
      transform: translateY(-35%);
      width: 100%;
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
  }
  .section-bg {
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
  .menu-links {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    ul {
      position: relative;
      height: $nav-mobile-height;
      line-height: $nav-mobile-height;
    }
  }
}
.open .menu--mobile {
  transform: translateY(-1px); // Hide border
}

/*
 * Transitions
 */
.menu--mobile {
  .section-transition {
    transition: all 0.3s ease;
    transform: scale(1);
  }
  .section-enter, .section-leave {
    opacity: 0;
    transform: scale(0);
  }
  .nav-transition {
    transition: all 0.5s ease;
    transform: scale(1);
  }
  .nav-enter, .nav-leave {
    transform: scale(0);
    opacity: 0;
  }
}
</style>

<script>
import { getSize, getSecondary } from 'vuex/getters';

export default {

  vuex: {
    getters: {
      size: getSize,
      secondary: getSecondary
    }
  },

  transitions: {
    links: {
      css: false,
      beforeEnter: function (el) {
        TweenMax.set([...el.children[0].children[0].children], {
          opacity: 0,
          scale: 0
        });
      },
      enter: function (el, done) {
        TweenMax.staggerTo([...el.children[0].children[0].children], 0.2, {
          opacity: 1,
          scale: 1,
          ease: Expo.easeOut,
          delay: 0.45,
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
