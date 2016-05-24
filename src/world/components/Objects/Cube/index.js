import CubeGeometry from './cubeGeometry';
import CubeMaterial from './cubeMaterial';

/**
 * Cube class
 */
class Cube extends THREE.Mesh {

  /**
   * Constructor function
   */
  constructor () {
    super(new CubeGeometry(), new CubeMaterial({ wireframe: true }));
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    this.material.update(time);
  }
};

export default Cube;
