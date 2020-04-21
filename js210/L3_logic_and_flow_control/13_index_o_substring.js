// Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

// The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

// The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

// Both functions return -1 if firstString does not contain the substring specified by secondString.

function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;
  var i;
  var j;

  for (i = 0; i <= limit; i += 1) {
    matchCount = 0;

    for (j = 0; j < secondString.length; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }
    if (matchCount === secondString.length) {
      return i;
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;
  var i;
  var j;

  for (i = limit; i >= limit; i -= 1) {
    matchCount = 0;

    for (j = 0; j < secondString.length; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }
    if (matchCount === secondString.length) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1