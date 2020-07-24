# JS225

## Objects

- **Organizing code into appropriate objects**
    - Refresher on Objects: In JavaScript objects are collection of **data** and **behavior**. Data consist of **attributes of objects** where as *behavior* is **functions** that are part of the object. *Properties* consist of **key(or name)-value pairs**. When the value part of the property is a function we call these **methods**.
    - In JavaScript, Objects are used to organize **related data** and **behavior**. This functionality of using Objects for organizing code becomes more impactful as the size of the application increases where we use multiple instances of an Object.
    - Objects organize code in **property name/value pair**s. Property names are always values of `String` primitive type which references to **values**.
    - **Values** can be primitives and other objects(including functions and arrays).

    ```jsx
    let album = {
    	numOfPlays: 0,
    	archived: false,
    	name: 'In Absentia',
    	artist: 'Porcupine Tree',
    	studio: 'Avator Studios',
    	release: '2002',
    	genre: 'Progressive Rock',
    	rating: '8',
    	readTag() {
    		console.log(this.name + ' by ' + this.artist);
    		console.log('Released by' + this.studio + ' in ' + this.release);
    		console.log('Genre: ' + this.genre);
    		console.log('Rating: ' + this.rating);
    	},
    	archive() {
    		this.archive = true;
    	},
    	play() {
    		this.numOfPlays += 1;
    		console.log('Playing' + this.name + ' by ' + this.artist);
    	},
    };

    album.readTag();
    album.play();
    album.archive();
    ```

    - Above an object created using object literal syntax and referenced to `album`  variable. The `album` object has 11 properties:
        - 1 is referenced to `number` value
        - 1 is referenced to `boolean` value
        - 6 are referenced to `string` values
        - 3 are referenced to different function objects.
    - `this` keyword inside functions are referenced to context. When we invoke a `readTag` for example on line XX on `album` as it's *implicit context,* `this` keyword will be pointing the `album` object itself. Therefore, different properties of `album`
    - This is an example of method invocation. `readTag` function is a property of `album` object, so it can be invoked using *method invocation syntax*. Unless it's explicitly stated in invocation, calling object will be used as the *context*.
- **Object factories**
    - **Object factories** or **Object factory functions** are functions that *create objects*, *define properties* and *return these objects* in object literal syntax(most common way). This strategy of object creation prevents code repetition. We can create as many instances of an object as we want, each of which **shares all the behavior of the initial object**.

    ```jsx
    function createAlbum(artist, name, studio, release, genre) {
    	return { 
    		numOfPlays: 0,
    		archived: false,
    		name: name,
    		artist: artist,
    		studio: studio,
    		release: release,
    		genre: genre,
    		readTag() {
    			console.log(this.name + ' by ' + this.artist);
    			console.log('Released by ' + this.studio + ' in ' + this.release);
    			console.log('Genre: ' + this.genre);
    		},
    		archive() {
    			this.archive = true;
    		},
    		play() {
    			this.numOfPlays += 1;
    			console.log('Playing' + this.name + ' by ' + this.artist);
    		},
    	};
    }

    let inAbsentia = createAlbum('Porcupine Tree', 'In Absentia', 'Avatar Studios', '2002', 'Progressive Rock' );
    let deadwing = createAlbum('Porcupine Tree', 'Deadwing', 'KScope', '2005', 'Progressive Rock' );
                                  

    console.log(inAbsentia.artist);   // "Porcupine Tree"
    inAbsentia.readTag();             // In Absentia by Porcupine tree.....
    console.log(deadwing.studio);     // Avatar Studios
    console.log(inAbsentia.studio);   // KScope
    ```

    - Above object factory function `createAlbum` wraps around the object that is used in previous example `album` .
    - We can create as many instances as we want using `createAlbum` function. This is an efficient way of creating objects without code duplication. Method calls on different objects will return different results using the data that is assigned on object creation. However, there are some disadvantages of this approach.
    - Firstly, every object created with a factory function will have it's own copy of the **behavior**. It might be redundant to have certain methods depending on the use of the object. Objects created with this approach will not be sharing a behavior, but rather each object will contain a **copy of each method**. To modify behavior of the instances, we need to modify each object one by one.
    - Also, It is difficult to track the originator of the objects created with this approach.

## Determining/setting function execution context (`this`)

- **Introduction**

    In JavaScript functions declared as objects (*first class functions*) without an execution context. The execution context is an object that is assigned **at the** **function invocation**(when) depending on **how the function is invoked**(how). Function execution context(since it is an object) can be accessed during the function invocation using the keyword `this` . Execution context can be assigned **explicitly** by developers or will be set by JavaScript **implicitly.**

