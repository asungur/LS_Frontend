// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false


function isPrime(number) {
  var i;

  if (number <= 1) return false;

  for (i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}