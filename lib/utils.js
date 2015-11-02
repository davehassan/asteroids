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

  Asteroids.Util.dist = function (vec1, vec2) {
    var delta = [];
    delta[0] = vec1[0] - vec2[0];
    delta[1] = vec1[1] - vec2[1];

    return Math.sqrt( Math.pow(delta[0],2) + Math.pow(delta[1],2) );
  };

  Asteroids.Util.norm = function (vec) {
    return Util.dist([0,0], vec);
  };

  Asteroids.Util.normalize = function (vec) {
    var returnVec = vec;
    var norm = Asteroids.Util.norm(vec);
    returnVec[0] /=  norm;
    returnVec[1] /= norm;
    return returnVec;
  };

})();
