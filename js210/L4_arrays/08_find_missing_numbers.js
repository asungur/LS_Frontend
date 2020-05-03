// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

function missing(arr) {
  let newArr = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) newArr.push(i);
  }
  return newArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []