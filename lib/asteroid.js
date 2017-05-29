(function(root) {
  root.asteroids = root.asteroids || {};

  function Asteroid(opts) {
    var defaults = {
      pos: opts.pos,
      vel: asteroids.Util.randomVec(Math.random()),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: opts.game
    };
    asteroids.MovingObject.call(this, defaults)
  }

  asteroids.Util.inherits(Asteroid, asteroids.MovingObject);

  Asteroid.COLOR = '#2B6BCE';
  Asteroid.RADIUS = 42;
  root.asteroids.Asteroid = Asteroid;
})(this)
