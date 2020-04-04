// Creation of an object using object literal synthax
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};

// OR
> let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }

// Accessing specific values
// dot notation
> person.name
= 'Jane'

// bracket notation
> person['age']
= 37

// Primitive vs Objects
> let number = 20
> let newNumber = number + 1
> newNumber
= 21

> number
= 20

> let object = { a: 1, b: 2, c: 3 }
> object.c = object.c + 1
= 4

> object
= { a: 1, b: 2, c: 4 }

// Prototypes
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // logs 'Bob'

// ITERATING ON OBJECTS
// for/in loop
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}
// Bob
// 30
// 6 ft

// Objects own property
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}
// 3
// 4

// Iterating by using Object.keys
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};
let personKeys = Object.keys(person); // returns ['name', 'age', 'height']
personKeys.forEach(key => console.log(person[key]));
// Bob
// 30
// 6 ft

// Object.values
let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // logs [ 'Bob', 30, '6ft' ]

// Object.entries
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person));
// logs [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

// Object.assign
> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= { a: 'foo', b: 'bar' }

> objA = { a: 'foo' }
= undefined

> objB = { b: 'bar' }
= undefined

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }

> objA
= { a: 'foo' } // objA is not mutated because its not the first argument

> objB
= { b: 'bar' }