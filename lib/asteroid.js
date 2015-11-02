(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroid.COLOR = "#d3d3d3";
  Asteroid.RADIUS = 1;

  var Asteroid = Asteroids.Asteroid = function(posObj){
    posObj.vel = Asteroids.Util.randomVec(1);
    posObj.color = Asteroid.COLOR;
    posObj.radius = Asteroid.RADIUS;
    Asteroids.movingObject.call(this, posObj);
  };

  window.Asteroids.Util.inherits(Asteroid, movingObject){};


});
