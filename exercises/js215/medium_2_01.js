// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(string) {
  let chars = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  string.split('').forEach(char => {
    if (char.match(/[A-Z]/)) {
      chars.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      chars.lowercase += 1;
    } else {
      chars.neither += 1;
    }
  });

  Object.keys(chars).forEach(key => {
    chars[key] = ((chars[key]  / string.length) * 100).toFixed(2);
  })

  return chars;
}

// LS SOLUTION
function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}