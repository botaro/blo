class Box {
  constructor(img,x, y, w, h) {
    let opt = {
      friction: 0.3,
      restitution: 0.6
    };
    this.body = Bodies.rectangle(x, y, w, h, opt);
    this.w = w,    this.h = h,this.img=img,this.x=x,this.y=y
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
translate(pos.x, pos.y);
image(this.img,w*3/6-frameCount*2,0)

    pop();
  }
}
