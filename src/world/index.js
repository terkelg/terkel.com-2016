import RendererWEBGL from './components/Core/RendererWEBGL';
import RendererCSS3D from './components/Core/RendererCSS3D';

import SceneWEBGL from './components/Core/SceneWEBGL';
import SceneCSS3D from './components/Core/SceneCSS3D';

import Clock from './components/Helpers/Clock';
import Camera from './components/Core/Camera';
import Emitter from './components/Helpers/Emitter';

/*
 * World class
 */
class World {
  /**
   * Constructor function
   * @param {domElement} container Canvas container
   * @param {domElement[]} stages Array of domElements to display in world
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
    this.camera = new Camera(width, height);
    this.camera.position.z = 1200;

    // SCENE (Add stages info/data here too!)
    this.scene = {
      webgl: new SceneWEBGL(this.renderer.webgl, this.camera, this.clock),
      css3d: new SceneCSS3D(this.renderer.css3d, this.camera, stages)
    };
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    this.scene.webgl.render();
    this.scene.css3d.render();

    this.camera.update(this.clock.delta); // Maybe first
  }

  /*
   * Animate camera functions here
   */

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
