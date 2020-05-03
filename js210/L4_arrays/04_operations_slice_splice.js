// Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

// You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

function slice(array, begin, end) {
  var newArray = [];
  var i;
  for (i = begin; i < end; i += 1) {
    newArray.push(array[i]);
  }

  return newArray;
}

// Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.

// You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

function splice(array, start, amount) {
  let removedValues = [];
  for (let i = start; i < array.length; i += 1) {
    if (i < start + amount) {
      removedValues.push(array[i]);
    }
    array[i] = array[i + amount];
  }
  array.length = array.length - removedValues.length;
  return removedValues;
}

// Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

// You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

 function concat(array1, array2) {
   let newArray = [];

   for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i]);
  }

   for (let i = 0; i < array2.length; i += 1) {
     newArray.push(array2[i]);
   }
   return newArray;
 }

//  Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

// You can call the String function on any JavaScript value to get its String representation.

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

function join(array, separator) {
  let newString = '';
  for (let i = 0; i < array.length; i += 1) {
    newString += array[i];
    if (i < array.length - 1) {
      newString += separator;
    }
  }
  return newString;
}