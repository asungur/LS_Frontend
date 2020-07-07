// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// console.log(wordToDigit('zero five three'));
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit(' What is going on with _five ?two six.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// input: string
// output: string

// define a data structure | five => 5 {}
// split or replacement | 



function wordToDigit(string) {
  const NUMBER_CONVERSION = [
    ['zero', '0'], ['one', '1'], ['two', '2'], ['three', '3'], ['four', '4'],
    ['five', '5'], ['six', '6'], ['seven', '7'], ['eight', '8'], ['nine', '9'] 
  ]

  NUMBER_CONVERSION.forEach(pair => {
    string = string.replace(new RegExp(pair[0], 'g'), pair[1]);
  });

  return string;
}