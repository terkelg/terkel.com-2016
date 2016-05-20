import RendererWEBGL from './Core/RendererWEBGL';
import RendererCSS3D from './Core/RendererCSS3D';

import SceneWEBGL from './Core/SceneWEBGL';
import SceneCSS3D from './Core/SceneCSS3D';

import Clock from './Helpers/Clock';
import Camera from './Core/Camera';
import Emitter from './Helpers/Emitter';

/*
 * World class
 */
class World {
  /**
   * Constructor function
   * @param {domElement} container Canvas container
   * @param {[domElement]} stages Array of domElements to display in world
   * @constructor
   */
  constructor (container, stages) {
    this.container = container;

    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    // CLOCK
    this.clock = new Clock();

    // RENDER
    this.renderer = {
      webgl: new RendererWEBGL(this.container),
      css3d: new RendererCSS3D(this.container)
    };

    // CAMERA
    this.camera = new Camera(60, width / height, 0.1, 10000);
    this.camera.position.z = 100;

    // SCENE (Add stages info/data here too!)
    this.scene = {
      webgl: new SceneWEBGL(this.renderer.webgl, this.camera, this.clock),
      css3d: new SceneCSS3D(this.renderer.css3d, this.camera, stages)
    };
  }

  render () {
    this.camera.update(this.clock.delta);

    this.scene.webgl.render();
    // this.scene.css3d.render(); -> calls renderer.render in that scene
  }

  /*
   * Animate camera functions here
   */

  /* ----------------- */

  resize (width, height) {
    Emitter.emit('resize', width, height);
  }

  mouseMove (x, y) {
    Emitter.emit('mousemove', x, y);
  }
};

export default World;
