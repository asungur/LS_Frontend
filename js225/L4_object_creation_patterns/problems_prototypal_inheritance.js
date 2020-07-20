// 1.What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a);

// -------------------------------------------------------------------------------------------

// 2.What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a);

// -------------------------------------------------------------------------------------------

// 3.Given the code below, do we know for certain that on the last line we are ultimately referencing a property owned by boo? How can we test that far is not delegating to boo?

// let boo = {};
// boo.myProp = 1;

// let far = Object.create(boo);

// // lots of code

// far.myProp;       // 1

// // CANNOT KNOW FOR SURE, WE CAN TEST VIA
// console.log(far.hasOwnProperty('myProp'));

// -------------------------------------------------------------------------------------------

// 1.Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return object;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// -------------------------------------------------------------------------------------------

// Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:

// function shallowCopy(object) {
//   let result = Object.create(Object.getPrototypeOf(object));
//   let prop;

//   for (prop in object) {
//     if (object.hasOwnProperty.call(object, prop)) {
//       result[prop] = object[prop];
//     }
//   }
//   return result;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// baz.hasOwnProperty('a');  // false
// baz.hasOwnProperty('b');  // false

// -------------------------------------------------------------------------------------------

// Write a function that extends an object (destination object) with contents from multiple objects (source objects).

function extend(...args) {
  let origin = args[0];

  for (let i = 1; i < args.length; i += 1) {
    for (prop in args[i]) {
      origin[prop] = args[i][prop];
    }
  }
  return origin;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe