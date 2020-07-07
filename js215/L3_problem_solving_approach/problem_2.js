// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.


// input: string
// output boolean

// clean up - get rid of all non-numeric chars

// iterate through numbers
// multiply each char with even index and calculate sum
// if sum % 10 is 0 return valid


function checkSum(numStr) {
  let analysisStr = sanitizeString(numStr);

  return totalSum(analysisStr) % 10 === 0;
}

function totalSum(string) {
  let sum = 0;

  for (let i = string.length - 1; i > 0; i -= 2) {
    let pairtotal= 0;

    pairtotal = pairSum(string[i - 1], string[i]);

    sum += pairtotal;
  }
  return sum;
}

function pairSum(secondDigit, firstDigit) {
  return ((parseInt(secondDigit, 10) * 2) % 9) + parseInt(firstDigit, 10);
}

function sanitizeString(string) {
  return string.match(/[0-9]/g);
}

console.log(checkSum('2323 2005 7766 3554'));      // true
console.log(checkSum('8763'));                     // true
console.log(checkSum('8%-763'));                   // true