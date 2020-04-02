// conditional.js
// Run this code in your browser with an HTML file

let a = prompt('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}

// OTHER VALID FORMS OF IF - ELSE
// Example 1
if (x === 3) {
  console.log("x is 3");
}

// Example 2
if (x === 3) {
  console.log("x is 3");
} else {
  console.log("x is NOT 3");
}

// Example 3
if (x === 3) console.log("x is 3");

// Example 4
if (x === 3)
  console.log("x is 3");

// Example 5
if (x === 3)
  console.log("x is 3");
else
  console.log("x is NOT 3");

// Example 6
if (x === 3) {
  console.log('x is 3');
} else {
  if (x === 4) {
    console.log('x is 4');
  } else {
    console.log('x is NOT 3 or 4');
  }
}

// Example 7
if (x === 3) {
  console.log("x is 3");
} else if (x === 4) {
  console.log("x is 4");
} else {
  console.log('x is NOT 3 or 4');
}

if (x === 3)
  console.log('x is 3');
  console.log('x is an odd number'); // THIS LINE IS NOT PART OF IF STATEMENT

  // TRUTHINESS AND LOGICAL OPERATORS

  > 3 && 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' && 3  // last evaluated operand is 3
= 3

> 0 && 'foo'  // last evaluated operand is 0
= 0

> 'foo' && 0  // last evaluated operand is 0
= 0

> 3 || 'foo'  // last evaluated operand is 3
= 3

> 'foo' || 3  // last evaluated operand is 'foo'
= 'foo'

> 0 || 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' || 0  // last evaluated operand is 'foo'
= 'foo'

> '' || 0     // last evaluated operand is 0
= 0

// ASSIGNING TERNARY EXPRESSION AS A VALUE TO A VARIABLE
> let message = true ? 'this is true' : 'this is not true'
= undefined

> message
= 'this is true'

> console.log(false ? 'this is true' : 'this is not true')
this is not true
= undefined

// USING FALL THROUGHS TO COMBINE CASES
let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}