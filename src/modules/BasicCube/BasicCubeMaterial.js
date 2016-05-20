/**
 * BasicCubeMaterial class
 */
class BasicCubeMaterial extends THREE.MeshLambertMaterial {

  /**
   * Constructor function
   * @param {Object} options Options
   */
  constructor (options) {
    super(options);

    this.color = new THREE.Color(0xff0000);
    this.wireframe = true;
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    // this.uniforms.time.value = time * 0.3;
  }
};

export default BasicCubeMaterial;
