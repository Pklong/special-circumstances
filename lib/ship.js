(function(root) {
  root.asteroids = root.asteroids || {};

  function Ship(opts) {
    var defaults = {
      pos: opts.pos,
      game: opts.game,
      vel: [0, 0],
      color: Ship.COLOR,
      radius: Ship.RADIUS,
    }
    asteroids.MovingObject.call(this, defaults);
  }
  
  asteroids.Util.inherits(Ship, asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
  }
  asteroids.Ship = Ship;

  Ship.RADIUS = 15;
  Ship.COLOR = '#a9a9a9';
})(this)
