// Method Losing Context when Taken Out of Object
// If you remove a method from its containing object and execute it, it loses its context:

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// let foo = john.greetings;
// foo();

// // => hello, undefined undefined
// You could use foo.call(john) to restore the context, but what happens if you don't want to execute the function right away, or you need to pass it to another function? By the time you're ready to call foo, john may be out of scope.

// function repeatThreeTimes(func) {
//   func();       // can't do func.call(john), out of scope
//   func();
//   func();
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings); //
// }

// foo();

// // => hello, undefined undefined
// // => hello, undefined undefined
// // => hello, undefined undefined
// You can also update the receiving function (repeatThreeTimes) by adding an extra parameter to the function and pass in the desired context:

// function repeatThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john);
// }

// foo();

// // hello, John Doe
// // hello, John Doe
// // hello, John Doe
// You see this kind of code often with JavaScript's built-in methods, such as Array.prototype.forEach. These methods let you specify an optional thisArg argument as the context object (value of this) that the function should use.

// What happens, though, if you can't update the function or can't supply a context object? Then you need a different approach. Hard binding with bind often works:

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings.bind(john));
// }

// foo();

// // => hello, John Doe
// // => hello, John Doe
// // => hello, John Doe