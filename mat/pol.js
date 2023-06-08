class Polygon extends Block {
  constructor(world, attributes, options) {
    super(world, attributes, options);
  }

  addBody() {
    this.body = Matter.Bodies.polygon(this.attributes.x, this.attributes.y, this.attributes.s, this.attributes.r, this.options);
  }
}
