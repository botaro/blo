let Tic = function(position,c1,c2,c3) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
    this.c1=c1
    this.c2=c2
    this.c3=c3
};

Tic.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Tic.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Tic.prototype.display = function( ) {
noStroke()
// stroke(200, this.lifespan);
// strokeWeight(2);
  fill(this.c1,this.c2,this.c3, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the Tic still useful?
Tic.prototype.isDead = function(){
  return this.lifespan < 0;
};


