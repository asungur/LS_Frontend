// Hoisting variable declarations
console.log(a);  // Will this code execute? What will it log?
var a = 123;
var b = 456;
// is equivalent to:
var a;           // hoisted to the top of the global scope
var b;

console.log(a);  // logs `undefined`
a = 123;
b = 456;

// Hoisting for function declerations
console.log(hello());

function hello() {
  return 'hello world';
}
// is equivalent to:
function hello() {
  return 'hello world';
}

console.log(hello());      // logs "hello world"

// Hoisting for function expressions
console.log(hello());

var hello = function () {
  return 'hello world';
};
// is equivalent to:
var hello;

console.log(hello());    // raises "Uncaught TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};

// Hoisting variable and function declerations:
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
// is equivalent to:
function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';



// BEST PRACTICES:

// 1. Always declaret variables at the top of their scope:
function foo() {
  var a = 1;
  var b = 'hello';
  var c;

  ...
}

// 2. Always declare functions before calling them:
function foo() {
  return 'hello';
}

foo();