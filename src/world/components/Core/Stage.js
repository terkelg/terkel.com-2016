import clone from 'lodash.clone';

class Stage extends THREE.Group {
  /**
   * Constructor function
   * @param {String} name      - Stage name
   * @param {Vector3} position - Position in world
   * @constructor
   */
  constructor (name, position) {
    super();
    this.name = name;
    this.position.set(position.x, position.y, position.z);
  }

  /**
   * Clone Group
   * @return {Stage}
   */
  clone () {
    return clone(this);
  }
};

export default Stage;
