<template>
  <div class="bgcanvas">
    <!-- <canvas v-el:canvasWebgl id="canvasWebgl"></canvas> -->
    <!--<canvas v-el:camvasCss id="canvasCss"></canvas>-->
  </div>
</template>

<style lang="scss" scoped>
  @import '../variables';

  .bgcanvas {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
    margin-bottom: $nav-mobile-height;
    color: blue;
  }

  @media #{$break-medium} {
    .bgcanvas {
      margin-bottom: 0;
      margin-left: $nav-width;
    }
  }

  canvas {
    position: absolute;
    background-color: red;
    //width: 100%;
    //height: 100%;
  }

  .test2 {
    background-color: blue;
  }

  canvas {
    margin: 0;
    padding: 0;
  }
</style>

<script>
import Webgl from '../modules/webgl';
import Quick from '../modules/object3D';
import Cube from '../modules/objectCube';

export default {
  ready () {
    console.log('Hello Wolrd');

    console.log(this.$el);

    // I think I should make each canvas it own component too?
    // But how do they work together then? From this main? Props? I think PROPS is the solution. Position, Camera etx. Css is a addon, which can stand on it's own anyway. Need the camera from main.

    // TODO:
    // Add CSS3DRenderer
    // Der skal nok være en klasse over både WebGL og CSS3DRenderer som samler dem i et?
    // Det er her der bliver tilføjet objecter til hver scene - og hvor man kan slå CSS3D renderer fra og til

    let webgl = new Webgl({
      debug: true,
      container: this.$el,
      width: this.$el.offsetWidth,
      height: this.$el.offetHeight
    });

    let quick = new Quick();
    let cube = new Cube();

    // on resize - scale

    webgl.addObject(quick);
    webgl.addObject(cube);

    webgl.init();
  }

};
</script>
