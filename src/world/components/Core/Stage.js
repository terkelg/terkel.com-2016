class Stage extends THREE.Group {
  /**
   * Constructor function
   * @param {Vector3} position - Position in world
   * @param {domElement} el - Dom element to place in stage
   * @constructor
   */
  constructor (position, el) {
    super();
    this.position.set(position.x, position.y, position.z);
    this.component = el || false;
  }

  /**
   * Vue Component function
   */
  addDOMComponent () {
    if (this.component) {
      this.add(new THREE.CSS3DObject(this.component));
    }
  }
};

export default Stage;
