'use strict';

import THREE from 'three';

export default class Webgl {

  constructor (options = {}) {
    let defaultOptions = {
      'active': options.active || true,
      'width': options.width || window.innerWidth,
      'height': options.height || window.innerHeight,
      'debug': options.debug || false,
      'mobile': options.mobile || false,
      'container': options.container || document.body,
      'postprocessing': options.postprocessing || false,
      'backgroundOpacity': options.backgroundOpacity !== undefined ? options.backgroundOpacity : 1,
      'backgroundColor': options.backgroundColor || new THREE.Color(0xffffff),
      'css3DRenderer': options.css3DRenderer || true
    };

    // Implement optional css3DRenderer and mobile

    this.options = defaultOptions;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.composer = null;
    this.container = defaultOptions.container;
    this.mouse = {
      x: null,
      y: null
    };
    this.objects = [];   // Maybe delete this
    this.clones = [];   // What is this?
    this.clock = null;
    // Add my stages here too, together with position
  }

  init () {
    this.addListeners();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.options.width / this.options.height, 1, 1000);

    this.target = new THREE.Vector3();
    this.camera.lookAt(this.target);
    this.camera.position.set(0, 0, 800);

    // loop trough objects and add them?

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialise: true
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.options.width, this.options.height);
    this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundOpacity);
    this.renderer.shadowMap.enable = true;

    this.container.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 0, 800);

    if (this.options.debug) {
      console.log('Debug mode activated');
      // this.debugAxis( 200 );
      // add FPS
    }

    // IF GUI add it here

    this.clock = new THREE.Clock();
    this.tick = 0;

    if (this.options.postprocessing) {
      // this.addPostProcessing();
    }

    this.animate();
  }

  animate (ts) {
    this.tick += 0.1;
    // let delta = clock.getDelta();
    let elapsed = this.clock.getElapsedTime() * 10;

    if (this.options.active) {
      // call update on all objects, stages etc.
    }

    this.render(elapsed, ts);
  }

  render (elapsed, ts) {
    if (this.options.postprocessing) {
      this.postprocessing.render(elapsed, ts, this.tick);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  getRenderer () {
    if (this.options.postprocessing) {
      return this.postprocessing.getRenderer();
    } else {
      return this.renderer;
    }
  }

  addListeners () {
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  onWindowResize () {
    this.options.width = window.innerWidth;
    this.options.height = window.innerHeight;
    this.camera.aspect = this.options.width / this.options.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.options.width, this.options.height);
  }

}
