// To illustrate how a function's context changes at run time, let's use a function named average that calculates the average of the values in an Array passed as an argument. We'll use it to calculate an average temperature.
/*
let temperatures = [53, 86, 12, 43];

function average(values) {
  let total = 0;
  let i;
  for (i = values.length - 1; i >= 0; i -= 1) {
    total += values[i];
  }

  return total / values.length;
}

console.log(average(temperatures));           // => 48.5
*/
// Let's change the function to work with the context variable, this, instead. Remove the values argument from your definition and replace all remaining instances of values in the function with the keyword this. Call the function again with the temperatures array and check the return value.
let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

// console.log(average(temperatures));           // => NaN
// This time we got a result of NaN. Since we're calling our function from the global scope, the context variable this inside average is the window object rather than the temperatures array. If we want to use temperatures as our context, we must use call or apply. Both methods let us change the execution context, which changes the object that this references. They then execute the function with the new context. Let's see what happens when we pass temperatures as the first argument to these methods.
// console.log(average.call(temperatures));      // => 48.5
// console.log(average.apply(temperatures));     // => 48.5

// If we want, we can also create a new function that permanently sets the context to a given object. We do this with the bind method from Function.prototype. It lets us define the context we want to use when calling the function, and returns a value that we can store in a variable and call later. In the code below, we create a variable named averageTemperature that stores the average function bound to the temperatures array. We can call this variable, which causes it to execute average with a temperatures context:

let averageTemperature = average.bind(temperatures);

// console.log(averageTemperature());

// Lastly, we can change the execution context for our function by using it to define a method in an object. When assigned to an object, the function's context is the parent object unless bound otherwise. Since arrays are also objects, we can add the method to temperatures and call it when we're ready:

temperatures.average = average;
console.log(temperatures.average());          // => 48.5

// Here we assign the property average on the temperatures array to the average function. We then call the average method on the temperatures array.