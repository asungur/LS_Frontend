// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

function shift(array) {
  var result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

function unshift(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

var testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]