/**
 * Scene class
 */
class Scene extends THREE.Scene {
  /**
   * Constructor function
   * @param {Renderer}      Renderer - Renderer instance
   * @param {Camera}        Camera   - Camera instance
   * @param {domElement[]}  Array    - Dom elements to load into stages
   */
  constructor (Renderer, Camera, stages) {
    super();

    this.renderer = Renderer;
    this.camera = Camera;
    this.stages = stages;

    this.createScene();
  }

  /**
   * CreateScene function
   * @return {void}
   */
  createScene () {
    // Create stages
    this.stages.forEach((stage) => {
      stage.addDOMComponent();
      this.add(stage);
    });
  }

  /**
   * Render function
   * @return {void}
   */
  render () {
    this.renderer.render(this, this.camera);
  };
}

export default Scene;
