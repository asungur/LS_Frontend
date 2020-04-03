// SIMPLE WHILE LOOP
let counter = 1;
while (counter <= 1000) {
  console.log(counter);
  counter += 1;
}

// SYNTACTICAL SUGAR
let a = 3
a *= 4;         // a => 12 (3 * 4)
a /= 6;         // a => 2 (12 / 6)
a -= 2;         // a => 0 (2 - 2)

// INCREMENT OPERATOR (++)
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// DECREMENT OPERATOR (++)
let counter = 10;
while (counter >= 1) {
  console.log(counter);
  counter--;
}

// ITERATING OVER ARRAYS
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

// DO WHILE LOOP
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');


// USING CONTINUE TO SKIP THE REST OF THE BLOCK
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']

// USING BREAK TO SKIP REST OF THE ITERATIONS
let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);

// ARRAY ITERATION
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function (name) {
  console.log(name);
});

// SINGLE LINER ARRAY ITER
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));

// RECURSION
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5);
// logs
// 5
// 10
// 20
// 40
// 80

// RECURSION MORE COMPLEX FIBONACCI EXAMPLE
function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(6)); // the 6th Fibonacci number is 8