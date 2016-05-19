let glslify = require('glslify');

export default class Object3D {

  constructor () {
    this.type = 'object';
    this.renderer = 'webgl';

    this.vertexShader = glslify('./shaders/vertex/simple.vert');
    this.fragmentShader = glslify('./shaders/fragment/simple.frag');

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0 }
      },
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      shading: THREE.FlatShading
    });

    this.geometry = new THREE.SphereGeometry(10, 32, 32);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  getMesh () {
    return this.mesh;
  }

  getType () {
    return this.type;
  }

  update (elapsed, ts, tick) {
    this.material.uniforms['time'].value = elapsed * 0.0008;
  }

}
