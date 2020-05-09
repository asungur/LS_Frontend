// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

function repeatedCharacters(string) {
  string = string.toLowerCase();
  let charCount = {}
  for (let i = 0; i < string.length; i += 1) {
    if (charCount[string[i]]) {
      charCount[string[i]] += 1;
    } else {
      charCount[string[i]] = 1;
    }
  }
  for (key in charCount) {
    if (charCount[key] === 1) delete charCount[key];
  }
  return charCount;
}