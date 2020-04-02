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