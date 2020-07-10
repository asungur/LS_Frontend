// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.


// console.log(diamonds(1));
// logs
// *
// console.log(diamonds(3));
// logs
//  *
// ***
//  *
// console.log(diamonds(9));
// logs
    // *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// input: odd integer
// output: series off console loggs
// define an empty array
// define max stars row = n * stars
// append into array
// (n - 1) / 2 times
// pop and shift stars
// unshift space
// append

// slice array(1)
// reverse inital array, concat the new array with inital array
// log each line

// ***** n = 
//  ***  n-2 = 1space
//   *   n-4 = 2space

function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(repeat(' ', (n - number) / 2) + repeat('*', number));
  });
}

function numberSequence(n) {
  const result = [];
  let increment = 2;

  for (let number = 1; number > 0; number += increment) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
  }

  return result;
}

function repeat(char, times) {
  let repeated = '';

  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}