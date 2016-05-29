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
  },

  components: {
    Logo
  }
};
</script>
