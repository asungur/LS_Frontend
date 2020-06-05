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

**Primitive Values** in Javascript are stored on the **stack**. Therefore, these values are immutable. This means that once a value is created it cannot be changed.

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

To sum up:
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

Function definitions wrap over the variable scope that is in effect. This is called creating a **closure**. Closures keep track of everything that is within the scope that closure is created.

This relationship between closures and the scope remains as long as the closure exists. This means that while the function is invoked the references can be accessed by the function.

```javascript
let operand = "test";

function modifier() {     // closure is created
  console.log(operand);   // 
```
 
Javascript uses **Lexical Scoping rules** to access variables.

When we create a function this defines a new scope regardless if the function is invoked or not. A javascript program consist of hierarchy of scopes. At the top of this hierarchy there is programs global scope. This scoping rule can be simplified by saying that **the source code defines the scope**.

Javascript searches variables starting from the bottom of the hierarchy. When a matchin variable is found the search stops. This allows lower scope to **shadow** the variables with the same name above the hierarchy.
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

* Name function expressions(useful for debugging):
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



## Assignments and Comparison

### Comparison

Comparison operators(`==` and `!=`) compare its operands and returns the result of the comparison in form of a boolean value `true` or `false`.
In case when operands of the comparison are of different types JavaScript does something called implicit type conversion. 
This often cause unexpected results, there fore JavaScript programmers use strict comparison operators (`===` and `!==`)

## Pure Functions and Side Effects
