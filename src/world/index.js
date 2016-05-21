import RendererWEBGL from './components/Core/RendererWEBGL';
import RendererCSS3D from './components/Core/RendererCSS3D';

import SceneWEBGL from './components/Core/SceneWEBGL';
import SceneCSS3D from './components/Core/SceneCSS3D';

import Stage from './components/Core/Stage';

import Clock from './components/Helpers/Clock';
import Camera from './components/Core/Camera';
import Emitter from './components/Helpers/Emitter';

/*
 * World class
 */
class World {
  /**
   * Constructor function
   * @param {domElement} container - Canvas container
   * @param {object[]} stages      - Object with element and position
   * @constructor
   */
  constructor (container, stages) {
    this.container = container;
    this.stages = [];

    this.css3d = true;

    // CREATE STAGES
    stages.forEach((stage) => {
      this.stages.push(new Stage(stage.position, stage.el));
    });

    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    // CLOCK
    this.clock = new Clock();

    // RENDER
    this.renderer = {
      webgl: new RendererWEBGL(this.container),
      css3d: this.css3d ? new RendererCSS3D(this.container) : null
    };

    // CAMERA
    this.camera = new Camera(width, height);
    this.camera.position.z = 1200;

    // SCENE (Add stages info/data here too!)
    this.scene = {
      webgl: new SceneWEBGL(this.renderer.webgl, this.camera, this.clock, this.stages),
      css3d: this.css3d ? new SceneCSS3D(this.renderer.css3d, this.camera, this.stages) : null
    };
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    this.camera.update(this.clock.delta); // Maybe first

    this.scene.webgl.render();
    if (this.css3d) {
      this.scene.css3d.render();
    }

    // this.camera.lookAt(this.camera.target);
    // console.log(this.camera.position.y);
  }

  /*
   * Animate camera functions here
   */
  moveToStage (name) {
    console.log('2: state: ', name);
    console.log(this.camera.position);

    TweenLite.to(this.camera.position, 2, {
      x: 0,
      y: 500,
      z: 1200 // Distance - should be const!
    });
  }

  /* ----------------- */

  resize (width, height) {
    Emitter.emit('resize', width, height);
  }

  mouseMove (x, y) {
    // this.camera.mouse(x, y);
    Emitter.emit('mousemove', x, y);
  }
};

export default World;
