import BasicCube from '../BasicCube';
import PostProcessing from '../PostProcessing/PostProcessing';

/**
 * Scene class
 */
class Scene extends THREE.Scene {
  /**
   * Constructor function
   * @param {Renderer} Renderer Renderer instance
   * @param {Camera}   Camera   Camera instance
   * @param {Clock}    Clock    Clock instance
   */
  constructor (Renderer, Camera, Clock) {
    super();

    this.renderer = Renderer;
    this.camera = Camera;
    this.clock = Clock;
    this.postProcessing = new PostProcessing(this, this.renderer, this.camera);

    this.createScene();
  }

  /**
   * CreateScene function
   */
  createScene () {
    this.cube = new BasicCube();
    this.add(this.cube);

    // Lights, Particles

    this.render();
  }

  /**
   * Render function
   */
  render () {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.02;

    // this.cube.update(this.clock.time);

    this.postProcessing.update();
  };
}

export default Scene;
