let num1 = 2;
let num2 = num1;

num1 = 5;

console.log(num1);
console.log(num2); //Primitives are copied by their value and hence num1 and num2 are independent

let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x);
console.log(y);

x = { value: 30 };

console.log(x);
console.log(y);

let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);

number = { value: 10 };
function increaseValue(obj) {
  obj.value++;
}

increaseValue(number);
console.log(number);
