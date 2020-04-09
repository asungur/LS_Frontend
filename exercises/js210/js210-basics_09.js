var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

function integerToString(num) {
  var str = '';
  var remainder;

  do {
    remainder = num % 10;
    num = Math.floor(num / 10);
    str = DIGITS[remainder] + str;
  } while (num > 0);
  return str;
}

function signedIntegerToString(num) {
  if (num == 0) {
    return integerToString(num); 
  } else if (num < 0 ) {
    return ("-" + integerToString(-num));
  } else {
    return ('+' + integerToString(num));
  }
}

console.log(signedIntegerToString(4321));      // "4321"
console.log(signedIntegerToString(0));         // "0"
console.log(signedIntegerToString(5000));      // "5000"
console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"

