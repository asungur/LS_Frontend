// Arrays are heterogenous
> let myArray = [2, 'Pete', 2.99, 'another string']

// Arrays declared with const can be modified but reference array can not be reassigned
> const MyArray = [1, 2, 3]
> MyArray[1] = 5
> MyArray
= [1, 5, 3]

> MyArray = [4, 5, 6] // Uncaught TypeError: Assignment to constant variable.

// Adding elements with push
> array.push('a')
= 5               // the new length of the array

> array
= [ 1, 4, 3, 10, 'a' ]

> array.push(null, 'xyz')
= 7

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]

// Callback functions
let array = [1, 2, 3];
array.forEach(function (num) {
  console.log(num);
});
// returns undefined

// Outputs
1
2
3

// Map
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

// Strange behaviour on array length
> let arr = []
> arr.length = 3
> arr             // returns [ <3 empty items> ]
> arr[0]          // returns undefined
> arr.filter(element => element === undefined) // returns []
> arr.forEach(element => console.log(element)) // no output, but returns undefined
> arr[1] = 3
> arr             // returns [ <1 empty item>, 3, <1 empty item> ]
> arr.length      // 3
> arr.forEach(element => console.log(element)) // outputs 3
> Object.keys(arr) // ['1']

// Unset values
// unset values
var a = new Array( 3 );
var b = [];
b.length = 3;

// undefined
var c = [undefined, undefined, undefined]

a;                      // [ <3 empty items> ]
b;                      // [ <3 empty items> ]
c;                      // [ undefined, undefined, undefined ]

a[0] === undefined;     // true
b[0] === undefined;     // true

// Array equality
> [1, 2, 3] === [1, 2, 3]
= false

> let a = [1, 2, 3]
> let b = a
> a === b
= true

// array_equality.js
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // logs true
console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // logs false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // logs false

// Array includes
> let a = [1, 2, 3, 4, 5]
> a.includes(2)
= true

> a.includes(10)
= false
