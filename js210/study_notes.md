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






## Variable Scopes and Hoisting
## Function Declarations, Expressions and Scopes
## Object Properties and Mutation
### Primitive Values are Immutable

## Assignments and Comparison
## Pure Functions and Side Effects
