(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};



  var Ship = Asteroids.Ship = function(obj){
    obj.vel = [0,0];
    obj.color = Ship.COLOR;
    obj.radius = Ship.RADIUS;
    Asteroids.movingObject.call(this, obj);
  };

  Ship.COLOR = "#000000";
  Ship.RADIUS = 5;

  Asteroids.Util.inherits(Ship, Asteroids.movingObject);

})();
