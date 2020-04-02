// USE let KEYWQRD TO DECLARE VARIALES

> let firstName
= undefined

> firstName
= undefined

// DECLARING CONSTANTS

> const firstName = 'Mitchell'
= undefined

> firstName
= Mitchell

> firstName = 'Joe'
TypeError: Assignment to constant variable.


// VARIABLE SCOPING

if (expression) {  // block starts at {
  doSomething();   // block body
}                  // block ends here


if (1 === 1) {
  let a = 'foo'
}

console.log(a); // ReferenceError: a is not defined


// VARIABLE DECLARED OUTSIDE SO IT IS AVAILABLE BOTH OUTSIDE AND INSIDE

let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);    // => 'bar'

// UNDECLARED VARIABLES HAVE GLOBAL SCOPE

p = 'foo';

// VARIABLE SHADOWING

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);   // RETURNS 'bar' because of VAR SHADOWING