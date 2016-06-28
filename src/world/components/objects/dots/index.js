import DotsGeometry from './dotsGeometry';
import DotsMaterial from './dotsMaterial';

class Dots extends THREE.Object3D {
  /**
   * Constructor function
   * @constructor
   */
  constructor () {
    super();

    for (var i = 0; i < 3; i++) {
      this.add(new THREE.Points(new DotsGeometry(), new DotsMaterial(i)));
    }
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    // Kald sub-objecters update here
  }
};

export default Dots;
