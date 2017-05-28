function MovingObject(opts) {
  this.pos = opts.pos;
  this.vel = opts.vel;
  this.radius = opts.radius;
  this.color = opts.color;
}
var test = new MovingObject({pos: [10, 10], vel: [5, 5], radius: 100, color: '#ff0'});
console.log(test)
