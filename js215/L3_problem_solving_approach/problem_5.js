// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N x. .

encoding:
// create 3 lists and iterate through the string
// depending on idx push values into relevant arrays
// join arrays and add into each other

function encodeRFC(string, railCount) {
  let chars = string.match(/[a-z]/ig);
  if (chars === null || !!chars.length) return string;
  let rails = generateRails(railCount);

  rails = fillRails(rails, chars, false);

  return rails.map(arr => arr.join('')).join('');
}

function generateRails(railCount) {
  let iter = 0;
  let rails = [];
  while (iter < railCount) {
    rails.push([]);
    iter += 1;
  }
  return rails;
}

function fillRails(rails, refArray, boolIndex) {
  let iterator = 0;
  let direction = 1;
  refArray.forEach((el, i) => {
    if (iterator % (rails.length - 1) === 0 && i !==0) {
      direction = -1 * direction;
    }
    boolIndex ? rails[iterator].push(i) : rails[iterator].push(el);
    iterator += direction;
  });
  return rails;
}

function decodeRFC(code, railCount) {
  if (code.length <= 1) return code;

  let encryptionArr = [];
  let codeArr = code.split('');

  let rails = generateRails(railCount);

  rails = fillRails(rails, codeArr, true);

  let indexes = rails.flat();

  indexes.forEach(index => encryptionArr[index] = codeArr.shift());

  return encryptionArr.join('');
}

// console.log(encodeRFC('WE ARE DISCOVERED FLEE AT ONCE', 3));
// console.log(encodeRFC('HELLO', 2) === 'HLOEL');
// console.log(decodeRFC('WECRLTEERDSOEEFEAOCAIVDEN', 3));
// console.log(decodeRFC(encodeRFC('WE ARE DISCOVERED FLEE AT ONCE', 3), 3));
// console.log(decodeRFC(encodeRFC('WE ARE DISCOVERED FLEE AT ONCE', 4), 4));
// console.log(encodeRFC(' ', 3));
// console.log(decodeRFC('a', 3));