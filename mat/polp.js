class PolygonFromPoints extends Block {
  constructor(world, attributes, options) {
    super(world, attributes, options);
  }

  addBody() {
    let shape = Matter.Vertices.create(this.attributes.points, Matter.Body.create({}));
    this.body = Matter.Bodies.fromVertices(0, 0, shape, this.options);
    Matter.Body.setPosition(this.body, this.attributes);
  }
}
