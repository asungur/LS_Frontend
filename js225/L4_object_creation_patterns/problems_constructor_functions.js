// 1. What does the following code log to the console?

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);

// ----------------------------------------------------------------------------------------------

// 2.What does the following code log to the console?

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.width);
// console.log(rect1.height);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// ----------------------------------------------------------------------------------------------

// 3.How do you fix this problem?

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.width);
// console.log(rect1.height);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// ----------------------------------------------------------------------------------------------

// 4.Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

// function Circle(r) {
//   this.r = r;
// }

// Circle.prototype.area = function() {
//   return Math.PI * this.radius * this.radius;
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// ----------------------------------------------------------------------------------------------

// 5.What will the following code log out and why?

// let ninja;

// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());
// Even though the swingSword method is defined on the prototype after the ninja object is created, the prototype chain lookup happens when the swingSword method is called on the object, and it can be found.


// ----------------------------------------------------------------------------------------------

// 6.What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());
// This will raise a TypeError. When the prototype is re-defined, ninja object was created. Therefore the prototype for ninja object will not have a method called swinSword
// LS:
// In this case, we didn't add a new method to the constructor function's prototype object by mutating it, but rather made it point to a different object. The ninja object, meanwhile, still inherited from the original prototype object, therefore it couldn't find a swingSword method anywhere on its prototype chain.

// ----------------------------------------------------------------------------------------------

// 6.Implement the method described in the comments below:

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung
// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// };

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// ----------------------------------------------------------------------------------------------

// 7.In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// // create a ninjaB object
// ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

// ----------------------------------------------------------------------------------------------

// SECOND SET

// 1.Follow the steps below:

// Create an object called shape that has a getType method.
// Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
// Add a new method to the prototype called getPerimeter.
// Test your implementation with the following code:

// let shape = {
//   getType() {
//     return this.getType;
//   },
// }

// function Triangle(a, b, c) {
//   this.type = 'triangle';
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }

// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };

// Triangle.prototype.constructor = Triangle;


// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"

// ----------------------------------------------------------------------------------------------

// 2.Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

// Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

// function User(first, last) {
//   this.first = first;
//   this.last = last;
//   this.name = this.first + ' ' + this.last;
//   return this;
// }

// function User(first, last){
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }


// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// ----------------------------------------------------------------------------------------------

// 3.Create a function that can create an object with a given object as its prototype, without using Object.create.

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true 

// ----------------------------------------------------------------------------------------------

// 4.Similar to the problem above, without using Object.create, create a begetObject method that you can call on any object to create an object inherited from it:

// Object.prototype.begetObject = function() {
//   function F() {}
//   F.prototype = this;
//   return new F();
// }

// let foo = {
//   a: 1,
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// ----------------------------------------------------------------------------------------------

// Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);

  let result = constructor.appl(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let odin = new Person('Jane', 'Tarzan');
odin.greeting();
// let john = neww(Person, ['John', 'Doe']);
// john.greeting();          // => Hello, John Doe
// john.constructor;         // Person(firstName, lastName) {...}