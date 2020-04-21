// Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer n, and logs all combinations of two prime numbers whose sum is n. Log the prime pairs with the smaller number first. If n is odd or less than 4, your function should log null.

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


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

function checkGoldbach(number) {
  if (number % 2 === 1 || number < 4) return null;

  var i;
  for (i = 2; i < Math.floor(number / 2) + 1; i += 1) {
    if (isPrime(i) && isPrime(number - i)) {
      console.log(String(i) + ' ' + String(number - i));
    }
  }
}