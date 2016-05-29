/**
 * DotsMaterial class
 */
class DotsMaterial extends THREE.PointsMaterial {

  /**
   * Constructor function
   * @param {Object} options Options
   */
  constructor () {
    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const sprite1 = textureLoader.load('/static/particles/particles.png');
    const sprite2 = textureLoader.load('/static/particles/particles2.png');
    const sprite3 = textureLoader.load('/static/particles/particles3.png');

    const parameters = [
      [[1.0, 0.2, 0.5], sprite1, 20],
      [[0.95, 0.1, 0.5], sprite2, 15],
      [[0.90, 0.05, 0.5], sprite3, 10]
    ];

    super({
      // color: parameters[1][0],
      map: parameters[1][1],
      size: parameters[1][2],
      fog: true,
      transparent: true
    });
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {}

  /**
   * Generate Sprite
   * @return {canvas} canvas - Use in new THREE.CanvasTexture(this.generateSprite())
   *                           together with blending THREE.MultiplyBlending
   */
  generateSprite () {
    var canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    var context = canvas.getContext('2d');
    var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
    gradient.addColorStop(0, 'rgba(0,0,255,1)');
    gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,200,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,1)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
  }
};

export default DotsMaterial;
