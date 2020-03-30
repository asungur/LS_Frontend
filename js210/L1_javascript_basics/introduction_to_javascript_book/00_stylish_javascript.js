// STYLISH JAVASCRIPT  - FROM LS BOOK

// INLINE COMMENT

/*
MULTILINE
COMMENT
*/

// camelCase for variable and function naming

let answerToUltimateQuestion = 42; // initializing a variable
function fourScoreAndSevenYearsAgo() { // defining a function
      // do something
}

// PascalCase for constructor functions

function DomesticCat(name) { // defining a function
  // do something
}

// Uppercase for CONST values (values that dont change)

const INTEREST_RATE = 0.0525;
const FOUR = 'four';

// Leave a space between the function call and the curly brackets

// bad
function test(){
  // do something
 }
 
 // bad
 function test()
 {
   // do something
 }
 
 // good
 function test() {
   // do something
 }

 // Use spaces between operators

 // bad
let sum=x+5;

// good
let sum = x + 5;

// ON SEMICOLONS

// You can terminate each line with a semicolon apart from curly brackets or empty spaces. It is good practice and makes easy to code

let x = 3;
let y = 5;

if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}

// However this is not neccessary. JS automatically inserts semicoons where it needs them.

let x = 3
let y = 5

if (x === y) {
  console.log("x is equal to y")
} else {
  console.log("x is not equal to y")
}

// These two styles are called traditional vs REPL style

// Traditional

function greeting() {
  console.log('Get ready!');
}

greeting(); // => Get ready!

// REPL style

> greeting()
Get ready!   // console output
= undefined  // return value of greeting();

> 2 + 2
= 4          // return value of 2 + 2