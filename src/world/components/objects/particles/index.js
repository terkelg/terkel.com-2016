// import CloudGeometry from './cloudGeometry';

/**
 * Object Cloud Class
 */
class ObjectCloud extends THREE.Mesh {

  /**
   * Constructor function
   * @constructor
   */
  constructor () {

    this.meshes = [];
    this.geometry = new THREE.Geometry();

    // Generate objects
    const geo = new THREE.BoxBufferGeometry(25, 25, 25);
    for (var i = 0; i < 100; i++) {
      var mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
        wireframe: true
      }));
      mesh.position.x = Math.random() * 2000 - 1000;
      mesh.position.y = Math.random() * 2000 - 1000;
      mesh.position.z = Math.random() * 2000 - 1000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      mesh.scale.x = Math.random() + 0.5;
      mesh.scale.y = Math.random() + 0.5;
      mesh.scale.z = Math.random() + 0.5;
      this.meshes.push(mesh);
    }

    for (var i = 0; i < meshes.length; i++) {
      meshes[i].updateMatrix();
      this.geometry.merge(this.meshes[i].geometry, this.meshes[i].matrix);
    }

    console.log(this.geometry);
    super(this.geometry);
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    this.material.update(time);
  }
};
