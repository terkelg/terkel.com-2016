/**
 * BasicCubeMaterial class
 */
class BasicCubeMaterial extends THREE.MeshLambertMaterial {

  /**
   * Constructor function
   * @param {Object} options Options
   */
  constructor () {
    super({color: 0x00ff00});
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
