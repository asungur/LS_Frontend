/*
Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Examples:
*/

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]


// iterate on arr1
// iterate on arr2
// compare first elements arr1[0] >= arr2[0]
// take the smaller one into a new array
// increment the iterator on the array that value is taken from
// finish iterating when newArr.length === arr1.length + arr2.length

function merge(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return arr1.concat(arr2);
  }

  let newArr = [];
  let iter1 = 0;
  let iter2 = 0;

  while (newArr.length < arr1.length + arr2.length) {
    let tempEl;
    if (arr1[iter1] >= arr2[iter2]) {
      tempEl = arr2[iter2];
      iter2 += 1;
    } else if (arr1[iter1] < arr2[iter2]) {
      tempEl = arr1[iter1];
      iter1 += 1;
    }
    newArr.push(tempEl);
  }
  return newArr;
}

// LS SOLUTION
function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}