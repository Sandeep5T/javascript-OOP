// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move", this);
    };
  }

  draw() {
    console.log("draw", this);
  }
}

const c = Circle(1);
