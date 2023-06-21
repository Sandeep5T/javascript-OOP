function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

const another = createCircle(1);

console.log(circle === another);

circle.draw();
