(function(root) {
  root.asteroids = root.asteroids || {};

  function GameView(ctx) {
    this.ctx = ctx;
    this.game = new asteroids.Game();
  }

  GameView.prototype.start = function() {
    this.game.step();
    this.game.draw(this.ctx);
    window.requestAnimationFrame(this.start.bind(this))
  }

  GameView.prototype.bindKeyHandlers = function() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      var entry = GameView.KEY_MAP[e.keyCode];
      
      if (typeof entry === 'object') {
	this.game.ship.power(entry);
      } else if (typeof entry === 'string') {
	this.game.ship.fireBullet();
      }
    });
  }

  GameView.KEY_MAP = {
    65: [-1, 0],
    87: [0, -1],
    68: [1, 0],
    83: [0, 1],
    37: [-1, 0],
    38: [0, -1],
    39: [1, 0],
    40: [0, 1],
    32: 'fire'
  }
  

  root.asteroids.GameView = GameView;
})(this);
