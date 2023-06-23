const numbers = [1, 2, 3, 0, 4, 0, 5, 6, 0];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 0) {
    numbers[count] = numbers[i];
    count++;
  }
}

while (count < numbers.length) numbers[count++] = 0;
console.log(numbers);
