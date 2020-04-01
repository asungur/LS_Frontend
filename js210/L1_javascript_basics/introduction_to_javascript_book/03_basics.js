// WAY TO DEAL WITH SINGLE/DOUBLE QUOTES TOGETHER
> "He said, 'Hi there!'"    // with double quotes
= "He said, 'Hi there!'"

> 'He said, \'Hi there!\''  // with single quotes and escaping
= "He said, 'Hi there!'"

> 'He said, "Hi there!"'    // with single quotes
= 'He said, "Hi there!"'

> "He said, \"Hi there!\""  // with double quotes and escaping
= 'He said, "Hi there!"'

// STRING INTERPOLATION
> `5 plus 5 equals ${5 + 5}`
= '5 plus 5 equals 10'

// SINGLE TYPE OF NUMBER DATA TYPE IN JS (no float. integer)
// Examples of numbers
1, 2, -3, 4.5, -6.77, 234891234

// BOOLEANs either true or false
> let toggleOn = true
= undefined

> let sessionActive = false
= undefined

// UNDEFINED represents absence of any value
> console.log("Hello, World!")
Hello, World!
= undefined

> let foo
= undefined

> foo
= undefined

> let bar = 3
= undefined

> bar
= 3

// NULL is similar to undefined. USe null if you are planning to return this value explicitly
> let foo = null

// The typeof Operator
> typeof 1
= 'number'

> typeof 'foo'
= 'string'

> typeof true
= 'boolean'

> typeof undefined
= 'undefined'

> typeof null
= 'object'

// EQUALITY COMPARISON
> 42 === 42
= true

> 42 === 43
= false

> 'foo' === 'foo'   // It works with strings too
= true

> 'FOO' === 'foo'   // Case is different
= false

// STRING CONCATENATION
> 'foo' + 'bar'
= 'foobar'

//EDGE CASE STRING CONCATENATION (implicit type coercion)
> '1' + 2
= '12'

// NaN (Not a Number)
> typeof NaN
= 'number'

//EXPLICIT COERCION
> Number('1')
= 1


