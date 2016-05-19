import './libs/renderers/CSS3DRenderer';

export default class CSS3D {

  constructor (camera, options = {}) {
    let defaultOptions = {
      'width': options.width || window.innerWidth,
      'height': options.height || window.innerHeight,
      'container': options.container || document.body,
      'active': options.active || true
    };

    // options
    this.options = defaultOptions;
    this.camera = camera;
    this.scene = null;
    this.renderer = null;
    this.container = defaultOptions.container;
    this.active = defaultOptions.active;
    this.objects = []; // This is the Dom objects
  }

  init () {
    this.scene = new THREE.Scene();

    // Add objects
    for (let object of this.objects) {
      console.log(object);
      this.scene.add(object);
    }

    this.renderer = new THREE.CSS3DRenderer();
    this.renderer.setSize(this.options.width, this.options.height);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = 0;

    this.container.appendChild(this.renderer.domElement);
  }

  animate () {
    // If active - render loop here
    this.render();
  }

  addObject (object) {
    this.objects.push(object);
  }

  addObjectToScene (object) {
    this.objects.push(object);
    this.scene.add(object); // TODO: object.getMesh() wrap in my own object
  }

  render () {
    this.renderer.render(this.scene, this.camera);
  }

  getRenderer () {
    return this.renderer;
  }

  getObjects () {
    return this.objects;
  }

  getScene () {
    return this.scene;
  }

  onWindowResize (width, height) {
    console.log('css3d resize called');
    this.options.width = width;
    this.options.height = height;

    this.renderer.setSize(this.options.width, this.options.height);
  }
};
