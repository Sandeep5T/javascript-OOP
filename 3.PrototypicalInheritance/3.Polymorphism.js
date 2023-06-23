function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, "red");
  this.radius = radius;
}

extend(Circle, Shape);
Circle.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call();
  console.log("duplicate circle");
};

function Square(size, color) {
  this.size = size;
}

extend(Square, Shape);
Square.prototype.duplicate = function () {
  Circle.prototype.duplicate.call();
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square()];
for (let shape of shapes) shape.duplicate();
