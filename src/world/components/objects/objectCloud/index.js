import randomInt from 'world/utils/random-int';

/**
 * Object Cloud class
 */
class ObjectCloud extends THREE.Object3D {

  /**
   * Constructor function
   */
  constructor () {
    super();

    const colors = [
      new THREE.Color(0xFFE88E),
      new THREE.Color(0xFFE88E),
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0x00FFBE)
    ];

    this.geometry = [
      new THREE.BoxBufferGeometry(30, 30, 30),
      new THREE.TetrahedronGeometry(30, 0)
    ];

    for (var i = 0; i < 80; i++) {
      var object = new THREE.Mesh(this.geometry[randomInt(0, this.geometry.length)], new THREE.MeshLambertMaterial({
        color: colors[randomInt(0, colors.length - 1)],
        wireframe: true
      }));
      object.position.x = randomInt(-2200, 2200);
      object.position.y = randomInt(-3000, 3000);
      object.position.z = randomInt(-2000, 200);
      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;
      object.scale.x = Math.random() + 0.5;
      object.scale.y = Math.random() + 0.5;
      object.scale.z = Math.random() + 0.5;
      this.add(object);
    }

    // TODO: Merge objects
    // http://www.jbernier.com/merging-geometries-in-three-js
    // Add update "rotation" function
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    this.rotation.y += 0.0002;
    this.rotation.x += 0.0002;
  }
};

export default ObjectCloud;
