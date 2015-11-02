(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function (canvasEL) {
    this.addAsteroids(Game.NUM_ASTEROIDS);
    debugger
    this.width = canvasEL.width;
    this.height = canvasEl.height;
    this.ctx = canvasEl.getContext("2d")
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 50;

  Game.prototype.addAsteroids = function(num){
    this.asteroids = [];
    for(var i = 0; i < num; i++ ){
      var asteroid = new Asteroids.Asteroid({pos: Game.randomPosition(), game: this});
      this.asteroids.push(asteroid);
    };
  };

  Game.randomPosition = function(){
    var screenSize = Asteroids.Util.norm([500, 500]);
    var notPositive = Asteroids.Util.randomVec(screenSize);
    return [Math.abs(notPositive[0]), Math.abs(notPositive[1])]
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.asteroids.forEach(function(el){
      el.draw(this.ctx);
    }.bind(this));
  };

  Game.prototype.moveObjects = function() {

    this.asteroids.forEach(function(el){
      el.move();
    });
  };

  Game.prototype.wrap = function (pos){
    if (pos[0] < 0) {
      pos[0] += this.width;
    } else if (pos[0]> this.width){
      pos[0] -= this.width;
    }

    if (pos[1] < 1) {
      pos[1] += this.height;
    } else if (pos[1]> this.height){
      pos[1] -= this.height;
    }
    return pos;
  };

})();
