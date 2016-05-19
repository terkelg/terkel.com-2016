export default class Stage {

  constructor (vec3) {
    this.group = new THREE.Group();
    this.group.position.set(vec3);
    this.position = vec3;
    this.objects = [];
    this.type = 'stage';

    console.log('Lets go!');
  }

  addObject (object) {
    this.objects.push(object);
    this.group.add(object);
  }

  update () {
    for (var object of this.objects) {
      object.update();
    }
  }

  getPosition () {
    return this.position;
  }

  getType () {
    return this.type;
  }

  getGroup () {
    return this.group;
  }

}
