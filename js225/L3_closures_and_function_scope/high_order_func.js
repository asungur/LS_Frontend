// Higher-order functions either accept a function as an argument or return a function when invoked. In other words, higher-order functions work with other functions.

// To understand this concept, you must think of JavaScript functions as values; functions are objects. We know that they can take values as input and return a value as output. Thus, a higher-order function is one where either an input or output value is a function.

// So far, we've focused on higher-order functions that take a function as an argument, like the iteration methods for Array objects:

// function passed as an argument
// [1, 2, 3, 4].forEach(function(number) {
//   console.log(number);
// });
// What's new in this section are functions that return functions, such as this one:

// function as return value
// function helloFactory() {
//   return function() {
//     console.log('hi');
//   };
// }
// Here are some examples of helloFactory in use:

// > helloFactory();              // helloFactory() returns a function
// = function() {...}

// > helloFactory()();            // immediate function invocation of return value
// hi

// > let hello = helloFactory();  // storing returned function in a variable
// > hello();                     // ...and invoking it later
// = hi
// A higher-order function can both take a function as an argument and return a function. Consider the following function, timed, that records how long it takes another function to run:

function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}
// To show how this function works, let's start with a simple use case:

// > let timedHi = timed(function() { console.log('hi'); });
// > timedHi;
// = function() { ... }

// > timedHi();
// hi                            // logged by the function passed to timed()
// 0 ms have elapsed             // logged by timedHi
// Since the function we passed to timed ran so fast, timing how long it takes isn't useful. So let's use timed with a function that takes more time to run:

function loopy() {
  let sum = 0;
  let i;

  for (i = 1; i < 1000000000; i += 1) {
    sum += i;
  }

  console.log(sum);
}
// loopy sums every number from 1 to 1,000,000,000 and then logs the result:

// > loopy();
// 499999999067109000
// Let's use timed to see how long it takes:

timed(loopy)();           // immediate invocation of returned function
// 499999999067109000
// 952 ms have elapsed
// The exact timing varies based on your browser, computer, etc.

// As we saw above, timed returns a function. We can store a reference to the function in a variable and run it later:

let timedLoopy = timed(loopy);
timedLoopy();
// 499999999067109000
// 955 ms have elapsed