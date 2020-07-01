// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalArea(array) {
  const reducer = (accumulator, value) => accumulator + value;
  return array.map((rectangle) => rectangle[0] * rectangle[1]).reduce(reducer);
}

/*
LS SOLUTION
function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}
*/

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.


console.log(totalSquareArea(rectangles));    // 121

function totalSquareArea(array) {
  return totalArea(array.filter((rectangle) => rectangle[0] === rectangle[1]));
}

/*
COMBINED SOLUTION
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}
*/