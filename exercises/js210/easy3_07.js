// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

function runningTotal(array) {
  if (!array.length) return [];
  let sum = 0;
  let returnArr = []

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    returnArr.push(sum);
  }
  return returnArr;
}