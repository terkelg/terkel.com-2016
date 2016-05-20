import Emitter from '../Helpers/Emitter';

/**
 * Renderer WEBGL class
 */
class RendererWEBGL extends THREE.WebGLRenderer {
  /**
   * Constructor function
   * @param {integer} width Width
   * @param {integer} height Height
   * @param {object} options Options
   * @constructor
   */
  constructor (container, options = { antialias: true, alpha: true }) {
    super(options);

    this.setSize(container.offsetWidth, container.offsetHeight);
    this.setPixelRatio(window.devicePixelRatio);
    this.setClearColor(0x0a0a0a, 1.0);

    this.domElement.style.position = 'absoulte';
    this.domElement.style.top = 0;
    container.appendChild(this.domElement);

    Emitter.on('resize', this.resize.bind(this));
  }

  /**
   * Resize function
   * @param {integer} width Width
   * @param {integer} height Height
   * @return {void}
   */
  resize (width, height) {
    this.setSize(width, height);
  }
};

export default RendererWEBGL;
