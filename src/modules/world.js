import RendererWEBGL from './Core/RendererWEBGL';
// import RendererCSS3D from './Core/RendererCSS3D';
import Clock from './Helpers/Clock';
import Camera from './Core/Camera';
import Scene from './Core/Scene'; // Use the same for both WebGL and CSS3D
import Emitter from './Helpers/Emitter';

/*
 * World class
 */
class World {
  /**
   * Constructor function
   * @param {domElement} container Canvas container
   * @constructor
   */
  constructor (container) {
    this.container = container;

    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;

    // CLOCK
    this.clock = new Clock();

    // RENDER
    this.renderer = new RendererWEBGL(width, height);
    this.container.appendChild(this.renderer.domElement);

    // CAMERA
    this.camera = new Camera(60, width / height, 0.1, 10000);
    this.camera.position.z = 100;

    // SCENE (Add stages info here too!)
    this.scene = new Scene(this.renderer, this.camera, this.clock);
  }

  render () {
    this.camera.update(this.clock.delta);

    this.scene.render();
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
