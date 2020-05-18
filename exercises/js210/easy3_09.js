// Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}




function wordSizes(sentence) {
  if (!sentence.length) return {};
  let words = sentence.split(' ');
  let counter = {};

  for (let word of words) {
    let analysisWord = removeNonLetters(word).toLowerCase();
    let size = String(analysisWord.length);
    counter[size] ? counter[size] += 1 : counter[size] = 1;
  }

  return counter;
}

function removeNonLetters(word) {
  let letters = /[a-zA-Z]/;
  let newWord = '';

  for (let i = 0; i < word.length; i += 1) {
    if (word[i].match(letters)) newWord += word[i];
  }

  return newWord;
}