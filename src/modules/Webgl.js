export default class Webgl {

  constructor (camera, options = {}) {
    let defaultOptions = {
      'width': options.width || window.innerWidth,
      'height': options.height || window.innerHeight,
      'debug': options.debug || true,
      'container': options.container || document.body,

      'active': options.active || true,
      'postprocessing': options.postprocessing || false,
      'backgroundOpacity': options.backgroundOpacity !== undefined ? options.backgroundOpacity : 1,
      'backgroundColor': options.backgroundColor || new THREE.Color(0xffffff)
    };

    this.options = defaultOptions;
    this.camera = camera;
    this.scene = null;
    this.renderer = null;
    this.composer = null;
    this.active = defaultOptions.active;
    this.container = defaultOptions.container;
    this.objects = [];   // Objects, like particles, skydome etc.
    this.clock = null;
  }

  init () {
    this.scene = new THREE.Scene();

    // Add world/scene related stuff
    for (let object of this.objects) {
      this.scene.add(object.getMesh());
    }

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

    this.clock = new THREE.Clock();
    this.tick = 0;

    if (this.options.postprocessing) {
      // this.addPostProcessing();
    }
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

  onWindowResize (width, height) {
    this.renderer.setSize(width, height);
  }

  onMouseMove (mouseX, mouseY) {}
}
