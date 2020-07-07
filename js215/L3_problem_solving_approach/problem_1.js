// Problem Description
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

// input: number|string
// output: phone number in required format

// badNumStr = '0000000000'

// clean non-alphanumeric characters

// case 1: number is less than 10 digits
//   return badNumStr
// case 2: number is 10 digits
//   return number
// case 3: number is more than 10 digits
//   case 3a: first number is 1 and 11 digits:
//     trim first digit and return number
// return badNumStr

function filterPhoneNum(number) {
  let digits =  number.match(/[a-z0-9]/gi);
  let numberAlphNum = digits === null ? 0 : digits.join('')

  return analyzeNumber(numberAlphNum);
}

function analyzeNumber(numStr) {
  const BAD_NUM_STR = '0000000000';

  if (numStr.length < 10 || numStr.length > 11) {
    return BAD_NUM_STR;
  } else if (numStr.length === 11 && numStr[0] === '1') {
    return numStr.split('').slice(1).join('');
  } else if (numStr.length === 10) {
    return numStr;
  } else {
    return BAD_NUM_STR;
  }
}


console.log(filterPhoneNum('1235467774'));      // 1235467774
console.log(filterPhoneNum('123)546(7774.-'));  // 1235467774
console.log(filterPhoneNum('_12*35467774!'));   // 1235467774
console.log(filterPhoneNum(''));                // 0000000000
console.log(filterPhoneNum(' '));               // 0000000000
console.log(filterPhoneNum(' 35451'));          // 0000000000
console.log(filterPhoneNum('11235467774'));     // 1235467774
console.log(filterPhoneNum('91235467774'));     // 0000000000