import DotsGeometry from './dotsGeometry';
import DotsMaterial from './dotsMaterial';

class Dots extends THREE.Points {
  /**
   * Constructor function
   * @constructor
   */
  constructor () {
    super(new DotsGeometry(), new DotsMaterial());

    // Manipulate vertices here!
    // https://youtu.be/dD9NgzLhbBM
    // this.geometry.vertices.forEach((e) => {});
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
