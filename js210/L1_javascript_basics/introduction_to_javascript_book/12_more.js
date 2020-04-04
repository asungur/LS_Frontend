// Variables as pointers
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5

// 
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]

//
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]

//
> let g = ['a', 'b', 'c']
> let h = g
> g[1] = 'x'
> g
= [ 'a', 'x', 'c' ]

> h
= [ 'a', 'x', 'c' ]

// Method chaining
let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names);
// outputs: HANSON, PETE

// Regex
function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // We have a match! a,e,a
has_a_or_e("football");   // We have a match! a
has_a_or_e("hockey");     // We have a match! e
has_a_or_e("golf");       // No match here.

// Math Object
> Math.sqrt(36)
= 6

> Math.sqrt(2)
= 1.4142135623730951

// Dates
> let date = new Date('December 25, 2012')
> date.getDay()
= 2

function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // logs Tuesday

// Exception handling
try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error has occurred. do something about it here.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes even if an exception occurs.
}

// EXAMPLE on exception handling
let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
});

// Log output
// bob's name has 3 letters in it.
// joe's name has 3 letters in it.
// steve's name has 5 letters in it.
// Something went wrong
// frank's name has 5 letters in it.

// EXAMPLE of raising your own exceptions
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  // handle case where the argument really is a number
}