document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth - 25;
  canvas.height = window.innerHeight - 25;

  var ctx = canvas.getContext('2d');

  var gameView = new asteroids.GameView(ctx);
  gameView.bindKeyHandlers();
  gameView.start();

})