- **Implicit function execution context**
    - Functions can be defined in the global scope as variables or can be defined as an object property(*methods*).
    - The implicit context is assigned when we **invoke a function without passing in the explicit context**. By doing so we let JavaScript implicitly assign **the global object as the function's execution context**.
    - When we **invoke a method without providing an explicit execution context**, JavaScript **implicitly assigns the calling object as the method's execution context.**

    ```jsx
    let myName = 'Justinian';

    let greet = function() {
      console.log(`Greetings! I'm ${this.myName}`);
    }

    greet();                      // "Greetings! I'm Justinian"
    console.log(window.myName);   // "Justinian"
    ```

    On line 3 variable `greet` is referenced to a function that logs a greeting message to the console which includes the value that is referenced `myName` variable of the execution context.

    On line 7, `**greet` is invoked with with execution context set to `global` implicitly**. In function invocation time `[this.myName](http://this.name)` expression will evaluate to the value that is referenced by the global variable `myName`  `"Justinian"` . Function invocation will log the `Greetings! I'm Justinian` to the console and return `undefined` . 

    In browser environment, global object is `window` so we can examine how `this.myName` is evaluated to "`Justininan"` by logging the value of `window.myName`

    ```jsx
    let justinian = {
      name: 'Justinian',
      greet() {
        console.log(`Greetings! I'm ${this.name}`);
      },
    	me() {
    		console.log(this);
    	},
    };

    justinian.greet();            // "Greetings! I'm Justinian"
    justinian.me();               // { name: 'Justinian', ... }
    ```

    A  **method invocation implicitly sets execution context to calling object.**

    On line 1 we reference variable `justinian` to an object literal with a `name` property and a methods `greet`  and `me`. 

    When we invoke `greet` method on line 11,  the execution context will be implicitly set to calling object `justinian` and `greet` method will log `"Greetings! I'm Justinian"` to the console and return `undefined` . 

    Similar to previous example, to verify the value `this` (when a method is invoked with implicit execution context) evaluates to, we can invoke `me` method that logs the value of `this`. 

- **Explicit function execution context**
    - JavaScript allows us to change function's execution context temporarily or permanently by providing different methods. `[Function.prototype.call](http://function.prototype.call)` and `Function.prototype.apply` allows developer to pass in execution context as an argument and executes the function temporarily bound to passed in context.

    ```jsx
    let myName = 'Odin';

    let justinian = {
      myName: 'Justinian',
    };

    function greet() {
      console.log(`Greetings! I'm ${this.myName}`);
    }

    greet.call(justinian);      // "Greetings I'm Justinian"
    greet();                    // "Greetings! I'm Odin"
    ```

    Using the same function `greet` from the previous example; 

- **Dealing with context loss**

## **Scope and Closures**

- Creating and using private data
- Garbage collection
- IIFEs
- Partial Function Application

## Object creation patterns

- Constructor functions
- Prototype objects
- Behavior delegation
- OLOO and Pseudo-Classical patterns

## Further reading to help build a mental model

- [JavaScript Weekly: Making Sense of Closures](https://medium.com/launch-school/javascript-weekly-making-sense-of-closures-daa2e0b56f88)
- [JavaScript Weekly: Understanding Links on the Object Prototype Chain](https://medium.com/launch-school/javascript-weekly-understanding-links-on-the-object-prototype-chain-12962f05e149)
- [JavaScript Weekly: An Introduction to First-Class Functions](https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137)
- [JavaScript Weekly: What in the World is this?!](https://medium.com/launch-school/what-in-the-world-is-this-be803a85ed47)
- Example, precise terminology

    ```jsx
    var a = 'hello';

    function foo() {
      console.log(a);
    }

    foo();
    ```

    If asked to describe the function, you might be tempted to say *"the result of the function call is hello."* This statement isn't wrong, but it doesn't help us to evaluate how well you have mastered the concept of variable scope. If you had written that statement as your answer, you would receive a score of 5/10 on the question (50% is not a passing score).

    The more precise answer would be *"when the function is executed, the variable `a` inside the `foo` function is the same as the variable `a` outside of the function based on JavaScript's lexical scoping rules, therefore line 4 logs `hello` to the console. The function also returns `undefined` since there isn't an explicit return statement."* In programming, we are always concerned with the output and the return value and mutations to objects. We need to speak in those terms, and not use vague words like "results."

    When writing answers to the test questions, make sure to be as precise as possible, and use the proper vocabulary. Doing this will help you debug and understand more complex code later in your journey. If your definitions are not precise, you will not be able to lean on them to decompose complicated code. Also, you will likely not be able to pass the test.
