// Write a function that returns a substring of a string based on a starting index and length.

function substr(string, start, length) {
  var newString = '';
  var index;
  var i;

  if (start < 0) {
    start = string.length + start;
  }

  for (i = 0; i < length; i += 1) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""

// Built-in method
string.substr(2, 4);    // "llo "
string.substr(-3, 2);   // "rl"
string.substr(8, 20);   // "rld"
string.substr(0, -20);  // ""
string.substr(0, 0);    // ""
string.substr(1);       // "ello world"
                        // goes to the end of the string if the second arg is omitted