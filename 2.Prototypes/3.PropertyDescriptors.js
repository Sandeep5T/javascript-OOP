let person = { name: "Mosh" };

console.log(person.toString());

console.log(person.constructor);

console.log(person.constructor.toString());

console.log(Object.getPrototypeOf(person));

console.log(Object.getPrototypeOf(person).toString()); //[object Object]

console.log(Object.getPrototypeOf(person).constructor);
console.log(Object.getPrototypeOf(person).constructor.toString());
