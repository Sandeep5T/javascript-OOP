function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    console.log(factor);
  };
  this.draw = function () {
    computeOptimumLocation(0.5);
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle);

console.log(circle.defaultLocation); // this property Should be hidden using abstraction
circle.computeOptimumLocation(1); //this method should be hidden using abstraction
