import Cube from 'modules/objectCube';

export default class Stage {

  constructor () {
    this.position = new THREE.Vector3(340, 4, 4);
    this.group = new THREE.Group();
    this.group.position.set(this.position);
    this.type = 'stage';

    this.group.add(new Cube().getMesh());
    console.log(this.group);
  }

  getStage () {
    return this.group;
  }

  update () {
    // Called in update
    console.log('update');
  }
}
