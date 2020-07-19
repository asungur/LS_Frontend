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

function getDefiningObject(object, propKey) {
  // ...
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null