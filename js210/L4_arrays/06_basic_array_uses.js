// Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

// Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

// Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. What happens if the index is greater than the length of the array? What happens if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // what does this return?
console.log(nthElementOf(digits, -1));  // what does this return?

// Write a function that accepts an array as the first argument and an integer value, count, as the second. It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  let newArr = []
  for (let i = 0; i <= count - 1; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]

// When you pass a count greater than the array length, the arithmetic in the function becomes a negative value. slice interprets a negative value as a position relative to the end of the array. So, if we pass a count of 9 with our digits array, lastNOf calls slice with an argument of -3. slice thus returns the final three elements of digits.

// To change this behavior, we can calculate the starting position, then adjust it to 0 if it is negative. We can pass the resulting value to slice, which returns a new copy of the array when the value is 0.

function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8);    // returns [4, 8, 15, 16, 23, 42]

// Write a function that accepts two arrays as arguments and returns an array with the first element from the first array and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]