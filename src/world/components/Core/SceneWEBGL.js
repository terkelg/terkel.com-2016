// import BasicCube from '../Objects/BasicCube';
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
    // console.log(this.stages);
    this.postProcessing = new PostProcessing(this, this.renderer, this.camera);

    this.createScene();
  }

  /**
   * CreateScene function
   * @return {void}
   */
  createScene () {
    this.stages.forEach((stage) => {
      // this.add(stage.clone());
    });

    const geometry = new THREE.BoxGeometry(80, 80, 80);
    const material = new THREE.MeshBasicMaterial({color: 0x1E1E20});
    const cube = new THREE.Mesh(geometry, material);

    // this.add(this.stages[0].add(new BasicCube()));
    this.add(cube);
    // this.stages[1].add(cube);
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
