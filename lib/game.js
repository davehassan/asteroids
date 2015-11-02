(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {}

  var Game = Asteroids.Game = function() {};

  Game.DIM_X = 300;
  Game.DIM_Y = 300;
  Game.NUM_ASTEROIDS = 5;

  Game.addAsteroids = function(num){
    this.asteroids = [];
    for(var i = 0; i < num; i++ ){
      var asteroid = new Asteroids.Asteroid({pos: Game.randomPosition()});
      this.asteroids.push(asteroid);
    };
  };

  Game.randomPosition = function(){
    var sceenSize = Asteroids.Util.norm([Game.DIM_X, Game.DIM_Y]);
    return Asteroids.Util.randomVec(screenSize);
  };

  Game.draw = function (ctx) {
    ctx.clearRect();
    this.asteroids.forEach(function(el){
      el.draw(ctx);
    });
  };

  Game.moveObjects = function() {
    this.asteroids.forEach(function(el){
      el.move();
    });
  };

});
