(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game){
    this.game = game;
  };

  GameView.prototype.start = function(){
    setInterval(function(){

      this.game.step();
      this.game.draw();
    }.bind(this), 20);
  };
})();
