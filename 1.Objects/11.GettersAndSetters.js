function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    computeOptimumLocation(0.5);
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error("Invalid value for default location");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(1);
console.log(circle);

console.log(circle.defaultLocation); // this property Should be hidden using abstraction
console.log(circle.getDefaultLocation());
console.log(circle.defaultLocation);

circle.defaultLocation = { x: 1, y: 1 };
console.log(circle);
circle.defaultLocation = 1;
