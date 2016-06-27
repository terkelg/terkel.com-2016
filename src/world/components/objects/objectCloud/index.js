import randomInt from 'world/utils/random-int';
import randomFloat from 'world/utils/random-float';

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
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0xCFDDF9)
    ];

    this.geometry = [
      new THREE.BoxBufferGeometry(50, 50, 50),
      new THREE.ConeBufferGeometry(50, 50, 3, 0)
      // new THREE.TetrahedronGeometry(35)
    ];

    for (var i = 0; i < 120; i++) {
      var object = new THREE.Mesh(this.geometry[randomInt(0, this.geometry.length - 1)], new THREE.MeshLambertMaterial({
        color: colors[randomInt(0, colors.length - 1)],
        wireframe: true
      }));
      object.position.x = randomInt(-2200, 2200);
      object.position.y = randomInt(-3500, 3500);
      object.position.z = randomInt(-1500, 300);
      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;
      object.scale.x = randomFloat(0.5, 1);
      object.scale.y = randomFloat(0.5, 1);
      object.scale.z = randomFloat(0.5, 1);
      this.add(object);
    }

    // Math.random() + 0.5

    // TODO: Merge objects
    // http://www.jbernier.com/merging-geometries-in-three-js
    // Add update "rotation" function

    // TODO: Add another style of box later
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
