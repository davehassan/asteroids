(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass){
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function (length) {
    var vec = [(Math.random() - 0.5),(Math.random() - 0.5)];
    var norm = Asteroids.Util.norm(vec);
    vec = Asteroids.Util.normalize(vec);
    vec[0] *= length;
    vec[1] *= length;

    return vec;
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

})();
