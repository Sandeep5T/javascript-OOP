function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function (factor) {
    console.log(factor);
  };
  this.draw = function () {
    this.computeOptimumLocation(0.5);
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle);

console.log(circle.defaultLocation); // this property Should be hidden using abstraction
circle.computeOptimumLocation(1); //this method should be hidden using abstraction
