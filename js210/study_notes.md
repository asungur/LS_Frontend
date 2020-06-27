## Primitive Values, Types and Type Conversions
### Primitive Data Types
Five primitive data types(ES5) are:
* `number`
  * Javascript uses a floating point system to represent all numbers. There is no distinction as Integers and Floats (and other types such as double, real etc.) unlike other programming languages. 
  * Numbers support basic arithmetic operations ( `+`, `-`, `*`, `/`) 
  * Special number values:
    * `Infinitiy` is larger than any other number.
    * `-Infinity` is smaller than any other number.
    * `NaN` means "not a number". A mathematical operation encounters an error it returns this special value instead of logging an error.
    
* `boolean`
  * Represents truth-values of logic.
  * There are two possible boolean values: `true` and `false`.

* `string`
  * A sequence of characters and is the data type used to represent text. Has no size limit
  * Can be masked by single or double quotation marks.
  * Can be concatenated using `+` operator.
  * Strings can hold any character that is in the UTF-16 character set. Formatting can be done using the escape sequences.
    * `\n`: New line
    * `\t`: Tab
    * `\r`: Carriage return
    * `\v`: Vertical tab
    * `\b`: Backspace
  * String concatenation can be done by using `+` operator.
    ```Javascript
    let string1 = 'Hello';
    let string2 = 'World';
    string1 + ' ' + string2 + '!';  // "Hello World!"
    ```
  * A specific character in a string can be accessed by using **bracket notation** or `String.prototype.charAt` method.
    ```Javascript
    let testString = 'Bravo';
    testString.charAt(2);   // "a"
    testString[2];          // "a"
    ```
  * Length property of the string can be accessed by `String.prototype.length` and tells the number of characters in a string.
    ```Javascript
    let testString = 'Bravo';
    testString.length;       // 5
    ```
* `null`
* `undefined`

With ES6 two types are added:
* `symbol`
* `BigInt`

In JavaScript, in addition to primitive data types there is one compound data type:
* `object`

use `typeof` operator to get the data type of a value:
```Javascript
typeof 42;         // "number"
typeof 'odin';     // "string"
typeof undefined;  // "undefined"
```
### Primitive Values

**Primitive Values** in Javascript are the data that stored on the **stack**. Therefore, these values are immutable. This means that once a value is created it cannot be changed.

**Reference Values** therefore are objects that are stored in the **heap**. Variables here work as pointers which points to a location in the memory where the object is stored.

For instance, we use certain commands that change the string values that already exist. However, these return *a new string value* and  do not mutate an existing string value. We can reassign the new value to an existing variable which is often confusing but it is not mutation.

```javascript
let testString = 'Problem';
testString.toLowerCase();      // returns "problem"
testString;                    // primitive value is not mutated, returns "Problem"
```

### Type Conversions

There are two ways of type conversions or **coercions** take place in JavaScript.

Implicit type coercions happens when the conversion is done by JavaScript to perform certain operations.
```javascript
'a' + 3;       // resolves  'a3', 3 is converted to string '3'
false == 0;    // resolves  true, false is converted to the number 0
```
String operator `+` is used for concatenation. Number `3` is converted into string `'3'` implicitly to perform string concatenation.
This feature of JavaScript makes debugging very hard since these operations do not log an error. Therefore, implicit type coercions should be avoided as much as possible.

We can use different functions to perform the type conversion **explicitly**.
```javascript
String(20);         // '20' is returned
```
We called `String()`constructor as a function to convert number `20` into a string value. It is important to remember this conversion returns a new value and does not mutate the original value.

Implicit type conversion and non-strict equality operators often cause bugs. You should:
1. Use explicit type coercions
2. Use strict equality operators

## Variable Scopes and Hoisting

```javascript
let testVariable;                            // variable decleration
testVariable = 'test value';                 // variable assignment
let testVariable2 = 'another test value ;    // variable decleration with an initialization assignment
```
Javascript executes variable(and function) declerations before it executes any other code. Therefore, when we declera a variable and assign a value. The assingment is executed later when Javascript procesess the code. This behaviour is called **hoisting**.

