<template>
  <div class="background">
  </div>
</template>

<style lang="scss" scoped>
  @import '../stylesheets/variables';

  /*
   * Mobile
   */
  .background {
    position: absolute;
    /*
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // width: 100%;
    // height: 100%;
    transform: translateZ(0);
  }

  /*
   * Desktop
  @media #{$break-medium} {}
  */
</style>

<script>
import {
  getSize,
  getVisibility
} from 'vuex/getters';

import Stats from 'modules/libs/stats.min';
import World from 'modules/World';

export default {
  vuex: {
    getters: {
      visible: getVisibility,
      size: getSize
    }
  },

  // Set camera here etc to access it everywhere
  data: () => {
    return {};
  },

  ready () {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);

    // This
    this.world = new World(this.$el);
    TweenMax.ticker.addEventListener('tick', () => {
      this.world.animate();
    });

    this.addEventListeners();
  },

  beforeDestroy: function () {
    this.removeEventListeners();
  },

  methods: {
    addEventListeners () {
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('mousemove', this.onMouseMove, false);
    },

    removeEventListeners () {
      window.removeEventListener('resize', this.onResize, false);
      document.removeEventListener('mousemove', this.onMouseMove, false);
    },

    onResize () {
      this.world.resize(this.$el.offsetWidth, this.$el.offsetHeight);
    },

    onMouseMove (e) {
      this.world.mouseMove(e.clientX, e.clientY);
    }
  }

};
</script>
