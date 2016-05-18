export default class Webgl {

  constructor (options = {}) {
    let defaultOptions = {
      'width': options.width || window.innerWidth,
      'height': options.height || window.innerHeight,
      'debug': options.debug || false,
      'container': options.container || document.body,

      'active': options.active || true,
      'postprocessing': options.postprocessing || false,
      'backgroundOpacity': options.backgroundOpacity !== undefined ? options.backgroundOpacity : 1,
      'backgroundColor': options.backgroundColor || new THREE.Color(0xffffff)
    };

    this.options = defaultOptions;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.composer = null;
    this.active = defaultOptions.active;
    this.container = defaultOptions.container;
    this.cameraShakeY = 0;
    this.mouse = {
      x: null,
      y: null
    };
    this.windowHalfX = defaultOptions.width / 2;
    this.windowHalfY = defaultOptions.height / 2;
    this.objects = [];   // Objects, like particles, skydome etc.
    this.stages = [];    // This is the real deal! Stages (Needs a interface. Update, Init, ) // Take arguments, elapsed, tick etc.
    this.clock = null;
    this.lookAt = new THREE.Vector3(0, 0, 0);
  }

  init () {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, this.options.width / this.options.height, 1, 10000); // 60?

    // Setup target
    this.target = new THREE.Vector3();
    this.camera.lookAt(this.target);
    this.camera.position.set(0, 0, 0);

    // Add world/scene related stuff
    for (let object of this.objects) {
      this.scene.add(object.getMesh());
    }

    // Add stages

    // TODO: Check device and optimize here
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialise: true
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.options.width, this.options.height);
    this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundOpacity);
    this.renderer.shadowMap.enable = true;

    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = 0;
    this.container.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 0, 1200);

    if (this.options.debug) {
      console.log('Debug mode activated');
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

    // If the canvas is active, render!
    if (this.options.active) {
      for (var object of this.objects) {
        object.update();
      }
    }

    // Camera update here
    this.camera.position.x += (this.mouse.x - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouse.y - this.camera.position.y + this.lookAt.y) * 0.02;
    this.camera.lookAt(this.lookAt);
    // TODO: If mobile, use deviceorientation

    // camera noise/shake
    this.camera.position.y += Math.cos(this.cameraShakeY) / 10;
    this.cameraShakeY += 0.02;

    this.render(elapsed, ts);
  }

  render (elapsed, ts) {
    if (this.options.postprocessing) {
      this.postprocessing.render(elapsed, ts, this.tick);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  addObject (object) {
    this.objects.push(object);
  }

  addObjectToScene (object) {
    this.objects.push(object);
    this.scene.add(object.getMesh());
  }

  getRenderer () {
    if (this.options.postprocessing) {
      return this.postprocessing.getRenderer();
    } else {
      return this.renderer;
    }
  }

  getObjects () {
    return this.objects;
  }

  getScene () {
    return this.scene;
  }

  getCamera () {
    return this.camera;
  }

  onWindowResize (width, height) {
    this.options.width = width;
    this.options.height = height;

    this.windowHalfX = this.options.width / 2;
    this.windowHalfY = this.options.height / 2;

    this.camera.aspect = this.options.width / this.options.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.options.width, this.options.height);
  }

  onMouseMove (mouseX, mouseY) {
    this.mouse.x = mouseX - this.windowHalfX;
    this.mouse.y = mouseY - this.windowHalfY;
  }
}
