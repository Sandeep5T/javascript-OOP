"use strict";

const Circle = function Circle() {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
c.draw();

const draw = c.draw;
draw();

const another = Circle(); //in Strict mode this will be undefined and results in 'cannot set properties of undefined: setting draw'
console.log(another);
window.draw();
another.draw(); //Uncaught typeerror: Cannot read properties of undefined
