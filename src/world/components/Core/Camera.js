/* eslint-disable */

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

    this.average = {
      alpha: [],
      gamma: [],
      beta: []
    };
    this.latestTilt = {
      alpha: null,
      gamma: null,
      beta: null
    };
    this.originals = {
      x: 0,
      y: 2000,
      z: 1000
    };
    this.diff = {
      x: 50,
      y: 100,
      z: 500
    };
    this.calculateCoord = function(name, coord) {
      var temp = this.average[name].reduce((a, b) => a + b) / this.average[name].length;
      var pos = (temp * this.position[coord]) + this.position[coord];
      if (pos > this.originals[coord] + this.diff[coord]) pos = this.originals[coord] + this.diff[coord];
      if (pos < this.originals[coord] - this.diff[coord]) pos = this.originals[coord] - this.diff[coord];
      
      return pos;
    };    

    window.requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.msRequestAnimationFrame;

    if (window.DeviceOrientationEvent) {
      console.log('use device');
      window.addEventListener('deviceorientation', this.deviceOrientation.bind(this), false);
    }

    Emitter.on('mousemove', this.mouseMove.bind(this));
    Emitter.on('resize', this.resize.bind(this));
  }

  /**
   * Update function
   * @param {number} delta - delta
   * @return {void}
   */
  update (delta) {
    console.log(this.position);
    if (this.latestTilt.gamma || this.latestTilt.alpha || this.latestTilt.beta) {
      this.position.x = this.latestTilt.gamma;
      this.position.y = this.latestTilt.beta;
//      this.position.z = this.latestTilt.alpha;
    } else {
      this.position.x += (this.mouse.x - this.position.x) * 0.025;
      this.position.y += (-this.mouse.y - this.position.y + this.targetPoint.y) * 0.01;
    }

    this.lookAt(this.targetPoint);

    /*
    this.position.y += Math.cos(this.cameraShakeY) / 10;
    this.cameraShakeY += 0.02;
    */
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
   * Mobile Acceleorameter
   */
  deviceOrientation (e) {
    if (this.average.gamma.length > 8) {
      this.average.gamma.shift();
    }

    if (this.average.alpha.length > 8) {
      this.average.alpha.shift();
    }

    if (this.average.beta.length > 8) {
      this.average.beta.shift();
    }

    this.average.gamma.push(e.gamma / 100);
    this.average.alpha.push(e.alpha / 1000);
    this.average.beta.push(e.beta / 1000);
    
    this.latestTilt.gamma = this.calculateCoord('gamma', 'x');
    this.latestTilt.alpha = this.calculateCoord('alpha', 'z');
    this.latestTilt.beta = this.calculateCoord('beta', 'y');

//    this.average.alpha.push(e.alpha / 1000);
//    var alpha = this.average.alpha.reduce((a, b) => a + b) / this.average.alpha.length;
//    var posX = (alpha * this.position.x) - this.position.x;
//    if (posX > this.original.x * this.max) posX = this.original.x * this.max;
//    if (posX < this.original.x * -this.max) posX = this.original.x * -this.max;
//    this.latestTilt.alpha = posX;
//
//    this.average.beta.push(e.beta / 1000);
//    var beta = this.average.beta.reduce((a, b) => a + b) / this.average.beta.length;
//    var posY = (beta * this.position.y) - this.position.y;
//    if (posY > this.original.y.value * this.originalmax) posY = this.original.y * this.max;
//    if (posY < this.original.y * -this.max) posY = this.original.y * -this.max;
//    this.latestTilt.beta = posY;
  }
};

export default Camera;
