import Clock from '../Helpers/Clock';
// import BasicCube from '../BasicCube';

/**
 * Scene class
 */
class Scene extends THREE.Scene {
  /**
   * Constructor function
   * @param {Renderer} Renderer Renderer instance
   * @param {Camera}   Camera   Camera instance
   */
  constructor (Renderer, Camera) {
    super();

    this.renderer = Renderer;
    this.camera = Camera;
    // this.postProcessing = new PostProcessing( this, this.renderer, this.camera );

    this.clock = new Clock();

    this.createScene();
  }

  /**
   * CreateScene function
   */
  createScene () {
    // this.cube = new BasicCube();
    var geometry = new THREE.BoxGeometry(20, 20, 20);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(geometry, material);
    this.add(this.cube);

    // this.render();
    // this.raf = raf( ::this.render ).start();
  }

  /**
   * Render function
   */
  render () {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.02;

    // this.cube.update(this.clock.time);

    // this.postProcessing.update(); <- Same as renderer.render
    this.camera.update(this.clock.delta);
  };
}

export default Scene;
