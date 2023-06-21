function Circle(radius, test) {
  console.log(typeof arguments, arguments);
  for (let arg of arguments) console.log(arg);
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

console.log(Circle.constructor.toString());

console.log(Circle.toString());

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
`
);

console.log(typeof Circle); //returns 'function'
console.log(Circle.length); //gives the length of arguments

const circle = new Circle(1, 2);
console.log(Circle.constructor);

const circle1 = Circle1(1);
console.log(circle1); //Undefined

const circle2 = new Circle1(1);
console.log(circle2); //returns a circle object

Circle.call({}, 1, 2, 3);
Circle.apply({}, [1, 2, 3, 4]);
