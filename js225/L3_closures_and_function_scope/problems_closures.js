// Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every positive integer multiple of that number less than 100. Usage looks like this:

// function makeMultipleLister(number) {
//   return function() {
//     let num = number;
//     while (num < 100) {
//       console.log(num);
//       num += number;
//     }
//   }
// }
/* LS SOLUTION
function makeMultipleLister(number) {
  return function () {
    let i;
    for (i = number; i < 100; i += number) {
      console.log(i);
    }
  };
}
*/

// let lister = makeMultipleLister(13);
// lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91


// ----------------------------------------------------------------------------------------------

// Write a program that uses two functions, add and subtract, to manipulate a running total value. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. Usage looks like this:

// let val = 0;
// function add(num) {
//   val += num;
//   console.log(val);
// };
// function subtract(num) {
//   val -= num;
//   console.log(val);
// }

// add(1);
// 1
// add(42);
// 43
// subtract(39);
// 4
// add(6);
// 10

// ----------------------------------------------------------------------------------------------

// Write a function named later that takes two arguments: a function and an argument for that function. The return value should be a new function that calls the input function with the provided argument, like this:

// function later(func, funcArg) {
//   return function() {
//     func(funcArg);
//   };
// }

// let logWarning = later(console.log, 'The system is shutting down!');
// logWarning();
// The system is shutting down!

// ----------------------------------------------------------------------------------------------

// Given the following code:

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = // ?
// How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?