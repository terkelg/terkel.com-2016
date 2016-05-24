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
    this.manager = new THREE.LoadingManager();

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
    const light = new THREE.AmbientLight(0xffffff);
    this.add(light);

    // Add logo to home stage
    var loader = new THREE.ObjectLoader(this.manager);
    loader.load('/static/logo-object.json', (logo) => {
      logo.position.z = -1500;
      logo.scale.multiplyScalar(500);
      this.stages[0].add(logo);
    });

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
    // this.objectCloud.update(this.clock.time);

    this.postProcessing.update();
  };
}

export default Scene;
