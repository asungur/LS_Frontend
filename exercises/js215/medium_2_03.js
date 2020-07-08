/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Examples:
*/


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(50, 50));           // "invalid"
console.log(triangle('50', 50, 50));     // "invalid"
console.log(triangle(-50, 50, 50));      // "invalid"

function triangle(...args) {
  if (!isValid(args)) {
    return 'invalid';
  }

  args.sort((a, b) => b - a);

  if (rightAngle(args)) {
    return 'right';
  } else if (acuteAngle(args)) {
    return 'acute';
  } else if (args[0] > 90) {
    return 'obtuse'
  } else {
    console.log('BUGGY SOLUTION')
  }
}

function acuteAngle(angles) {
  return angles.filter(angle => angle >= 90).length == 0;
}

function rightAngle(angles) {
  return angles.indexOf(90) !== -1;
}

function isValid(angles) {
  let validity = angles.reduce((sum,val) => sum += val) === 180;
  angles.forEach(angle => {
    if (!isValidAngle(angle)) {
      validity = false;
    }
  });

  return validity;
}

function isValidAngle(angle) {
  return (typeof(angle) === 'number' && !isNaN(angle)) && angle > 0
}

// INVALIDITY
// 1. There must be 3 angles and all number type
// 2. Sum of all should be 180
// 3. All values should be >= 0

// SORT
// This operation should sort the array (largest value first)

// RIGHT
// angles array should contain 90

// ACUTE
// use reduce to check each angle, should return empty array

// OBTUSE
// first value in the array is larger than 90