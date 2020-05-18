// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


const keepConsonant = (char)

function repeater(string) {
  let doubleString = '';

  for (let i = 0; i < string.length; i += 1) {
    doubleString += string[i] + string[i]
  }

  return doubleString;
}