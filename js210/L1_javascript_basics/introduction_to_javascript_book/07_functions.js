// say.js
function say(words) {
  console.log(words + '!' );
}

say("hello");       // => hello!
say("hi");          // => hi!
say("how are you"); // => how are you!
say("I'm fine");    // => I'm fine!

// DEFAULT PARAMETERS
function say(words = 'hello') {
  console.log(words + '!');
}

say('Howdy'); // logs Howdy!
say(); // logs hello!


// CHANGING GLOBAL VARIABLES 
let greetingMessage = 'Good Morning';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople(); // logs 'Good Evening'


// LOCAL VARIABLES
// greetingMessage have local scope can not be accessed globally
function greetPeople() {
  let greetingMessage = 'Good Morning';
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError

// correction
function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople('Good Morning');

// NON MUTATING METHOD
let name = 'Pete Hanson';
console.log(name.toUpperCase()); // logs 'PETE HANSON'
console.log(name); // logs 'Pete Hanson'

// MUTATIONG METHOD
let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // logs [1, 3, 5, 7]

// MUTATING FUNCTION
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive)
console.log(oneToFive); // logs [9, 2, 3, 4, 5]

// NON MUTATING FUNCTION
function addToArray(array) {
  return array.concat(0);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // logs [1, 2, 3, 4, 5, 0];
console.log(oneToFive); // logs [1, 2, 3, 4, 5]


// FUNCTION COMPOSITION
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum);               // => 65

let difference = subtract(80, 10);
console.log(difference);        // => 70

// COMPOSITION EXAMPLE
console.log(add(20, 45));       // => 65
console.log(subtract(80, 10));  // => 70

// THREE WAYS TO DEFINE A FUNCTION

// 1
function functionName(zeroOrMoreArguments...) {
  // function body
}

// 2
greetPeople();

function greetPeople() {
  console.log('Good Morning');
}

// OR
let greetPeople = function() {
  console.log('Good Morning');
};

greetPeople();

// 3. ALSO CALLED ARROW FUNCTIONS
let greetPeople = () => console.log('Good Morning!');
greetPeople();

let add = (a, b) => a + b;

// Run this code in your browser
// SEE THE SYNTHAX DIFFERENCE OF MULTI-LINE VS SINGLE LINE
// SINGLE LINE DOES NOT REQUIRE RETURN KEYWORD

let add = (a, b) => a + b;
let getNumber = text => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(add(number1, number2));
