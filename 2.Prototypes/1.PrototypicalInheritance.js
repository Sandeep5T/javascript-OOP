let x = {};
let y = {};

console.log(x.__proto_); //undefined as __proto_ is deprecated to use in code
console.log(Object.getPrototypeOf(x));

console.log(x.toString());

console.log(Object.getPrototypeOf(x).toString());

console.log(Object.getPrototypeOf(x).constructor);

console.log(Object.constructor); //f Function()

console.log(Object.toString()); //function Object()
