const Circle = function (value) {
  let radius = value;
  Object.defineProperty(this, "radius", {
    get: function () {
      return radius;
    },
  });
};

const c = new Circle(2);
c.radius = 3;
console.log(c);
