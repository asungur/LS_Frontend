// 01. We need a piece of reusable code that returns the average of three numbers. Define a function named average that takes three parameters, a, b, and c, and returns their average. Call the function with three numbers and log the result.

// 03. Create a variable named total with an initial value of 0 at the start of the average function. Use a for loop to iterate over all the elements in the array. With each iteration, add the element's value to the total. When the loop finishes, return the total divided by the array's length. Call average with an array of five numbers and log the result.

function average(arr) {
  return sum(arr) / arr.length;
}

// 02. We now need a function that calculates the sum of the same three values. Create a function named sum that takes the same three arguments as average, and returns the sum of the three arguments. Now modify average to call the sum function with those three arguments and use the return value to calculate the average.

// 04. We should make the same changes to the sum function so we can continue to use it from the average function. Since we've already written that functionality in average, we can just move it from there to sum. Move everything from average into sum, except for the final return statement. The sum function should return the total, and average should call the sum function with the same values, then divide the return value by the array length, and return it.

function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total
}

// 05. With the refactors done for question 3 and 4, we can now use our functions to determine the average of all the numbers in an arbitrary array of numbers. Create an array named temperatures and store five temperature values in it. Find the average temperature by passing the array to the average function and log the result.

var temperatures = [73, 58, 81, 64, 67];

console.log(average(temperatures));
console.log(average([3, 5, 8]));