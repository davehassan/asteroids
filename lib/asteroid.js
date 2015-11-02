(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(obj){
    obj.vel = Asteroids.Util.randomVec(1);
    obj.color = Asteroid.COLOR;
    obj.radius = Asteroid.RADIUS;
    Asteroids.movingObject.call(this, obj);
  };

  Asteroid.COLOR = "#d3d3d3";
  Asteroid.RADIUS = 10;

  Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);



})();
