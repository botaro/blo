class Circle {
  constructor(x, y, r) {
let opt = {friction: 0.3,restitution: 0.6    };
    this.body = Bodies.circle(x, y, r, opt);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, -pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke()
    fill(10,200,200);
    ellipse(0, h, this.r * 2);
    pop();
  }
}
