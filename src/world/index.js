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
   * @param {domElement[]} pages   - Dom elements to add to stages
   * @constructor
   */
  constructor (container, pages) {
    this.container = container;
    this.stages = [
      new Stage('home', new THREE.Vector3(0, 1500, 0)),
      new Stage('cases', new THREE.Vector3(0, 500, 0)),
      new Stage('about', new THREE.Vector3(0, -500, 0)),
      new Stage('contact', new THREE.Vector3(0, -1500, 0))
    ];

    this.css3d = true;

    console.log(this.stages[0]);

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
      css3d: this.css3d ? new SceneCSS3D(this.renderer.css3d, this.camera, this.stages, pages) : null
    };
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    this.camera.update(this.clock.delta);

    this.scene.webgl.render();
    if (this.css3d) {
      this.scene.css3d.render();
    }
  }

  /*
   * Animate camera functions here
   */
  moveToStage (name) {
    console.log('2: state: ', name);
    switch (name) {
      case 'home':
        this.camera.moveTo(this.stages[0].position);
        break;
      case 'case':
        this.camera.moveTo(this.stages[1].position);
        break;
      case 'about':
        this.camera.moveTo(this.stages[2].position);
        break;
      case 'contact':
        this.camera.moveTo(this.stages[3].position);
        break;
    }
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
