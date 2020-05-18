// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

function union(array1, array2) {
  let newArray = [];

  for (let array of arguments) {
    for (let value of array) {
      if (!newArray.includes(value)) newArray.push(value);
    }
  }
  return newArray;
}