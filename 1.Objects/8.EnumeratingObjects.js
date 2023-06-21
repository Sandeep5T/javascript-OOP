function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

console.log(typeof circle);

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

const entries = Object.entries(circle);
console.log(entries);

const values = Object.values(circle);
console.log(values);

if ("radius" in circle) console.log(circle.radius);
