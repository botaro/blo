class PolygonFromSVG extends Block {
  constructor(world, attributes, options) {
    super(world, attributes, options);
  }

  addBody() {
    if (this.attributes.fromPath) {
        // use a path provided directly
        let vertices = Matter.Svg.pathToVertices(this.attributes.fromPath, 10);
        this.addBodyVertices(vertices)
    } else {
      if (this.attributes.fromId) {
        // use a path of SVG embedded in current HTML page
        let path = document.getElementById(this.attributes.fromId);
        if (null != path) {
          let vertices = Matter.Svg.pathToVertices(path, 10);
          this.addBodyVertices(vertices)
        }
      } else {
        // use a path in separate SVG file
        let that = this;
        httpGet(this.attributes.fromFile, "text", false, function(response) {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(response, "image/svg+xml");
          const path = svgDoc.querySelector("path");
          let vertices = Matter.Svg.pathToVertices(path, 10);
          that.addBodyVertices(vertices)
          Matter.World.add(that.world, [that.body]);
        });
      }
    }
  }

  addBodyVertices(vertices) {
    this.body = Matter.Bodies.fromVertices(0, 0, Matter.Vertices.scale(vertices, this.attributes.scale, this.attributes.scale), this.options);
    if (typeof this.attributes.x !== undefined) {
      Matter.Body.setPosition(this.body, this.attributes);
    } else {
      Matter.Body.setPosition(this.body, this.getCenter(vertices));
    }
    if (this.attributes.image) {
      this.offset = {
        x: this.offset.x + (this.attributes.image.width / 2) * this.attributes.scale - (this.body.position.x - this.body.bounds.min.x),
        y: this.offset.y + (this.attributes.image.height / 2) * this.attributes.scale - (this.body.position.y - this.body.bounds.min.y)
      }
    }
  }

  getCenter(vertices) {
    let min = {x: 999999, y: 999999};
    let max = {x: -999999, y: -999999};
    vertices.forEach((v, i) => {
      min.x = min.x > v.x ? v.x : min.x;
      min.y = min.y > v.y ? v.y : min.y;
      max.x = max.x < v.x ? v.x : max.x;
      max.y = max.y < v.y ? v.y : max.y;
    });
    return { x: min.x + (this.body.position.x - this.body.bounds.min.x), y: min.y + (this.body.position.y - this.body.bounds.min.y) }
  }
}
