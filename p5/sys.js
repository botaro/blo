let Sys = function(pos,img,gra) {
this.org = pos.copy()
this.tics = []
this.img=img
    this.gra=gra
}

Sys.prototype.addTic= function() {
this.tics.push(new Tic(this.org,this.img,this.gra))
}

Sys.prototype.run = function() {
for (let i = this.tics.length-1;i >= 0;i--) {
let p = this.tics[i]
p.run()
if (p.isDead()) this.tics.splice(i, 1)

}

}
