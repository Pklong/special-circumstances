(function(root) {
  root.asteroids = root.asteroids || {};

  function Game() {
    this.asteroids = [];
    this.addAsteroids();
    
  }

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var ast = new asteroids.Asteroid({ pos: this.randomPosition() });
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

  Game.DIM_X = root.innerWidth - 200;
  Game.DIM_Y = root.innerHeight - 200;
  Game.NUM_ASTEROIDS = 25;

  asteroids.Game = Game;

  /* var canvas = document.querySelector('canvas');
   * canvas.width = root.innerWidth;
   * canvas.height = root.innerHeight;
   * var ctx = canvas.getContext('2d');

   * var game = new Game();
   * game.draw(ctx);*/

})(this);
