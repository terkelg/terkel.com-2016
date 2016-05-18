<template>
  <div class="background">
      <div id="test" v-el:test><a href="www.dr.dk">This is a test!!</a></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../stylesheets/variables';

  /*
   * Mobile
   */
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*
    position: fixed;
    top: $border-size;
    right: $border-size;
    bottom: $nav-mobile-height + $border-size;
    left: $border-size;
    */
  }

  /*
   * Desktop

  @media #{$break-medium} {
    .background {
      left: $nav-width + $border-size;
      top: $border-size;
      right: $border-size;
      bottom: $border-size;
    }
  }
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
    this.css3d = new Css3d(this.webgl.getCamera(), {
      container: this.$el,
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    });

    // console.log(this.$root.$children[2].$el);
    // var newDiv = document.createElement('div');
    // var newContent = document.createTextNode('Hi there and greetings!');
    // newDiv.appendChild(newContent);
    console.log(this.$els.test);
    // const el = document.getElementById('test');
    var object = new THREE.CSS3DObject(this.$els.test);
    this.css3d.addObject(object);

    /*
     * Tror det skal laves dynamisk
     */

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
