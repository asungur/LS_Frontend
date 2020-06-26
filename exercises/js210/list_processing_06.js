// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:




console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

function substringsAtStart(string) {
  return string.split('').map((char, idx, arr) => arr.slice(0,idx + 1).join(''));
}

// function substrings(str) {
//   let newArr = [];
//   for (let v in str) {
//     newArr.push(substringsAtStart(str.slice(v)));
//   }
//   return newArr.flat();
// }

// LS SOLUTION
function substrings(string) {
  return string.split('').map((char, idx) => substringsAtStart(string.substring(idx))).reduce((result, array) => result.concat(array));
}
