// Write a function named greet that takes two arguments and logs a greeting:

// greet('howdy', 'Joe');
// Howdy, Joe!
// greet('good morning', 'Sue');
// Good morning, Sue!

function greet(message, name) {
  let formattedMessage = message[0].toUpperCase() + message.slice(1);
  console.log(formattedMessage + ', ' + name + '!');
}

// Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!