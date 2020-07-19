// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// Object.getPrototypeOf(qux) === baz;       // true
// Object.getPrototypeOf(baz) === bar;       // true
// Object.getPrototypeOf(bar) === foo;       // true

// console.log(foo.isPrototypeOf(qux));      // true - because foo is on qux's prototype chain
// console.log(baz.isPrototypeOf(qux));      // true - because baz is on qux's prototype chain

// // The Object.prototype object is at the end of the prototype chain for all JavaScript objects. If you don't create an object from a prototype, its prototype is the Object.prototype object:

// Object.getPrototypeOf(foo) === Object.prototype;      // true

// ------------------------------------------------------------------------------------------------

// PROBLEMS

// 1. Use the method we learned above to assign foo below to a new Object with prot as its prototype.

// let prot = {};

// let foo = // ?

// let foo = Object.create(prot);

// 2. Use getPrototypeOf to demonstrate the prototypal relationship between prot and foo.

// console.log(Object.getPrototypeOf(foo) === prot);

// 3. Use isPrototypeOf to demonstrate the prototypal relationship between prot and foo.

// console.log(prot.isPrototypeOf(foo));

// 4. What will the last two lines of the code below return? Why?

let prot = {};

let foo = Object.create(prot);

console.log(prot.isPrototypeOf(foo));
console.log(Object.prototype.isPrototypeOf(foo));

// Each line will return true. The first line returns true because we assign foo on line 3 a new object with prot set explicitly as its prototype. The second line returns true because of prototype chaining. The default prototype object, Object.prototype, is prot's object prototype since it was created as an Object literal. Because of the relationship between foo and prot, Object.prototype is on foo's prototype chain.