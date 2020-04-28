// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations. For example:

// var string = 'A';
// asciiNumeric = string.charCodeAt(0);         // 65
// asciiNumeric += 32;
// string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

function toLowerCase(string) {
  var lowcaseStr = '';
  var i;
  for (i = 0; i < string.length; i += 1) {
    asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
    }
    lowcaseStr += String.fromCharCode(asciiNumeric);
  }
  return lowcaseStr;
}

// LS Solution
function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;
  var i;

  for (i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

// Built-in Method

'miXedCase1Word'.toLowerCase();    // returns "mixedcase1word"
'miXedCase1Word'.toUpperCase();    // returns "MIXEDCASE1WORD"