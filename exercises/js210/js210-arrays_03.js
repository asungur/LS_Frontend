// In this exercise, you will learn more about Arrays by implementing your own version of the Array.prototype.concat method. Write a function that returns a new array composed of all values from the first array argument and the second array or value argument. Take note of the following specifications when writing your concat function.

// The first argument will always be an array.
// The second argument can be either an array or another value.
// The function should return a new array.
// The elements in the new array should be in the same order as they appear in the arguments.
// The function should copy any object references from the arguments into the new array — i.e., if you make a change to a reference object from one of the arguments after calling concat, those changes should show up in the output array as well.
// The function should copy the values of primitives (e.g., strings, numbers, and booleans).

function concat() {
  var arr = [];
  var currentArg;

  for (i = 0; i < arguments.length; i += 1) {
    currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (j = 0; j < currentArg.length; j += 1) {
        newArray [newArray.length] = currentArg[j];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }
  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = console.log(concat([2, 3], obj));
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }


// BUILT-IN METHOD

var myArray = [1, 2, 3];
var myOtherArray = ['a', 'b', 'c'];
var myObject = { obj: 'myObject' };

var newArray = myArray.concat(myOtherArray, myObject, 42);
console.log(newArray);        // [1, 2, 3, "a", "b", "c", { obj: "myObject" }, 42]
myObject.obj = 'yourObject';
console.log(newArray);        // [1, 2, 3, "a", "b", "c", { obj: "yourObject" }, 42]