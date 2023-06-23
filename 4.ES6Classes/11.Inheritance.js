class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle(1, "blue");
c.draw();
1;
