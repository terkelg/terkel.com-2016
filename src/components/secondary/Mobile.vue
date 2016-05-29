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
