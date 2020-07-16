/*
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
In this example, we call repeatThreeTimes with a function argument that contains this. repeatThreeTimes calls its argument three times, but each time it does so without an explicit context. As we've learned, this means the context is the global object. Thus, this inside the function is the global object, not john.
*/
/*
If you think that this problem happens infrequently, consider this code:

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined
It looks simple enough; the code loops over an array and logs some information to the console. The problem, though, is that forEach executes the anonymous function passed to it, so it gets executed with the global object as context. Once again, this has the wrong value, and the function doesn't do what we want.

This problem is easy to fix. You can use the same solutions we used to solve the problem in the previous assignment.
*/
/*
Solution 1: Use a local variable in the lexical scope to store this
let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
*/
/*
Solution 2: Bind the argument function with the surrounding context
let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
*/
/*
Solution 3: Use the optional thisArg argument
Some methods that take function arguments allow an optional argument that defines the context to use when executing the function. Array.prototype.forEach, for instance, has an optional thisArg argument for the context. This argument makes it easy to work around this context loss problem.

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
*/
/*
Arrrow functions do not have a this binding. Instead of this being dependent on the location of the function invocation, JavaScript resolves it by looking at the enclosing scopes.

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    [1, 2, 3].forEach((number) => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
this resolves to obj which is the immediately enclosing scope.
*/