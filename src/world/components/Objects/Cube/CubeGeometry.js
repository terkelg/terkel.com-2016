import THREE from 'three';

/**
 * CubeGeometry class
 */
class CubeGeometry extends THREE.BoxGeometry {
  /**
   * Constructor function
   */
  constructor () {
    super(60, 60, 60);
  }
};

export default CubeGeometry;
