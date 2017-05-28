var MovingObject = require('../lib/movingObject.js');

describe("movingObject", function() {
  
  var options = {
    pos: [1, 2],
    vel: [3, 4],
    radius: 42,
    color: '#f0f',
  };
  var happyObj;
  
  beforeEach(function() {
    happyObj = new MovingObject(options); 
  })
  
  it("is initialized with an options object", function() {
    expect(happyObj).toBeDefined();
  });

  it("has a pos array of two numbers", function() {
    expect(happyObj.pos).toContain(1, 2)
  });

  it("has a vel array of two numbers", function() {
    expect(happyObj.vel).toContain(3, 4)
  });

  it("has a radius", function() {
    expect(happyObj.radius).toEqual(42)
  });
  
  it("has a color", function() {
    expect(happyObj.color).toMatch("#f0f")
  });
  
  it("breaks without an options object", function() {
    var brokenObj = function() {
      new MovingObject(); 
    }
    expect(brokenObj).toThrowError(TypeError);
  });

});
