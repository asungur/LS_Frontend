// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M


const LETTER_BLOCKS = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['L', 'Y'],
  ['Z', 'M']
]

// sanitize the string (keep only alphabetic chars, convert all upcase)
// iterate over LETTER_BLOCKS and see if the word contains both values for any pair


function isBlockWord(string) {
  let arrStr = sanitizeString(string);
  let result = true;

  LETTER_BLOCKS.forEach(arr => {
    if (arrStr.indexOf(arr[0]) !== -1 && arrStr.indexOf(arr[1]) !== -1) {
      result = false;
    }
  });
  return result;
}

function sanitizeString(string) {
  return string.match(/[a-z]/ig).map(letter => letter.toUpperCase());
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('Bat_9* '))     // true