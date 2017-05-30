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
    },
    
    wrap: function(coord, bound, offset) {
      if (coord + offset < 0) {
	// object fell off north || west
	return bound - coord;
      } else if (coord - offset > bound) {
	// object fell off south || east
	return (coord % bound) - offset * 2;
      } else {
	return coord;
      }
    },

    distance: function(positionA, positionB) {
      var xDelta = (positionA[0] - positionB[0]) ** 2;
      var yDelta = (positionA[1] - positionB[1]) ** 2;
      return Math.sqrt(xDelta + yDelta);
    }

  }

  root.asteroids.Util = Util;
})(this);
