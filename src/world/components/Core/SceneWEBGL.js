import ObjectCloud from '../objects/objectCloud';
import Dots from '../objects/dots';
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
    const ambient = new THREE.AmbientLight(0xffffff);
    this.add(ambient);

    // Add dots
    this.dots = new Dots();
    this.position.z = -600;
    this.position.y = 0;
    this.add(this.dots);

    // Add boxes to World
    this.objectCloud = new ObjectCloud();
    this.objectCloud.z = -1000;
    this.stages[0].add(this.objectCloud);

    // Add logo to home stage
    var loader = new THREE.ObjectLoader(this.manager);
    loader.load('/static/logo-object.json', (logo) => {
      logo.position.z = -1500;
      logo.scale.multiplyScalar(500);
      this.stages[0].add(logo);
    });

    /*
    var bbox = new THREE.BoundingBoxHelper(this.dots, 0xff0000);
    bbox.update();
    this.add(bbox);
    */

    // Spot light
    /*
    const spot = new THREE.DirectionalLight(0xdfebff, 1.75); // 0xdfebff
    spot.position.set(0, 0, -3000);
    spot.position.multiplyScalar(1.3);
    spot.intensity = 1;
    spot.castShadow = true;
    spot.shadowMapWidth = 1000;
    spot.shadowMapHeight = 1000;
    this.add(spot); */

    // Shadow light
    /*
    const shadowlight = new THREE.DirectionalLight(0xffffff, 0.3);
    shadowlight.position.set(1000, 300, 2000);
    shadowlight.castShadow = true;
    shadowlight.shadowDarkness = 0.04;
    this.add(shadowlight);
    */
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    // this.objectCloud.update(this.clock.time);
    // this.dots.update(this.clock.time);

    this.postProcessing.update();
  };
}

export default Scene;
