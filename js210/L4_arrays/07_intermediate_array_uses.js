// Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  let oddElements = [];

  for (let i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

// Write a function that takes two arrays and returns a new array whose even positions come from the first array, and whose odd positions come from the second array. Assume that both arrays have equal length.

function combinedArray(even, odd) {
  var combined = [];
  var len = even.length;
  var i;

  for (i = 0; i < len; i += 1) {
    combined.push(even[i]);
    combined.push(odd[i]);
  }

  return combined;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters);  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

// Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  var arrCopy = arr.slice();
  return arrCopy.sort(function (a, b) { return b - a; });
}

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1){
    let sum = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      sum += arr[i][j];
    }
    newArr.push(sum);
  }
  return newArr;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]