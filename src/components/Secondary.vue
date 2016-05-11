<template>
  <aside class="secondary">
    <nav class="menu" v-on:click="expandMenu">
      Link
    </nav>
    <section class="content">
      Content should fade in
    </section>
  </aside>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Hello World!'
    };
  },

  methods: {
    expandMenu: function (event) {
      this.$el.classList.toggle('open');
      // Send event to border to change Color
      // send event to stop convas for a while
      // Emit all these actions
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../variables';

  // TODO: Navigation transition
  // just replace .open with GSAP
  // Fix border issues. Right now everything goes behind the border.
  // I think the secret is JS. Leave it for now
  // Also, haven't tested with scroll content

  // Mobile Design
  .secondary {
    height: $nav-mobile-height;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    //transition: all $secondary-sec ease-in-out;
    background-color: $white;
    z-index: 10;

    &.open {
      height: 100%;
      background-color: $dark;
    }

    nav {
      height: $nav-mobile-height;
      width: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      background-color: $babyBlue;
      .open & {}
    }
  }

  // Medium and up
  @media #{$break-medium} {
    .secondary {
      width: $nav-width;
      top: 0;
      height: 100%;

      &.open { width: 100%; }

      nav {
        float: right;
        width: $nav-width;
        height: 100%;
        background-color: transparent;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-right: 1px solid $babyBlue;
      }
    }
  }

  /* Use this scroll on cases?
  ::-webkit-scrollbar {
    width: .5em;
  }

  ::-webkit-scrollbar-thumb {
    background: #33f;
  }

  ::-webkit-scrollbar-track {
    background: #242424
  }

  ::-moz-selection {
    background: #33f;
  }

  ::selection {
    background: #33f;
  }
  */
</style>
