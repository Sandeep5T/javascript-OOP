const Circle = function (radius) {
  this.radius = radius;
  this.draw = function () {};
};

const circle = new Circle(1);

console.log(Object.getPrototypeOf(circle) === circle.constructor.prototype);
