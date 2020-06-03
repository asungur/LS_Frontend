## Primitive Values, Types and Type Conversions
### Primitive Data Types
Five primitive data types(ES5) are:
* number
  * Javascript uses a floating point system to represent all numbers. There is no distinction as Integers and Floats (and other types such as double, real etc.) unlike other programming languages. 
  * Numbers support basic arithmetic operations ( `+`, `-`, `*`, `/`) 
  * Special number values:
    * `Infinitiy` is larger than any other number.
    * `-Infinity` is smaller than any other number.
    * `NaN` means "not a number". A mathematical operation encounters an error it returns this special value instead of logging an error.
    
* boolean
  * Represents truth-values of logic.
  * There are two possible boolean values: `true` and `false`.

* string
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
  * A specific character in a string can be achieved by using **bracket notation** or `String.prototype.charAt` method.
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
* null
* undefined

With ES6 two types are added:
* symbol
* BigInt

In JavaScript, in addition to primitive data types there is one compound data type:
* object

use `typeof` operator to get the data type of a value:
```Javascript
typeof 42;         // "number"
typeof 'odin';     // "string"
typeof undefined;  // "undefined"
```
### Primitive Values

`Primitive Values` in Javascript are stored on the **stack**. Therefore, these values are immutable. This means that once a value is created it cannot be changed.

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

To sum up:
1. Use explicit type coercions
2. Use strict equality operators

We can use different functions to perform the type conversion **explicitly**.
```javascript
String(20);         // '20' is returned
```
We called `String()`constructor as a function to convert number `20` into a string value. It is important to remember this conversion returns a new value and does not mutate the original value.


## Variable Scopes and Hoisting

```javascript
let testVariable;                            // variable decleration
testVariable = 'test value';                 // variable assignment
let testVariable2 = 'another test value ;    // variable decleration with an initialization assignment
```

## Function Declarations, Expressions and Scopes

**Expression** is any valid code that resolves to a value.

Examples of expressions:
```javascript
'test string';    // single string
5;                // single number
1 + 1;            // arithmetic operations that resolves to 2
existingVar = 2;  // assignments 
```




## Object Properties and Mutation

## Assignments and Comparison

### Comparison

Comparison operators(`==` and `!=`) compare its operands and returns the result of the comparison in form of a boolean value `true` or `false`.
In case when operands of the comparison are of different types JavaScript does something called implicit type conversion. 
This often cause unexpected results, there fore JavaScript programmers use strict comparison operators (`===` and `!==`)

## Pure Functions and Side Effects
