function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(1);
console.log(c1);
// c1.draw(); //Typer error: c1.draw is not a function

Circle.prototype.draw = function () {
  console.log("draw");
};

c1.draw();

//Retuns only instance members
console.log(Object.keys(c1));

//Returns instance and prototype members
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty("move"));

console.log(c1.hasOwnProperty("draw"));
