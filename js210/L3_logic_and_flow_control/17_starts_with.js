// Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

function startsWith(string, searchString) {
  if (searchString.length > string.length) return false;
  if (searchString === '') return true;

  var comparison = true;
  var i;
  for (i = 0; i < searchString.length; i += 1) {
    if (searchString[i] !== string[i]) {
      comparison = false;
      break;
    }
  }
  return comparison;
}

// Shorter LS Solution
function startsWith(string, searchString) {
  var i;
  for (i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false