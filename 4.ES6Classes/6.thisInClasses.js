class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
c.draw();

const draw = c.draw;
console.log(draw);
draw(); //this is undefined here as Javascript engine will automatically enabled strict mode in the body of the classes
