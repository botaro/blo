let Tic = function(pos,img,gra) {
  this.acc = createVector(0, gra)
  this.vel = createVector(random(-2, 2), random(-2, 2))
  this.pos = pos.copy()
  this.span = 255
  this.img=img
}

Tic.prototype.run = function() {
  this.update()
  this.display()
}

Tic.prototype.update = function(){
  this.vel.add(this.acc)
  this.pos.add(this.vel)
  this.span -= 2
}

Tic.prototype.display = function() {
image(this.img,this.pos.x, this.pos.y, 48, 48)

}

Tic.prototype.isDead = ()=>this.span < 0



