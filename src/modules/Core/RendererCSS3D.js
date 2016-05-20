import Emitter from '../Helpers/Emitter';
import '../libs/renderers/CSS3DRenderer';
/**
 * Renderer CSS3D class
 */
class RendererCSS3D extends THREE.CSS3DRenderer {
  /**
   * Constructor function
   * @param {integer} width Width
   * @param {integer} height Height
   * @param {object} options Options
   * @constructor
   */
  constructor (container) {
    super();

    this.setSize(container.offsetWidth, container.offsetHeight);

    this.domElement.style.position = 'absolute';
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

export default RendererCSS3D;
