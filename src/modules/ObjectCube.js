export default class ObjectCube {

  constructor (options = {}) {
    let defaultOptions = {
      'size': options.size || 80,
      'position': options.position || new THREE.Vector3(0, 0, 0),
      'wireframe': options.wireframe || true
    };

    this.type = 'object';
    this.renderer = 'webgl';

    this.options = defaultOptions;
    this.position = options.position;

    this.material = new THREE.MeshLambertMaterial({ color: 0xf25346, wireframe: this.options.wireframe });
    this.geometry = new THREE.BoxGeometry(this.options.size, this.options.size, this.options.size);

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0);
  }

  getType () {
    return this.type;
  }

  getMesh () {
    return this.mesh;
  }

  update () {
    // this.mesh.position.x += 0.8;
  }

}
