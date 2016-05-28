import Emitter from '../helpers/emitter';

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

    this.distance = 1000;
    this.targetPoint = new THREE.Vector3(0, 0, 0);

    this.cameraShakeY = 0;
    this.windowHalfX = width / 2;
    this.windowHalfY = height / 2;
    this.mouse = {x: 0, y: 0};

    this.deviceOrientation = {};
    this.screenOrientation = 0;

    this.onScreenOrientationChangeEvent();
    window.addEventListener('orientationchange', this.onScreenOrientationChangeEvent.bind(this), false);
    window.addEventListener('deviceorientation', this.onDeviceOrientationChangeEvent.bind(this), false);

    Emitter.on('mousemove', this.mouseMove.bind(this));
    Emitter.on('resize', this.resize.bind(this));
  }

  /**
   * Update function
   * @param {number} delta - delta
   * @return {void}
   */
  update (delta) {
    if (this.deviceOrientation.alpha > 0 || this.deviceOrientation.beta > 0 || this.deviceOrientation.gamma > 0) {
      console.log('Device use');
      this.deviceOrientationUpdate();
    } else {
      this.position.x += (this.mouse.x - this.position.x) * 0.025;
      this.position.y += (-this.mouse.y - this.position.y + this.targetPoint.y) * 0.01;
    }

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

    TweenLite.to(this.position, 4.5, {
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

  /**
   * Start animation
   * @param {Vector3} startpos - Start position
   * @param {Vector3} endpos   - End position
   * @return {Void}
   */
  start (startpos, endpos) {
    // camera is always {ditance} away from target
    this.targetPoint.set(startpos.x, startpos.y, startpos.z);
    this.position.set(startpos.x, startpos.y, startpos.z + this.distance);

    TweenLite.to(this.targetPoint, 3, {
      x: endpos.x,
      y: endpos.y,
      z: endpos.z
    });

    TweenLite.to(this.position, 3, {
      x: endpos.x,
      y: endpos.y,
      z: endpos.z + this.distance
    });
  }

  /**
   * DeviceOrientationUpdate
   * TODO: This works like shit.
   * @return {void}
   */
  deviceOrientationUpdate () {
    // var alpha = this.deviceOrientation.alpha ? THREE.Math.degToRad(this.deviceOrientation.alpha) : 0; // Z
    var beta = this.deviceOrientation.beta ? THREE.Math.degToRad(this.deviceOrientation.beta) : 0; // X'
    var gamma = this.deviceOrientation.gamma ? THREE.Math.degToRad(this.deviceOrientation.gamma) : 0; // Y''
    // var orient = this.screenOrientation ? THREE.Math.degToRad(this.screenOrientation) : 0; // O

    if (this.readDeviceOrientation() === 'portrait') {
      this.position.x += (gamma * 220) - this.position.x;
      this.position.y += (-beta * 220) - this.position.y + this.targetPoint.y;
    } else if (this.readDeviceOrientation() === 'upside-down') {
      this.position.x += (-gamma * 220) - this.position.x;
      this.position.y += (beta * 220) - this.position.y + this.targetPoint.y;
    } else if (this.readDeviceOrientation() === 'clockwise') {
      this.position.x += (beta * 220) - this.position.x;
      this.position.y += (-gamma * 220) - this.position.y + this.targetPoint.y;
    } else if (this.readDeviceOrientation() === 'counterclockwise') {
      this.position.x += (-beta * 220) - this.position.x;
      this.position.y += (gamma * 220) - this.position.y + this.targetPoint.y;
    }
  }

  /**
   * onDeviceOrientationChangeEvent
   * @return {void}
   */
  onDeviceOrientationChangeEvent (event) {
    this.deviceOrientation = event;
  }

  /**
   * onScreenOrientationChangeEvent
   * @return {void}
   */
  onScreenOrientationChangeEvent () {
    this.screenOrientation = window.orientation || 0;
  }

  /**
   * Detect device rotation
   * @return {string} orientation - Device orientation string
   */
  readDeviceOrientation () {
    let orientation;
    switch (window.orientation) {
      case 0:
        orientation = 'portrait';
        break;
      case 180:
        orientation = 'upside-down';
        break;
      case -90:
        orientation = 'clockwise';
        break;
      case 90:
        orientation = 'counterclockwise';
        break;
    }
    return orientation;
  }
};

export default Camera;
