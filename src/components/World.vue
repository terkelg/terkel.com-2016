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

import World from 'modules/world';
import Quick from 'modules/object3D';
import Cube from 'modules/objectCube';

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

    this.world = new World({
      'container': this.$el
    });

    // add objects
    let quick = new Quick();
    let cube = new Cube();
    this.world.webgl.addObject(quick);
    this.world.webgl.addObject(cube);

    var object = new THREE.CSS3DObject(this.$root.$children[3].$els.home);
    var object2 = new THREE.CSS3DObject(this.$root.$children[3].$els.cases);
    object2.position.set(0, 300, 0);
    this.world.css3d.addObject(object);
    this.world.css3d.addObject(object2);

    this.world.init();

    // Kick off render loop (Move to eventlisteners)
    TweenLite.ticker.addEventListener('tick', () => {
      this.stats.begin();
      this.world.animate();
      this.stats.end();
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
      this.world.onWindowResize(this.$el.offsetWidth, this.$el.offsetHeight);
    },

    onMouseMove (e) {
      this.world.onMouseMove(e.clientX, e.clientY);
    }
  }

};
</script>
