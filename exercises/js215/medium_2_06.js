// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


function sumSquareDifference(n) {
  let squares = 0;
  let sums = 0;
  let i = 1;

  while (i <= n) {
    sums += i;
    squares += (i ** 2)
    i += 1;
  }
  
  return (sums ** 2) - squares;
}