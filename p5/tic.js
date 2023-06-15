let Tic = function(position,img) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
    this.img=img
};

Tic.prototype.run = function() {
  this.update();
  this.display();
};

Tic.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

Tic.prototype.display = function( ) {
noStroke()
image(this.img,this.position.x, this.position.y, 48, 48);


};

Tic.prototype.isDead = function(){
  return this.lifespan < 0;
};


