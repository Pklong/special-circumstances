(function(root) {
  root.asteroids = root.asteroids || {};

  var Util = {
    inherits: function(child, parent) {
      function Surrogate() {};
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();
      child.prototype.constructor = child;
    },
    randomVec: function(length) {
      var deg = 2 * Math.PI * Math.random();
      return this.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    scale: function(vec, mag) {
      return [vec[0] * mag, vec[1] * mag];
    }
  }

  root.asteroids.Util = Util;
})(this);
