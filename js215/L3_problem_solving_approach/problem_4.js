// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611

// for each character:
  // starting from the last available number find the first number that contains the character. (findRightHand)
// for each range:
  // starting from the last available number add all numbers that contains digits in the range
// convert all range representations into array of numbers (iterateLeftHand)
  // 1-3 [1, 2, 3]
  // 1:5:2 [1, 2, 3, 4, 5, 6, 7, . . . 12]

function shortHand(numStr) {
  let numArr = getItems(numStr);
  let values = [parseInt(numArr.shift(), 10)];

  numArr.forEach((el, idx, arr) => {
    let numEl = parseInt(el, 10);
    if (arr[idx - 1] === '>') {

      return true;
    } else if (el === '>') {

      let newValues = iterateLeftHand(lastVal(values), arr[idx + 1]);
      newValues.forEach(val => values.push(val));
    } else if (numEl > lastVal(values)) {

      values.push(numEl);
    } else if (numEl < lastVal(values)) {

      values.push(findRightHand(lastVal(values), el));
    }
  });

  return values;
}

function iterateLeftHand(lastVal, lookUpVal) {
  let insertions = [];
  let iter = String(lastVal);

  while (iter.lastIndexOf(lookUpVal) !== (iter.length - lookUpVal.length)) {
    iter = parseInt(iter, 10) + 1;
    insertions.push(iter);
    iter = String(iter);
  }
  return insertions;
}

function findRightHand(lastVal, lookUpVal) {
  let iter = String(lastVal);
  while(iter.lastIndexOf(lookUpVal) !== (iter.length - lookUpVal.length)) {
    iter = String(parseInt(iter, 10) + 1);
  }
  return parseInt(iter, 10);
}

function getItems(string) {
  return string.replace(/(\.\.|:|-)/g,', >, ').split(', ');
}

function lastVal(array) {
  return array[array.length - 1];
}



// console.log(shortHand("1, 3, 7, 2, 4, 1"));      // [1, 3, 7, 12, 14, 21]
// console.log(shortHand("1-3, 1-2"));              // [1, 2, 3, 11, 12]
// console.log(shortHand("1:5:2"));                 // [1, 2, 3, 4, 5, 6, ... 12]
// console.log(shortHand("104-2"));                 // [104, 105, ... 112]
// console.log(shortHand("104-02"));                // [104, 105, ... 202]
// console.log(shortHand("545, 64:11"));            // [545, 564, 565, .. 611]

// console.log(shortHand('1, 3, 7, 2, 4, 1')); // === '1, 3, 7, 12, 14, 21'
// console.log(shortHand('1-3, 1-2'));         // === '1, 2, 3, 11, 12'
// console.log(shortHand('1..3, 1..2'));       // === '1, 2, 3, 11, 12'
// console.log(shortHand('1:3, 1:2'));         // === '1, 2, 3, 11, 12'
// console.log(shortHand('1:5:2'));            // '1, 2, 3, 4, 5, 6, ... 12'
// console.log(shortHand('104-2'));            // '104, 105, ... 112'
// console.log(shortHand('104-02'));           // '104, 105, ... 202'
// console.log(shortHand('545, 64:11'));       // '545, 564, 565, .. 611'