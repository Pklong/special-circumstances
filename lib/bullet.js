(function(root) {
  root.asteroids = root.asteroids || {};

  function Bullet(opts) {
    var defaults = {
      pos: opts.pos,
      vel: asteroids.Util.propel(opts.vel),
      game: opts.game,
      color: Bullet.COLOR,
      radius: Bullet.RADIUS,
    }

    asteroids.MovingObject.call(this, defaults);
  }

  asteroids.Util.inherits(Bullet, asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObj) {

    if (otherObj instanceof asteroids.Asteroid) {
      this.game.remove(otherObj);
      this.game.remove(this);
    }
  }

  root.asteroids.Bullet = Bullet;

  Bullet.COLOR = '#000';
  Bullet.RADIUS = 2;
})(this)
