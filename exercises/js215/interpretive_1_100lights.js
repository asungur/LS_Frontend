"use strict";
/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.
*/

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

console.log(lightsOn(1));        // [1]
console.log(lightsOn(0));        // null
console.log(lightsOn(null));     // null
console.log(lightsOn(''));       // null
console.log(lightsOn(1.25));     // null

// input:number
// output:index of lights that are on

//      [off]   [off]   [off]   [off]   [off]
// n=1    n      n*2     n*3    n*4      n*5    until initial value exceeds the array border
// n=2            n             n*2        
// n=3                    n                      
// n=4                           n
// n=5                                    n


function lightsOn(switches) {
  if (invalidSwitch(switches)) {
    return null;
  }

  let lights = generateLights(switches);

  for (let t = 1; t <= switches; t += 1) {
    for (let j = t; j <= switches; j += t) {
      lights[j - 1] = flipSwitch(lights[j - 1]);
    }
  }

  function flipSwitch(value) {
    return value === 'off' ? 'on' : 'off';
  }

  function generateLights(n) {
    let newArr = [];
    for (let i = 0; i < n; i += 1) {
      newArr.push('off');
    }
    return newArr;
  }

  function onLights(arr) {
    return arr.map((val, i) => val === 'on' ? i + 1 : null)
    .filter(val => !!val);
  }

  function invalidSwitch(n) {
    return !(Number.isInteger(n) && n > 0);
  }

  return onLights(lights);
}