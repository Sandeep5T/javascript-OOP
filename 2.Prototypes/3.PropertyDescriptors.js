let person = { name: "Mosh" };

// console.log(person.toString());

// console.log(person.constructor);

// console.log(person.constructor.toString());

// console.log(Object.getPrototypeOf(person));

// console.log(Object.getPrototypeOf(person).toString()); //[object Object]

// console.log(Object.getPrototypeOf(person).constructor);
// console.log(Object.getPrototypeOf(person).constructor.toString());

//THis section covers below

console.log(person.toString()); //'[object Object]'

for (let key in person) console.log(key);

console.log(Object.keys(person));

const objectBase = Object.getPrototypeOf(person);

console.log(objectBase);

console.log("Keys in Objectbase", Object.keys(objectBase));

const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log("descriptor, ", descriptor);

//Setting attributes on properties in your own object

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false, //so you cannot delete this property
});

person.name = "John";
delete person.name;
console.log(person);
console.log(Object.keys(person));
