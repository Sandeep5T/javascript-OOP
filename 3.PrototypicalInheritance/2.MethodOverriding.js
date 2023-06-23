function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  //Instance members
  this.color = color;
}

//Prototype members
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  //   Shape.prototype.duplicate(); //If Shape's duplicate does not have this in the body
  Shape.prototype.duplicate.call(this);
  console.log("duplicate circle");
};

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

extend(Square, Shape);

const c = new Circle(5, "blue");
const sq = new Square(10, "red");
