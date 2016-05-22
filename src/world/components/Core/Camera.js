import Emitter from '../Helpers/Emitter';
/*
 * Camera class
 */
class Camera extends THREE.PerspectiveCamera {
  /**
   * @constructor
   * @param {integer}
   * @param {integer}
   * @param {object} [options] - Camera options
   */
  constructor (width, height, options = {}) {
    const fov = options.fov || 60;
    const aspect = options.aspect || width / height;
    const near = options.near || 1;
    const far = options.far || 10000;

    super(fov, aspect, near, far);

    this.distance = 1200;
    this.targetPoint = new THREE.Vector3(0, 0, 0);

    this.cameraShakeY = 0;
    this.windowHalfX = width / 2;
    this.windowHalfY = height / 2;
    this.mouse = {x: 0, y: 0};

    Emitter.on('resize', this.resize.bind(this));
    Emitter.on('mousemove', this.mouseMove.bind(this));
  }

  /**
   * Update function
   * @param {number} delta - delta
   * @return {void}
   */
  update (delta) {
    this.position.x += (this.mouse.x - this.position.x) * 0.05;
    this.position.y += (-this.mouse.y - this.position.y + this.targetPoint.y) * 0.02;
    this.lookAt(this.targetPoint);

    this.position.y += Math.cos(this.cameraShakeY) / 10;
    this.cameraShakeY += 0.02;
  }

  /**
   * Resize function
   * @param {integer} width  - Width
   * @param {integer} height - Height
   * @return {void}
   */
  resize (width, height) {
    this.windowHalfX = width / 2;
    this.windowHalfY = height / 2;
    this.aspect = width / height;
    this.updateProjectionMatrix();
  }

  /**
   * Mouse Move
   * @param {integer} x - Mouse X
   * @param {integer} y - Mouse Y
   * @return {void}
   */
  mouseMove (x, y) {
    this.mouse = {
      x: x - this.windowHalfX,
      y: y - this.windowHalfY
    };
  }

  /**
   * Move To Position
   * @param {Vector3} vec3 - Vector3 Position
   * @return {void}
   */
  moveTo (vec3) {
    // Target - always center in Stage
    TweenLite.to(this.targetPoint, 2, {
      x: vec3.x,
      y: vec3.y,
      z: vec3.z
    });

    TweenLite.to(this.position, 4, {
      x: vec3.x,
      y: vec3.y,
      z: vec3.z + this.distance,
      onUpdate: () => {
        TweenLite.to(this.position, 0.8, {
          x: this.mouse.x - this.position.x * 0.05
        });
      }
    });
  }
};

export default Camera;
