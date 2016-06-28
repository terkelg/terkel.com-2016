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
      new THREE.Color(0xFFE88E),
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0xCFDDF9),
      new THREE.Color(0x3545E5)
    ];

    this.size = 70;
    this.geometry = [
      new THREE.BoxBufferGeometry(this.size, this.size, this.size),
      new THREE.ConeBufferGeometry(this.size - 20, this.size, 4, 0)
    ];

    for (var i = 0; i < 80; i++) {
      // Create Main Object
      let color = colors[randomInt(0, colors.length - 1)];
      let geometry = this.geometry[randomInt(0, this.geometry.length - 1)];
      let material = new THREE.LineBasicMaterial({color: color});
      let mesh = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), material);

      // Generate random position, rotation and scale
      let position = new THREE.Vector3(randomInt(-2200, 2200), randomInt(-3500, 3500), randomInt(-1500, 300));
      let rotation = new THREE.Vector3(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI);
      let randomScale = randomFloat(0.5, 1);

      // Set it
      mesh.position.set(position.x, position.y, position.z);
      mesh.rotation.set(rotation.x, rotation.y, rotation.z);
      mesh.scale.set(randomScale, randomScale, randomScale);
      this.add(mesh);

      /*
      // Create Fill Object
      let fill = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: 0xFFFFFF}));
      fill.position.set(position.x, position.y, position.z);
      fill.rotation.set(rotation.x, rotation.y, rotation.z);
      fill.scale.set(randomScale, randomScale, randomScale);
      this.add(fill);
      */
    }
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
