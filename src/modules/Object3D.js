import THREE from 'three';

let glslify = require('glslify');

export default class Object3D {

  constructor () {
    this.vertexShader = require('glslify!raw!./../shaders/vertex/simple.vert');
    this.fragmentShader = require('glslify!raw!./../shaders/fragment/simple.frag');

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0 }
      },
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      shading: THREE.FlatShading,
      wirefreame: true,
      wirefreameLineWidth: 1
    });

    this.geometry = new THREE.SphereGeometry(10, 32, 32);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  getMesh () {
    return this.mesh;
  }

  update (elapsed, ts, tick) {
    this.material.uniforms['time'].value = elapsed * 0.0008;
  }

}
