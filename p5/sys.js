let Sys = function(position) {
  this.origin = position.copy();
  this.tics = [];
};

Sys.prototype.addTic= function(c1,c2,c3) {
  this.tics.push(new Tic(this.origin,c1,c2,c3));
};

Sys.prototype.run = function() {
  for (let i = this.tics.length-1; i >= 0; i--) {
    let p = this.tics[i];
    p.run();
    if (p.isDead()) {
      this.tics.splice(i, 1);
    }
  }
};
