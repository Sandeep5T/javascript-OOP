function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

console.log(circle.constructor);
console.log(another.constructor);

const str = "1";
const num = 1;
const bool = true;
console.log(str.constructor);
console.log(num.constructor);
console.log(bool.constructor);
