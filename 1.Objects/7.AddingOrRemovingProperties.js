function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

console.log(circle);

circle.location = { x: 1, y: 2 };

console.log(circle);

const propertyName = "center location";
circle[propertyName] = { x: 1 };

console.log(circle);

delete circle.location;
delete circle["center location"];
