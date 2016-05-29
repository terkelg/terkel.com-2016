import randomInt from 'world/utils/random-int';

/**
 * DotsGeometry class
 */
class DotsGeometry extends THREE.Geometry {
  /**
   * Constructor function
   */
  constructor () {
    super();

    for (let i = 0; i < 500; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = randomInt(-1300, 1300);
      vertex.y = randomInt(-3000, 3000);
      vertex.z = randomInt(-800, 800);
      this.vertices.push(vertex);
    }

    // Merge geometry
    // http://www.jbernier.com/merging-geometries-in-three-js
  }
};

export default DotsGeometry;
