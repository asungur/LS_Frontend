// Write a function that takes two arguments:

// a string to be split
// a delimiter character
// The function logs the split strings to the console, as shown below:

function splitString(string, delimiter) {
  var i;
  var unit = '';

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(unit);
      unit = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      unit += string[i];
    }
  }
  if (unit) {
    console.log(unit);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello