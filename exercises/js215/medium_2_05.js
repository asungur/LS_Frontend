/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
*/

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987


// % 2 === 1
// % 7 === 0
// all digits unique
// cannot be larger than 9876543201


function featured(number) {
  let featuredNum = 0;

  while (featuredNum === 0) {
    number += 1;
    if (isFeatured(number)) {
      featuredNum = number;
    }
  }
  return featuredNum
}

function isFeatured(number) {
  const MAX_FEATURED = 9876543201;

  return ((number % 2 === 1 && number % 7 === 0) && (number < MAX_FEATURED && allUniq(number)));
}

function allUniq(number) {
  let numArr = String(number).split('')
  let uniq = numArr.filter((number, i , arr) => {
    return arr.indexOf(number) === i
  });

  return uniq.length === numArr.length;
}