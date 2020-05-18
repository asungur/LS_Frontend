// In this exercise, you will implement your own versions of the Array.prototype.slice and Array.prototype.splice methods according to the following specifications.

// The slice function takes three arguments: an array, and two integers representing a begin and an end index. The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.

// The splice function changes the contents of an array by deleting existing elements and/or adding new elements. The function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. The function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.

// Additional specifications:

// slice:

// The values of begin and end will always be integers greater than or equal to 0.
// If the value of begin or end is greater than the length of the array, set it to equal the length.
// splice:

// The values of start and deleteCount will always be integers greater than or equal to 0.
// If the value of start is greater than the length of the array, set it to equal the length.
// If the value of deleteCount is greater than the number of elements from start up to the end of the array, set deleteCount to the difference between the array's length and start.
// Takes optional arguments for elements to add to the array; denoted by the parameters element1 up to elementN. If no elements to add are provided, splice only removes elements from the array.

function slice(array, begin, end) {
  let newArray = []

  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;

  for (let i = begin; i < end; i += 1) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

function splice(array, start, deleteCount) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  var arrayCopy = slice(array, 0, array.length);
  var elementCount = arguments.length - 3;
  var newLength = array.length + elementCount - deleteCount;
  array.length = newLength;
  var copyBackCount;
  var i;

  for (i = 0; i < elementCount; i += 1) {
    array[start + i] = arguments[3 + i];
  }

  copyBackCount = arrayCopy.length - (start + deleteCount);
  for (i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
arr;                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
arr;                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
arr;                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
arr;                                  // ["a", 1, 2, 3]