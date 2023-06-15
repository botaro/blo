let Sys = function(position,img) {
  this.origin = position.copy();
  this.tics = [];
    this.img=img
};

Sys.prototype.addTic= function() {
this.tics.push(new Tic(this.origin,this.img));
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
