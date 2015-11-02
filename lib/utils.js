(function() {
  window.Asteroids.Util.inherits = function(ChildClass, ParentClass){
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.protoype = new Surrogate();
    ChildClass.protoype.constructor = ChildClass;
  };

  
});
