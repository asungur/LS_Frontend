// Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

var count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]

function push(array, item) {
  array[array.length] = item;
  return array.length;
}

// Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

var count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]

function pop(array) {
  let newLength = array.length - 1;
  let returnVal = array[newLength];;
  array.length = newLength;
  return returnVal;
}

// Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array. You will need a for loop for this problem.

var count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]

function unshift(array, value) {
  for (let i = array.length; i > 0; i -= 1) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

// Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]

function shift(array) {
  let returnVal = array[0];
  
  if (array.length === 0) return undefined;

  for (let i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return returnVal;
}