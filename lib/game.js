(function(root) {
  root.asteroids = root.asteroids || {};

  function Game() {
    this.asteroids = [];
    this.addAsteroids();
    
  }

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var ast = new asteroids.Asteroid({ pos: this.randomPosition(), game: this });
      this.asteroids.push(ast);
    }
  }
  
  Game.prototype.randomPosition = function() {
    return [
      Math.floor(Math.random() * Game.DIM_X),
      Math.floor(Math.random() * Game.DIM_Y)
    ];
  }
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, root.innerWidth, root.innerHeight);
    this.asteroids.forEach(function(a) {
      a.draw(ctx);
    });
  }
  
  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(a) {
      a.move();
    });
  }

  Game.prototype.wrap = function(pos, offset) {
    return [
      asteroids.Util.wrap(pos[0], Game.DIM_X, offset),
      asteroids.Util.wrap(pos[1], Game.DIM_Y, offset)
    ];
  }

  Game.prototype.checkCollisions = function() {
    this.asteroids.forEach(function(asteroidA) {
      this.asteroids.forEach(function(asteroidB) {
	if (asteroidA === asteroidB) return;
	if (asteroidA.isCollidedWith(asteroidB)) {
	  asteroidA.collideWith(asteroidB);
	}
      })
    }.bind(this))
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function(obj) {
    this.asteroids = this.asteroids.filter(function(a) {
      return a !== obj;
    });
  }

  Game.DIM_X = root.innerWidth - 25;
  Game.DIM_Y = root.innerHeight - 25;
  Game.NUM_ASTEROIDS = 6;

  root.asteroids.Game = Game;

})(this);
