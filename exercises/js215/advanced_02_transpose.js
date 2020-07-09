// A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

// To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6
// Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

// Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// [1, 5, 8],
// [4, 7, 2],
// [3, 9, 6]

// [x, x, x],
// [x, x, x],
// [x, x, x]

// 1  4  3
// 5  7  9
// 8  2  6

// 3 is the key number (harcoding)
// FIRST iteration: take FIRST item of each array and put it in an array (THIRD row)
// SECOND iteration: take SECOND item of each array and put it in an array (SECOND row)
// THIRD iteration: take THIRD item of each array and put it in an array (THIRD row)
// all iterations should append into a new array

function transpose(matrix) {
  const KEY = 3;
  let transposedMatrix = [];

  for (let i = 0; i < KEY; i += 1) {
    let tempArr = []
    matrix.forEach(row => tempArr.push(row[i]));
    transposedMatrix.push(tempArr);
  } 
  return transposedMatrix;
}