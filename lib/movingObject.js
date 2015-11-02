(function () {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var movingObject = Asteroids.movingObject = function (args) {
    for (var key in args) {
      this[key] = args[key];
    }
  };

  movingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc (
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  movingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = game.wrap(this.pos);
  };

  movingObject.prototype.isCollidedWith = function (otherObject) {
    var dist = Asteroids.Util.dist(this.pos, otherObject.pos);
    if (dist < (this.radius + otherObject.radius)) {
      return true;
    } else {
      return false;
    }
  };

  movingObject.prototype.collideWith = function (otherObject) {
    if (this.isCollidedWith(otherObject)) {
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  };


})();
