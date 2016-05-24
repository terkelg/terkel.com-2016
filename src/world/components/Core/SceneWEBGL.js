import ObjectCloud from '../objects/objectCloud';
import PostProcessing from '../../postProcessing/postProcessing';

/**
 * Scene class
 */
class Scene extends THREE.Scene {
  /**
   * Constructor function
   * @param {Renderer} Renderer - Renderer instance
   * @param {Camera}   Camera   - Camera instance
   * @param {Clock}    Clock    - Clock instance
   * @param {Stages[]} Stages   - Stages
   */
  constructor (Renderer, Camera, Clock, Stages) {
    super();

    this.renderer = Renderer;
    this.camera = Camera;
    this.clock = Clock;
    this.stages = Stages;
    this.postProcessing = new PostProcessing(this, this.renderer, this.camera);

    this.createScene();
  }

  /**
   * CreateScene function
   * @return {void}
   */
  createScene () {
    this.stages.forEach((stage) => {
      this.add(stage.clone());
    });

    // Fog
    this.fog = new THREE.Fog(0xffffff, 1300, 3500);

    // Add lights
    var light = new THREE.AmbientLight(0xffffff);
    this.add(light);

    // Add boxes to World
    this.objectCloud = new ObjectCloud();
    this.objectCloud.z = -1000;
    this.add(this.objectCloud);
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    this.objectCloud.update();
    // this.cube.update(this.clock.time);

    this.postProcessing.update();
  };
}

export default Scene;
