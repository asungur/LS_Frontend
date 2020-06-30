// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

function rotateRightmostDigits(number, digit) {
  let numberArray = String(number).split('');
  const index = numberArray.length - digit;
  let rotationItem = numberArray.splice(index,1);

  return parseInt(numberArray.concat(rotationItem).join(''));
}