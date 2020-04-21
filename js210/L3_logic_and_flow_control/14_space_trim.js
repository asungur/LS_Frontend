// Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""

function trim(string) {
  var trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

function trimLeft(string) {
  var i;
  var strOut = '';
  var execute = false;

  for (i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      execute = true;
    }
    if (execute) {
      strOut += string[i];
    }
  }
  return strOut;
}


function trimRight(string) {
  var i;
  var strOut = '';
  var execute = false;

  for (i = string.length - 1; i >= 0 ; i -= 1) {
    if (string[i] !== ' ') {
      execute = true;
    }
    if (execute) {
      strOut = string[i] + strOut;
    }
  }
  return strOut;
}