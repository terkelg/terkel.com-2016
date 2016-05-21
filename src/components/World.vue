<template>
  <div class="world">
    <div class="world__inner" v-el:container>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../stylesheets/variables';

  /*
   * Mobile
   */
  .world {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    padding: $border-size $border-size ($nav-mobile-height + $border-size) $border-size;
    transform: translateZ(0);
    .world__inner {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  /*
   * Desktop
   */
  @media #{$break-medium} {
    .world {
      padding: $border-size $border-size $border-size ($nav-width + $border-size);
      .world__inner {}
    }
  }
</style>

<script>
import {
  getSize,
  getVisibility
} from 'vuex/getters';

import Stats from 'world/libs/stats.min';
import World from 'world';
import debounce from 'lodash.debounce';

export default {
  vuex: {
    getters: {
      visible: getVisibility,
      size: getSize
    }
  },

  data: () => {
    return {};
  },

  watch: {
    '$route': 'toStage'
  },

  created () {
    this.onResize = debounce(this.onResize, 100);
  },

  ready () {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);

    // CHECK ROUTE HERE IF LOADED WITH INITIAL!
    // this.toStage();

    /* Make Stage a class?
     * - TODO: Better way to get elements on - Direct vue?
     */
    var stages = [
      {
        position: new THREE.Vector3(0, 500, 0),
        el: this.$root.$children[3].$els.home
      },
      {
        position: new THREE.Vector3(0, -500, 0),
        el: this.$root.$children[3].$els.cases
      }
    ];

    console.log(this.$route);

    this.world = new World(this.$els.container, stages);

    TweenLite.ticker.addEventListener('tick', () => {
      this.stats.begin();
      this.world.render();
      this.stats.end();
    });

    /*
    this.render = function render () {
      // eslint-disable-next-line
      requestAnimationFrame(this.render);
      this.stats.begin();
      this.world.render();
      this.stats.end();
    };
    this.render();
    */

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
    },

    toStage () {
      console.log('1:', this.$route.name);
      this.world.moveToStage(this.$route.name);
      // console.log(this.world.toStage());
    }
  }
};
</script>
