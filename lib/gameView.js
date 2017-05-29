(function(root) {
  root.asteroids = root.asteroids || {};

  function GameView(ctx) {
    this.ctx = ctx;
    this.game = new asteroids.Game();
  }

  GameView.prototype.start = function() {
    this.game.moveObjects();
    this.game.draw(this.ctx);
    window.requestAnimationFrame(this.start.bind(this))
  }

  root.asteroids.GameView = GameView;
})(this);
