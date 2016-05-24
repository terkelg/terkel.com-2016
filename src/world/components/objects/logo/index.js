/**
 * Cube class
 */
class LogoObject extend THREE.Mesh {

  /**
   * Constructor function
   * @constructor
   */
  constructor () {
    super();

    // Manager - should be passed in constructor
    var manager = new THREE.LoadingManager();
    var loader = new THREE.ObjectLoader(manager);
    loader.load('models/logo-object.json', function (logo) {
        logo.scale.multiplyScalar(200);
        stage.add(logo);
    });
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    // this.material.update(time);
  }
};

export default LogoObject;
