<template>
  <div id="universe">
    <canvas v-el:canvasWebgl id="canvasWebgl"></canvas>
    <canvas v-el:camvasCss id="canvasCss"></canvas>
  </div>
</template>

<script>
import Webgl from '../modules/webgl';
import Quick from '../modules/object3D';
import Cube from '../modules/objectCube';

export default {
  ready () {
    console.log('Hello Wolrd');
    console.log(this.$els.canvasCss);
    console.log(this.$els.canvasWebgl);

    // I think I should make each canvas it own component too?
    // But how do they work together then? From this main? Props? I think PROPS is the solution. Position, Camera etx. Css is a addon, which can stand on it's own anyway. Need the camera from main.

    // TODO:
    // Add CSS3DRenderer
    // Der skal nok være en klasse over både WebGL og CSS3DRenderer som samler dem i et?
    // Det er her der bliver tilføjet objecter til hver scene - og hvor man kan slå CSS3D renderer fra og til

    let webgl = new Webgl({
      debug: true,
      container: this.$el
    });

    let quick = new Quick();
    let cube = new Cube();

    webgl.addObject(quick);
    webgl.addObject(cube);

    webgl.init();
  }

};
</script>
