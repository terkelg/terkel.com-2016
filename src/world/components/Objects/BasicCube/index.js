import BasicCubeGeometry from './basicCubeGeometry';
import BasicCubeMaterial from './basicCubeMaterial';

/**
 * Cube class
 */
class BasicCube extends THREE.Mesh {

  /**
   * Constructor function
   */
  constructor () {
    super(new BasicCubeGeometry(), new BasicCubeMaterial());
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    this.material.update(time);
  }
};

export default BasicCube;
