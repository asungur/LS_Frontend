// The oddities function takes an array as an argument and returns a new array containing every other element from the input array. The values in the returned array are the first (index 0), third, fifth, and so on, elements of the input array. The program below uses the array returned by oddities as part of a comparison. Can you explain the results of these comparisons?



function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}


console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]);      // false
console.log(oddities(['abc', 'def']) === ['abc']);         // false

// AS: For Arrays and other Objects we can only compare the specific values, not the objects themselves.

// LS: Both of these comparisons return false because the arrays being compared are two different objects, even though they contain the same values. Recall that Arrays are Objects, so the only way for the equality operator to return true for array comparison is if they are the same object or if the comparison is done on the contents of the arrays and not on the arrays themselves.