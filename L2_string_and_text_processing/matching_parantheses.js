// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

function isBalanced(string) {
  let counter = 0;
  let balance = true;
  string.split('').forEach(char => {
    if (char === '(') {
      counter += 1;
    } else if (char === ')') {
      counter -= 1;
    }

    if (counter < 0) {
      balance = false;
    }
  });

  return (balance && counter === 0);
}