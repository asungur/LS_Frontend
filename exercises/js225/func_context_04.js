// Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

// bind function
// to the object

// pass context object to the bind method

//returns new function (same on but hard bound to the context object)

// function myBind(func, contextObj) {
//   return function(...args) {
//     return func.apply(contextObj, args);
//   };
// }

// Our earlier implementation of the Function.prototype.bind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

// Alter the myBind function written in the previous exercise to support partial function application.


function myBind(func, contextObj, ...partialArgs) {
  return function(...args) {
    let fullArgs = partialArgs.concat(args);
    return func.apply(contextObj, fullArgs);
  };
}