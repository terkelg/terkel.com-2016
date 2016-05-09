import THREE from 'three';

export default class ObjectCube {

  constructor (options = {}) {
    let defaultOptions = {
      'size': options.size || 80,
      'position': options.position || new THREE.Vector3(0, 0, 0),
      'wireframe': options.wireframe || true
    };

    this.options = defaultOptions;
    this.position = options.position;

    this.material = new THREE.MeshLambertMaterial({ color: 0xf25346, wireframe: this.options.wireframe });
    this.geometry = new THREE.BoxGeometry(this.options.size, this.options.size, this.options.size);

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0);
  }

  getMesh () {
    return this.mesh;
  }

  update () {

  }

}
