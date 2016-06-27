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
    this.limitX = 2; // mouse divided by 2

    this.cameraShakeY = 0;
    this.windowHalfX = width / 2;
    this.windowHalfY = height / 2;
    this.mouse = {x: 0, y: 0};

    this.deviceOrientation = {};
    this.initialDeviceOrientation = null;
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
      this.deviceOrientationUpdate();
    } else {
      this.position.x += ((this.mouse.x / this.limitX) - this.position.x) * 0.05;
      this.position.y += (-this.mouse.y - this.position.y + this.targetPoint.y) * 0.01;
    }

    this.lookAt(this.targetPoint);

    this.position.y += Math.cos(this.cameraShakeY) / 4;
    this.cameraShakeY += 0.022;
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
    TweenLite.to(this.targetPoint, 1, {
      x: vec3.x,
      y: vec3.y,
      z: vec3.z
    });

    TweenLite.to(this.position, 3, {
      x: vec3.x,
      y: vec3.y,
      z: vec3.z + this.distance,
      onUpdate: () => {
        TweenLite.to(this.position, 0.8, {
          x: (this.mouse.x / this.limitX) - this.position.x * 0.05
        });
      },
      onComplete: () => {
        // Update initial orientation
        this.updateInitialOrientation();
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
   * TODO: Fix this orientation change, and improve overall mobile 3d world
   * @return {void}
   */
  deviceOrientationUpdate () {
    var betaTilt = this.initialDeviceOrientation.beta - this.deviceOrientation.beta;
    var gammaTilt = this.initialDeviceOrientation.gamma - this.deviceOrientation.gamma;

    if (gammaTilt < 45 && gammaTilt > -45) {
      this.position.x += ((gammaTilt * 4) - this.position.x) * 0.1;
    }

    if (betaTilt < 45 && betaTilt > -45) {
      this.position.y += ((betaTilt * 4) - this.position.y + this.targetPoint.y) * 0.1;
    }
  }

  /**
   * onDeviceOrientationChangeEvent
   * @return {void}
   */
  onDeviceOrientationChangeEvent (event) {
    if (!this.initialDeviceOrientation) {
      this.initialDeviceOrientation = event;
    }
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
   * updateInitialOrientation
   * Set the initial orientation - throttle
   * @return {Void}
   */
  updateInitialOrientation () {
    this.initialDeviceOrientation = this.deviceOrientation;
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
