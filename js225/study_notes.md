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

    greet.call(justinian);      // "Greetings! I'm Justinian"
    greet();                    // "Greetings! I'm Odin"
    ```

    - Using the same function `greet` from the previous example; on line 11, we call `[Function.prototype.call](http://function.prototype.call)` on our function object `greet`  passing `justinian` object as an argument. Function will be invoked with explicit context `justinian` there for `this` will be assigned to `justinian` at execution time. The function will log `Greetings! I'm Justinian` to the console and return `undefined` . 

    On line 11, to test longevity of this assignment we called `greet` . The function will be executed with implicit execution context. This time `this` will be assigned to global object, therefore  `"Greetings! I'm Odin"` will be logged to the console.
    - `call` and `apply` methods are very similar. While `call` accepts arguments one by one at the function execution, `apply` takes arguments in a single array:

    ```jsx
    myFunction.call(context, arg1, arg2, arg3, arg4, arg5);
    myFunction.apply(context, [arg1, arg2, arg3, arg4, arg5);
    ```

    - `[Function.prototype.call](http://function.prototype.call)` and `Function.prototype.apply` allows us to invoke a function on a different execution context **temporarily.** We use `Function.prototype.bind` to create functions that are permanently **bound** to a context.

    ```jsx
    let myName = 'Odin';

    let justinian = {
      myName: 'Justinian',
    };

    let constantine = {
      myName: 'Constantine',
    };

    function greet() {
      console.log(`Greetings! I'm ${this.myName}`);
    }

    let salute = greet.bind(justinian);      // returns new function object
    greet();                                 // "Greetings! I'm Odin"
    salute();                                // "Greetings! I'm Justinian"
    salute.call(constantine);                // "Greetings! I'm Justinian"
    ```

    On line 15, we call `bind` method on `greet` function passing in `justinian` as an argument. `bind` method will **return a new function** that works the same way as the calling function. The returned function will be **permanently bound to the given object**.

    On line 16, we can see that calling object `greet` function is not changed. Instead, the new function `salute` is bound to `justinian` . When we invoke the function, the execution context will be set to `justinian` implicitly.

    On line 17, we can see that even if try to invoke `salute` function with `call` passing in a different object as its explicit execution context. `this` will still be pointing to `justinian` .

- **Dealing with context loss**
    - JavaScript has **first-class functions** and **function context is determined at invocation.** This means we can pass around functions as other objects(re-assign to different variables, copy etc.), and we can invoke a function at different context implicitly and explicitly.
    - These features come with a cost; **JavaScript functions can lose its context**. Functions lose their context in three main ways, all which can be resolved by taking precautions the prevent buggy code.
    - **Method losing context when taken out of object**

    ```jsx
    let constantine = {
      name: 'Constantine',
      greet() {
        console.log(`Greetings! I'm ${this.name}`)
      }
    };

    constantine.greet();                    // "Greetings! I'm Constantine"
    let salute = constantine.greet;
    salute();                               // "Greetings! I'm undefined"
    ```

    When we invoke `greet` method, it's function execution context is implicitly set to calling object `constantine` . However, if we make a copy of this as a function such as `salute` on line 9 and call this function, implicit execution context will be set to `global`. therefore `[this.name](http://this.name)` expression will evaluate to `undefined` .

    - **Internal function losing method context**

    ```jsx
    let constantine = {
      name: 'Constantine',
      greetMorning(){
        console.log('Good Morning');
        function greet() {
          console.log(`Greetings! I'm ${this.name}`)
        }
        greet();
        console.log('How are you doing?');
      },
    };

    constantine.greetMorning();  // Good Morning
                                 // Greetings! I'm undefined
                                 // How are you doing?
    ```

    In this example, when the internal function `greet` is defined under method `greetMorning` and called as part of the method definition, it's implicit execution context will be set to `global` .

    - **Function as an argument losing surrounding context**

    ```jsx
    function morning(func) {
      console.log('Good Morning');
      func();
      console.log('How are you doing?');
    }

    let constantine = {
      name: 'Constantine',
      greet() {
        console.log(`Greetings! I'm ${this.name}`)
      },
      greetMorning() {
        morning(this.greet);
      },
    };

    constantine.greetMorning();  // Good Morning
                                 // Greetings! I'm undefined
                                 // How are you doing?
    ```

    When we call `greetMorning` method on line 17, this method will invoke function `morning` and pass `greet` method as an argument. When the `greet` method is invoked as part of the `morning` function invocation, execution context will be set to `global` implicitly.

    - There are a few ways of dealing with function context loss.
        - **Provide access to context with a local variable**

            ```jsx
            let constantine = {
              name: 'Constantine',
              greetMorning(){
                let self = this
                console.log('Good Morning');
                function greet() {
                  console.log(`Greetings! I'm ${self.name}`)
                }
                greet();
                console.log('How are you doing?');
              },
            };

            constantine.greetMorning();  // Good Morning
                                         // Greetings! I'm Constantine
                                         // How are you doing?
            ```

        - **Pass the context explicitly by using `call` or `apply`**

            ```jsx
            let constantine = {
              name: 'Constantine',
              greetMorning(){
                console.log('Good Morning');
                function greet() {
                  console.log(`Greetings! I'm ${this.name}`)
                }
                greet.call(this);
                console.log('How are you doing?');
              },
            };

            constantine.greetMorning();  // Good Morning
                                         // Greetings! I'm Constantine
                                         // How are you doing?
            ```

        - **Use `bind` to bind context explicitly with function expression**

            ```jsx
            let constantine = {
              name: 'Constantine',
              greetMorning(){
                console.log('Good Morning');
                let greet = function() {
                  console.log(`Greetings! I'm ${this.name}`)
                }.bind(this);
                greet();
                console.log('How are you doing?');
              },
            };

            constantine.greetMorning();  // Good Morning
                                         // Greetings! I'm Constantine
                                         // How are you doing?
            ```

        - **Use optional argument to provide context (`forEach` , `map` , `every` , `some` )**

            ```jsx
            let family = {
              members: ['Constantine', 'Justinian', 'Mehmet'],
              sendGreetings() {
                [0, 1, 2].forEach(function(index) {
                  console.log('Greetings from ' + this.members[index]);
                });
              },
            };

            family.sendGreetings();           // TypeError: cannot read property 1 of undefined

            let family = {
              members: ['Constantine', 'Justinian', 'Mehmet'],
              sendGreetings() {
                [0, 1, 2].forEach(function(index) {
                  console.log('Greetings from ' + this.members[index]);
                }, this);
              },
            };

            family.sendGreetings();           // Greetings from Constantine
                                              // Greetings from Justinian
                                              // Greetings from Mehmet
            ```

            Some methods of `Array.prototype` take an optional `thisArg` argument and define explicit execution context.

        - **Callback using arrow function**

            ```jsx
            let family = {
              members: ['Constantine', 'Justinian', 'Mehmet'],
              sendGreetings() {
                [0, 1, 2].forEach(index => {
                  console.log('Greetings from ' + this.members[index]);
                });
              },
            };

            family.sendGreetings();           // Greetings from Constantine
                                              // Greetings from Justinian
                                              // Greetings from Mehmet
            ```

            Arrow functions do not have `this` binding, they use the function's invocation context.

## **Scope and Closures**

- **Creating and using private data**
    - In JavaScript, when a function is declared it forms a **closure** (context at the definition)**.** Whenever(and wherever) a function is invoked, it will have access to variables declared inside the function scope via a **closure**. Variables declared inside the function scope are not available outside(to an outer scope)

    ```jsx
    function createAlbum(artist, name, year) {
      let title = name + ' by ' + artist;
      let footer = 'Released in ' + year;
    	return { 
    		readTag() {
    			console.log(title);
    			console.log(footer);
    		},
    	};
    }

    let inAbsentia = createAlbum('Porcupine Tree', 'In Absentia', '2002');

    inAbsentia.readTag();                 // In Absentia by Porcupine Tree
                                          // Released in 2002
    console.log(inAbsentia.title);        // undefined
    console.log(inAbsentia.name);         // undefined
    ```

    - On line 15, when the function is invoked the arguments are assigned to local variables `artist` , `name` and `year` in function scope. Using these variables `title` and `footer` tags created. The function `createAlbum` returns a new object with a method `readTag` which logs `title` and `footer` property to the console. The returned object is referenced to variable `inAbsentia` .
    - When we invoke `readTag` method it logs `title` and `footer` values as expected. However, we can not access these values anyway since they are private data for the object returned by `createAlbum` function. Our access to this data is interfaced by `readTag` method. Other variables such as `name` are also private. We can create as many instances as we want using `createAlbum` factory function. Each object returned will have it's own private data provided by closure.

- **Garbage collection**
    - **Garbage collectio**n is JavaScript's automatic memory de-allocation functionality. If a **value is no longer available** and/or the **closure that value references to is not available** the value is garbage collected which means the memory holds that value is released.

    ```jsx
    function greet(name) {
      return function() {
        console.log(`Greetings! I'm ${name}`);
      };
    };

    let greetJustinian = greet('Justinian');

    greetJustinian();

    greetJustinian = greet('Justin');

    greetJustinian();
    ```

    In the above example, `"Justinian"` is eligible for GC after line 10, where `greetJustinian` is re-referenced to a new function. On line 7, we invoke `greet` function passing in string value `"Justinian"` as an argument. At function invocation variable `name` will be referenced to `"Justinian"` and a greeting message will be logged to the console including this variables string value.

    On line 11, we invoke `greet` function again passing in `"Justin"` as an argument, this will return a new function. `greetJustinian` variable is re-referenced to this new function. 
    Since there is no reference to the previous function exists at this point. The string value `"Justinian"` will be garbage collected. 

- **IIFEs**
    - **Immediately Invoked Function Expressions (IIFEs)** are function expressions that are invoked right after declaration. IIFEs work by appending `();`  which means we are invoking the function expression.
    - IIFEs can be used to interact with a code base without interfering  the existing data. This can be achieved by using the **temporary function scope that is created by IIFE**.

    ```jsx
    // Large codebase above, hard to read, too many lines!!
     
    (function tester() {
    	// scope that has access to code base
    	// variables declared here will not overwrite the existing ones..
    })();
    // Code continues, too many lines, we dont want to bother reading it!!
    ```

    In this example let's assume we are working with a large codebase, at any point of the code we can use an IIFE to create a temporary function scope. We can test if certain variables exist in the above code since inner scopes have access to outer ones.

    - Secondly, we can also use IIFEs to **return a function with private data**.

    ```jsx
    var greetJustin = function() {
    	var name = 'Justinian';
    	
    	return function () {
    		console.log(`Greetings! I'm ${name}`);
    	}
    }();
    ```

    Here we can define a function that returns a greeter function with private data `name` variable. In this example we don't need to wrap the function with parentheses since the function keyword is not the first word in the line. 

- **Partial Function Application**
    - Partial function application uses **a function that returns a new function**. The returned function invokes **a third function with some of it's arguments given**.

    ```jsx
    function adder(num1, num2) {
    	return num1 + num2;
    }

    function generatorFunc(func, arg1) {
    	return function(arg2) {
    		return func(arg1, arg2);
    	}
    }

    let add2 = generatorFunc(adder, 2);
    add2(1);    // 3
    add2(5);    // 7
    ```

    In the above example, we defined an adder generator function `generatorFunc` that takes a function and one of the arguments. The generator will return a new function that carries around the first argument and the function. In our case, on line 11 the returned function will carry `adder` function and its first argument `2`. The `add2` function will take the second argument at invocation and invoke the primary function `adder` .

    **Using closures to save private data and carrying it around** can be very helpful when we need to use the a function with same arguments multiple times.

## Object creation patterns

- **Constructor functions**
- **Prototype objects**
- **Behavior delegation**
- **OLOO and Pseudo-Classical patterns**

## Further reading to help build a mental model

- [**JavaScript Weekly: Making Sense of Closures**](https://medium.com/launch-school/javascript-weekly-making-sense-of-closures-daa2e0b56f88)
- [**JavaScript Weekly: Understanding Links on the Object Prototype Chain**](https://medium.com/launch-school/javascript-weekly-understanding-links-on-the-object-prototype-chain-12962f05e149)
- [**JavaScript Weekly: An Introduction to First-Class Functions**](https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137)
- [**JavaScript Weekly: What in the World is this?!**](https://medium.com/launch-school/what-in-the-world-is-this-be803a85ed47)
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
