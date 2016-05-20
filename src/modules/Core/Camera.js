import Emitter from '../Helpers/Emitter';
/*
 * Camera class
 */
class Camera extends THREE.PerspectiveCamera {
  /**
   * Constructor
   */
  constructor (fov, aspect, near, far) {
    super(fov, aspect, near, far);
    Emitter.on('resize', this.resize.bind(this));
  }

  /**
   * Update function
   * @param {number} delta delta
   */
  update (delta) {}

  /**
   * Resize function
   * @param {integer} width Width
   * @param {integer} height Height
   * @return {void}
   */
  resize (width, height) {
    this.aspect = width / height;
    this.updateProjectionMatrix();
  }

  /**
   * Mouse Move
   * @param {integer} mouseX Mouse X
   * @param {integer} mouseX Mouse Y
   * @return {void}
   */
  mouse (mouseX, mouseY) {}
};

export default Camera;
