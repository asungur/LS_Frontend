// Examine this code:

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar();
//   },
// };

// obj.foo();        // => undefined undefined
// Your instincts may tell you that this code will log "hello world" to the console. Your instincts are wrong here. Even though foo executes within the obj context, the call to bar on line 9 does not provide an explicit context, which means that JavaScript binds the global object to the function. As a result, this on line 6 is the global object, not obj.

// This trap is insidious and well-known. Most developers consider it to be a mistake in the language design. If we provide the context to call foo, then the context should propagate to its internal functions. It doesn't, though, and it's hard to imagine how binding the function to the global object is ever useful.

// Let's look at some solutions to this problem:

// Solution 1: Preserve Context with a Local Variable in the Lexical Scope
// One common approach is the let self = this or let that = this fix. You save this in a variable named self or that before calling the function, then reference the variable in the function.

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     let self = this;

//     function bar() {
//       console.log(self.a + ' ' + self.b);
//     }

//     bar();
//   }
// };

// obj.foo();
// >hello world

// Solution 2: Pass the Context to Internal Functions
// You can also pass the context object to the function with call or apply, as seen here on line 9:

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.call(this);
//   }
// };

// obj.foo();
// >hello world

// Solution 3: Bind the Context with a Function Expression
// You can use bind when you define the function to provide a permanent context to bar. Note that you must call bind with a function expression, not a function declaration; using bind with a function declaration results in an error.

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this);

//     // some lines of code

//     bar();

//     // more lines of code

//     bar();

//     // ...
//   }
// };

// obj.foo();
// >hello world
// >hello world
// One advantage of using bind is that you can do it once and then call it as often as you want without explicitly providing a context.