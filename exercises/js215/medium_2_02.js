// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(2, 1));           // "invalid"
console.log(triangle('3', 1, 3));      // "invalid"


function triangle(...args) {
  // there must be 3 sides
  // all 3 must be number
  let input = args.filter(value => validNumber(value)).sort();
  // smallest two should be larger than the largest
  if (!validTriangle(input)) {
    return 'invalid';
  }
  //if there are two of the same value      => equilateral
  //if there are three of the same value    => isoceles
  //if all values are unique                => scalene
  return triangleType(input);
}

function validNumber(number) {
  return (typeof(number) === 'number' && !isNaN(number)) && number > 0;
}

function validTriangle(triangle) {
  if (triangle.length !== 3 || (triangle[0] + triangle[1] <= triangle[2])) {
    return false;
  }
  return true;
}

function triangleType(triangle) {
  if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
    return 'equilateral';
  } else if (triangle[0] === triangle[1] || triangle[1] === triangle[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}