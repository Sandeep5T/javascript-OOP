const Circle = function (radius) {
  //Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
    // this.draw();
  };
};

//Prototype members
Circle.prototype.draw = function () {
  this.move();
  console.log("draw");
};
const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(Circle.prototype === Object.getPrototypeOf(c1));

console.log(c1.toString());

Circle.prototype.toString = function () {
  return `circle with radius ${this.radius}`;
};

console.log(c1.toString());

c1.move();
