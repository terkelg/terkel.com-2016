import { Composer } from '@superguigui/wagner';
import Emitter from '../components/helpers/emitter';

/**
 * EffectComposer class
 */
class EffectComposer extends Composer {
  /**
   * Constructor function
   * @param  {object} renderer - Renderer
   * @param  {object} options  - Options
   * @return {void}
   */
  constructor (renderer, options) {
    super(renderer, options);

    this.setSize(renderer.getSize().width * window.devicePixelRatio, renderer.getSize().height * window.devicePixelRatio);

    Emitter.on('resize', this.resize.bind(this));
  }

  /**
   * Resize function
   * @param  {integer} width  - Width
   * @param  {integer} height - Height
   * @return {void}
   */
  resize (width, height) {
    this.setSize(width, height);
  }
};

export default EffectComposer;
