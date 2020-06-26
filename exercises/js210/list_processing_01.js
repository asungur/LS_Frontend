// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

function sum(number) {
  return String(number).split('').map(numString => parseInt(numString, 10)).reduce((total, num) => total + num);
}