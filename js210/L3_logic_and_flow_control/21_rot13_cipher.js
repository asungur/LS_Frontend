// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

// For each character in the original String:

// If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. So a becomes n. If you reach the end of the alphabet, return to the beginning. So o becomes b.
// Letter transformations preserve case. A becomes N while a becomes n.
// Don't modify characters that are not letters.

// Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

function rot13(string) {
  var LETTERS = 26;
  var alph = /[a-zA-Z]/;
  var downCase = /[a-z]/;
  var upCase = /[A-Z]/;

  var downCaseASCIILimit = "z".charCodeAt();
  var upCaseASCIILimit = "Z".charCodeAt();
  var cipher = '';
  var i;
  var charCode;

  for (i = 0; i < string.length; i += 1) {
    if (!alph.test(string[i])) {
      cipher += string[i];
      continue;
    }

    charCode = string.charCodeAt(i) + (LETTERS / 2)

    if (downCase.test(string[i]) && charCode > downCaseASCIILimit) {
      charCode -= LETTERS;
    } else if(upCase.test(string[i]) && charCode > upCaseASCIILimit) {
      charCode -= LETTERS;
    }

    cipher += String.fromCharCode(charCode);
  }
  return cipher;
}

// TEST 1
var test1 = 'Teachers open the door, but you must enter by yourself.';
var test1Cipher = 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.';

console.log(rot13(test1) === test1Cipher);
console.log(rot13(rot13(test1)) === test1);

// TEST 2
var test2 = 'adapitjij;sgspdiofg;pasiojg ;aiwgjsr;g [03i5]20qwe0-=utg\';';
var test2Cipher = 'nqncvgwvw;ftfcqvbst;cnfvbwt ;nvjtwfe;t [03v5]20djr0-=hgt\';';

console.log(rot13(test2) === test2Cipher);
console.log(rot13(rot13(test2)) === test2);

// TEST 3
var test3 = 'The ships hung in the sky in much the same way that bricks don\'t.'
var test3Cipher = 'Gur fuvcf uhat va gur fxl va zhpu gur fnzr jnl gung oevpxf qba\'g.';

console.log(rot13(test3) === test3Cipher);
console.log(rot13(rot13(test3)) === test3);