```javascript
console.log(name);      //logs undefined
var name = 'odin';
console.log(name);      // logs 'odin'
```
Is processed same as:
```javascript
var name;
console.log(name);
name = 'odin';
console.log(name);
```
Hoisting is also valid for function declerations
```javascript
console.log(testFunc());   //logs hello

function testFunc() {
 return 'hello';
}
```
Since function expressions follow variable hoisting rules, this applies function expression in a different way.
```javascript
console.log(testFunc());    //Uncaught TypeError

var testFunc = function () {
 return 'hello';
};
```
This code is executed equivalent to:
```javascript
var testFunc;
console.log(testFunc());    //Uncaught TypeError: testFunc is not a function
testFunc = function () {
 return 'hello';
}
```
Function declarations are executed before variable declarations.

### Usage of `let` and `var`

`let` is introduced at ES6 to simplify scoping and hoisting rules of `var` which was confusing for many developers and were main source of many bugs. There are a couple of differences between the way these two keywords declare a variable.

One difference is the scoping rules. Variables declared by `var` keyword are function scoped(or globally scoped) while `let` variables are scoped to the enclosing block denoted by { } ( the block scope).

```javascript
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar);

  {
    let baz = "Bazz";
    console.log(baz);
  }

  console.log(baz); // ReferenceError
}

run();
```
Variables declared with `var` keyword are hoisted (initialized with `undefined`) before the code is run. Where as variables initialized with `let` variables initialized when their definition is evaluated.

```javascript
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();
```
```javascript
function checkHoisting() {
  console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}

checkHoisting();
```


## Function Declarations, Expressions and Scopes
### Expressions and Functions

Examples of expressions:
```javascript
'test string';    // single string
5;                // single number
1 + 1;            // arithmetic operations that resolves to 2
existingVar = 2;  // assignments 
```
**Expression** is any valid code that resolves to a value.

Programmers often benefit from reusing a piece of code instead of copy pasting the same code again and again. These are called **procedures** and is common in most of the programming languages. Procedures allows programmers to define the code that they want to reuse and access it repeatedly from the program.

Javascript use the term **functions** to refer to these *procedures*.


### Function Decleration and Invocation

Similar to variables functions must be declared before using them. Function declaration requires:
* `function` keyword.
* name of the function 
* list of comma separated parameters inside brackets (can be empty)
* function body

```javascript
function functionName(functionParameter) {
  // function block
  return "return value";
}
```

Functions invoked by calling the function name with `()`
```javascript
function test1() {
 console.log('It works');
 }
 test1();
 ```
 Functions can be reassigned to a different local variable(functions are also local variables)
 ```javascript
 let test2 = test1;
 test2();      // "It works"
 }
 ```
### Function Scope and Lexical Scoping

A variable's scope is the portion of the program where the variable can be accessed by name. Variable scoping define the rules of how to access predefined values. In Javascript, a function decleration creates a new variable scope.

```javascript
// variable defined in global scope
let testVariable = 'Odin';

function scoper1() {
// function scope(1st level - scoper1)
  function scoper2() {
  // function scope(2nd level - scoper2)
    console.log(testVariable);
  }
  scoper2();
}
scoper1();
}
```

Function definitions wrap over the variable scope that is in effect. This is called creating a **closure**. Closures keep track of everything that is within the scope when closure is created.

This relationship between closures and the scope remains as long as the closure exists. This means that while the function is invoked, the references can be accessed by the function.

```javascript
let operand = "test";

function modifier() {     // closure is created
  console.log(operand);   //
}
```
 
Javascript uses **Lexical Scoping rules** to access variables.

When we create a function this defines a new scope regardless if the function is invoked or not. A javascript program consist of hierarchy of scopes. At the top of this hierarchy there is programs global scope. This scoping rule can be simplified by saying that **the source code defines the scope**.

