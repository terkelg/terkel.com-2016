// Something should be state or params?
// Start simple! Few options
// Camera is common, share it between both views

// 1) Få det til at virke
// 2) Flyt camera til World
// 3) .. ryd op?

import Webgl from 'modules/webgl';
import Css3d from 'modules/css3d';
// import Stage from 'modules/stage';

export default class World {

  constructor (options = {}) {
    /*
     * Default options
     */
    let defaultOptions = {
      'container': options.container || document.body,
      'active': options.active || true,
      'debug': options.debug || false
    };
    this.options = defaultOptions;

    /*
     * Properties
     */
    this.container = this.options.container;
    this.width = this.options.container.offsetWidth;
    this.height = this.options.container.offsetHeight;

    this.target = new THREE.Vector3(0, 0, 0);
    this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 1, 10000);
    this.camera.lookAt(this.target); // I want a smart target system. Comes with move system.
    this.camera.position.set(0, 0, 1200);
    this.cameraShakeY = 0;

    this.windowHalfX = this.width / 2;
    this.windowHalfY = this.height / 2;
    this.mouse = {
      x: null,
      y: null
    };

    /*
     * Setup renderers
     */
    this.webgl = new Webgl(this.camera, {
      container: this.container,
      width: this.width,
      height: this.height
    });

    this.css3d = new Css3d(this.camera, {
      container: this.container,
      width: this.width,
      height: this.height
    });

    // Create stages
  }

  init () {
    /*
    this.createStage(new THREE.Vector3(0, 0, 0), 'home');
    this.createStage(new THREE.Vector3(0, -500, 0), 'cases');
    this.createStage(new THREE.Vector3(0, -1000, 0), 'about');
    this.createStage(new THREE.Vector3(0, -1500, 0), 'contact');
    */

    this.webgl.init();
    this.css3d.init();
  }

  addObject (object, renderer) {
    if (renderer === 'webgl') {
      this.webgl.addObject(object);
    } else {
      this.css3d.addObject(object);
    }
  }

  animate () {
    this.webgl.animate();
    this.css3d.animate();
    this.animateCamera();
  }

  onWindowResize (width, height) {
    this.width = width;
    this.height = height;

    this.windowHalfX = this.width / 2;
    this.windowHalfY = this.height / 2;

    this.webgl.onWindowResize(width, height);
    this.css3d.onWindowResize(width, height);

    this.resizeCamera();
  }

  onMouseMove (mouseX, mouseY) {
    this.mouse.x = mouseX - this.windowHalfX;
    this.mouse.y = mouseY - this.windowHalfY;
  }

  /* ---------- HELPERS -------------- */

  animateCamera () {
    this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouse.y - this.camera.position.y + this.target.y) * 0.02;
    this.camera.lookAt(this.target);

    this.camera.position.y += Math.cos(this.cameraShakeY) / 10;
    this.cameraShakeY += 0.02;
  }

  resizeCamera () {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

};
