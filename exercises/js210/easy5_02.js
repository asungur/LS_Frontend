// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

function keepConsonant(char) {
  let regex = /[aeiou]|[^b-z]/i;

  return char.match(regex) ? '' : char ;
}

function doubleConsonants(string) {
  return [...string].map(char => char + keepConsonant(char)).join('');
}