Javascript searches variables starting from the bottom of the hierarchy. When a matching variable is found the search stops. This allows lower scope to **shadow** the variables with the same name above the hierarchy.
```javascript
var car1 = 'camry';

function garage() {
  var car1 = 'corolla';
  var car2 = 'fiesta'
  console.log('car list: ' + car1 + ', ' + car2);
}

garage();     // logs: "car list: corolla, fiesta"
```
when `garage` function is invoked, as part of `console.log()` function, `car1` variable is searched. Since this variable is declared inside the function scope, this shadows the variable declared with the same name in global scope.

### Function Expression

Function declerations(function statement) defines a variable (type of which is `function`). Function declerations do not require a variable assignment. Function declerations are similar to variable declerations, the function name is the variable. Function declerations have to start with the keyword `function`.

```javascript
function testFunc() {
  return 'hello';
}
console.log(typeof testFunc);    // function
```
Another way of defining functions is **function expressions**. A typical example is defining anonymous functions and assign it to a variable.
```javascript
let testFunc = function () {
 return 'hello';
}
console.log(typeof testFunc);  // function
```

Other examples of **function expressions**:

* Named function expressions(useful for debugging):
 ```javascript
let testFunc = function foo() {
 return 'hello';
}
console.log(typeof testFunc);  // function
console.log(typeof foo);       // Uncaught ReferenceError: foo is not defined
```
* Also function expression(remember function decleration has to **start with keyword `function`**:
```javascript
(function testFunc() {
 return 'hello';
})
console.log(typeof testFunc);  // function
```

## Object Properties and Mutation

Simple object literal looks like this:
```javascript
let myObj = {
 prop1: 'sample data',
 prop2: 'sample data',
 method1: function () {},
};
```
There are two benefits of using a comma after the first property:
* Allows us to reposition properties freely without worrying about adding commas before/after rearragenment.
* Adding a new property does not show additional line as changed in `git diff`.

With ES6 writing methods calls are simplified. This practical way is called **compact method synthax**.
```javascript
let myObj = {
 foo: function (par) {
  console.log('hello ${par}');
 },
};
```
now can be written as
```javascript
let myObj = {
 foo(par) {
  console.log('hello ${par}'};
 },
}
```

### Built-in Objects vs Primitive Values

Some built-in objects that Javascript provides are `String`, `Array`, `Object`, `Math`, `Date`.
From MDN: *In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods.* 
Therefore, when we call a `String.prototype` method on a string, javascript does a temporary implicit coercion to `String` object type. This can be tracked by using `typeof` operator.

```javascript
let primitiveString = 'Hello';
typeof test1;                                // "string"(primitive type)

let objectString = new String('Hello');
typeof objectString;                         // "object"(string object)

primitiveString.toUpperCase();               // "HELLO" primitive type temporarily coerced
objectString.toUpperCase();                  // "HELLO" 

typeof primitiveString;                      // "string"
typeof objectString;                         // "object"
```
### Object Properties and Methods

In JavaScript objects are collection of **data** and **behavior**. *Data* consist of **attributes of objects** where as *behaviour* is **functions** that are part of the object. *Properties* consist of **key(or name)-value pairs**. When the value part of the property is a function we call these **methods**.


```javascript
let cars = [ 'toyota', 'mazda', 'tesla' ];

cars.length;                          // dot notation to access 'length' property

'audi'.length;                        // primitive value temporarily coerced into 'String' object type.

cars.length = 1;                      // dot notation can be used to set a new value for a property.

cars;                                 // [ 'toyota' ];

'xxa-123'.match(/[a-z]/g);            // methods are also object properties and called with appended parantheses
```

In the last example above we called `String.prototype.match` method which  property of a string object. Methods can be called with dot notation appended by parantheses, between which we can pass arguments to the method call similar to a function call.

Property naming rules are quite simple in JavaScript, this makes everything hard to understand sometimes.
*Key(or name)* of a property can be any valid string. *Value* of a property can be any valid expression.

```javascript
let myObj = {                        
 x: 10,                             // x is a string with quotes omitted
 'prop1: 4 + 3,                     // value can be any expression
 'longer prop': 'string value',     // multi word string works
 false: false,                      // property name will be converted to string 'false'
 obj2: {
  year: 1990,
  model: 'corolla',
 },
 myFunc: function () {              // function expression can be property value
  return true;
 },
 myFunc2() {                        // compact method synthax
  return 5;
 },
};

Property values can be accessed by using **dot notation** or **bracket notation**.
```javascript
let myObj = {
 prop1: 'val1',
 prop2: 'val2',
};

myObj.prop1;      // "val1", dot notation
myObj['prop2'];   // "val2", bracket notation
myObj.prop3;      // undefined when property is not defined

let myObj = {                        
 x: 10,
 'prop1': 4 + 3,
 'prop2': 'test',
 'longer prop': 'string value',     
 false: false,                      
 obj2: {
  year: 1990,
  model: 'corolla',
 },
 myFunc: function () {
  return true;
 },
 myFunc2() {
  return 5;
 },
};

myObj['longer prop'];       // "string value", use bracket notation when property name is an invalid identifier
myObj['prop' + '2'];        // "test", bracket notation can take expressions
let var1 = 'prop2';
myObj[var1];                // "test", bracket notation works with variables since they are expressions
myObj.obj2.year;            // chaining dot notations to access nested object properties
myObj.myFunc();             // true, method call 'myFunc'

```

Both *dot notation* or *bracket notation* can be used to add a new property
```javascript
let myObj = {];

myObj.prop1 = 'testl';
myObj.prop1;                    // "test1"

myObj['longer prop'] = 'test2';
myObj['longer prop'];           // "test2"

myObj;                          // { prop1: "test1", "longer prop": "test2" }

delete myObj.prop1              // use reserved keyword delete to delete properties
```

### Mutability of Values and Objects

As we know from the data types, primitive values are *immutable* where as objects are *mutable*. This means:

* Primitive values can not be modified, such operations always return a new value of the same primitive type.
* Objects can be modified. To be more specific we access the data that is contained in the objects and change them.

```javascript
let myString = 'locale';       // variable assignment to a primitive value
myVar.toUpperCase();           // "LOCALE" function returns a new primitive value
myVar;                         // "locale" original primitive value that is assigned to variable is unchanged

let myArr = [ 'l', 'o', 'c', 'a', 'l', 'e' ];   // variable assignment to array (object type)
myArr[1] = myArr[1].toUpperCase();              // myArr[1] is changed therefore myArr object is mutated;
```

## Assignments and Comparison

### Comparison

Comparison operators(`==` and `!=`) compare its operands and returns the result of the comparison in form of a boolean value `true` or `false`.
In case when operands of the comparison are of different types JavaScript does something called implicit type conversion. 
This often cause unexpected results, there fore JavaScript programmers use strict comparison operators (`===` and `!==`)

## Pure Functions and Side Effects

Apart from the `return` values functions can have secondary uses. This can be as simple as mutating the Objects passed in as arguments or modifying an existing variable in outer scope, all these changes called Function's **side effects**.

Functions without side effects are called **pure functions**. Pure functions(also) always return values and are expected to return the same values with the same arguments passed in.

Simple example below is not a pure function since it does not return the same value with the same arguments passed in(and it has side effects)
```javascript
let iterator = 'abcde';
function notPure(str) {
 iterator += str;
 return iterator;
}

notPure('f');   // "abcdef"
notPure('f');   // "abcdeff"
```
Function below gives the same result with the same arguments passed in; However, it has side effects therefore not a pure function.
```javascript
function cleanArr(array) {
 array.length = 0;
 return array;
}
```
One good practice to avoid confusion on side effects is to pass in the "to be modified" variables as arguments so other people parsing the code could identify any modifications easier.
```javascript
let cars = ['corolla', 'tesla'];
function addElement(element) {
 cars.push(element);
 return cars;
}                               
addElement('mazda');         // ['corolla', 'tesla', 'mazda']
cars;                        // ['corolla', 'tesla', 'mazda']
```
This is pretty confusing arrangement, especially if the cars is defined very early in the code, surely it will raise question marks.
```javascript
let cars = ['corolla', 'tesla'];
function addElement(element, array) {
 array.push(element);
 return array;
}                         
addElement('mazda', cars);   // ['corolla', 'tesla', 'mazda']
cars;                        // ['corolla', 'tesla', 'mazda']
```
