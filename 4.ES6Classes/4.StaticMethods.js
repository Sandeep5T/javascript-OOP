class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //Instance method available on the prototype
  draw() {
    console.timeLog("draw");
  }

  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius":2}');
console.log(circle);

class Math {
  static abs() {}
}

Math.abs();
