(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass){
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.protoype = new Surrogate();
    ChildClass.protoype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function (length) {
    var vel = [(Math.random() - 1),(Math.random() - 1)];
    var norm = Asteroids.Util.norm(vel);
    vel[0] = speed * vel[0] / norm;
    vel[1] = speed * vel[1] / norm;

    return vel;
  };

  Asteroids.Util.norm = function (vec) {
    return Math.sqrt( Math.pow(vec[0],2) + Math.pow(vec[1],2) );
  };
  Asteroids.Util.normalize = function (vec) {
    var returnVec = vec;
    var norm = Asteroids.Util.norm(vec);
    returnVec[0] /=  norm;
    returnVec[1] /= norm;
    return returnVec;
  };

});
