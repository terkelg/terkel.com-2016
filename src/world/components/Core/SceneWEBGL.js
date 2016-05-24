import BasicCube from '../Objects/BasicCube';
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

    this.add(this.stages[0].add(new BasicCube()));
    this.add(this.stages[1].add(new BasicCube()));
    this.add(this.stages[2].add(new BasicCube()));
    this.add(this.stages[3].add(new BasicCube()));
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.02;

    // this.cube.update(this.clock.time);

    this.postProcessing.update();
  };
}

export default Scene;
