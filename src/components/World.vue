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
    width: 100%;
    height: 100%;
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

import Webgl from 'modules/webgl';
import Css3d from 'modules/css3d';

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
    this.addEventListeners();

    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);

    // Make them share the same option object!
    // - maybe create const for scene positions

    /*
     * WEBGL
     */
    this.webgl = new Webgl({
      debug: true,
      container: this.$el,
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    });

    // Objects
    let quick = new Quick();
    let cube = new Cube();
    this.webgl.addObject(quick);
    this.webgl.addObject(cube);

    this.webgl.init();

    /*
     * CSS3D
     */
    console.log(this.$root.$children[2].$els.home);
    console.log(this.$el);
    this.css3d = new Css3d(this.webgl.getCamera(), {
      container: this.$el,
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    });

    // const el = document.getElementById('test');
    var object = new THREE.CSS3DObject(this.$root.$children[3].$els.home);
    this.css3d.addObject(object);

    var object2 = new THREE.CSS3DObject(this.$root.$children[3].$els.cases);
    object2.position.set(0, 300, 0);
    this.css3d.addObject(object2);

    this.css3d.init();

    // Kick off render loop
    TweenLite.ticker.addEventListener('tick', () => {
      this.stats.begin();

      this.webgl.animate();
      this.css3d.animate();

      this.stats.end();
    });
  },

  beforeDestroy: function () {
    this.removeEventListeners();
  },

  methods: {
    addEventListeners () {
      // TODO: Maybe a little debounce is a good idea anyway
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('mousemove', this.onMouseMove, false);
    },

    removeEventListeners () {
      window.removeEventListener('resize', this.onResize, false);
      document.removeEventListener('mousemove', this.onMouseMove, false);
    },

    onResize (size) {
      let width = this.$el.offsetWidth;
      let height = this.$el.offsetHeight;
      this.webgl.onWindowResize(width, height);
      this.css3d.onWindowResize(width, height);
    },

    onMouseMove (e) {
      this.webgl.onMouseMove(e.clientX, e.clientY);
    }
  }

};
</script>
