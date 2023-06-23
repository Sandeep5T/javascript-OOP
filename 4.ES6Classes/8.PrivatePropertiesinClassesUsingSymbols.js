const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {}
}

const c = new Circle(1);
console.log(Object.getOwnPropertyNames(c));
const key = Object.getOwnPropertySymbols(c)[0];
c[key] = 2;
console.log(c[key]);

console.log(c);
