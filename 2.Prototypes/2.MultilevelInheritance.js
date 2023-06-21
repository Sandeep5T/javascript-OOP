let x = [1, 2, 3, 4];

console.log(Object.getPrototypeOf(x));

console.log(Object.getPrototypeOf(x).constructor);
console.log(Object.getPrototypeOf(x).constructor.toString());

console.log(Object.getPrototypeOf(Object.getPrototypeOf(x)));

console.log(Object.getPrototypeOf(Object.getPrototypeOf(x)).toString());
