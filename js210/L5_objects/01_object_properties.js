// Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, item) {
  let comparison = false;

  for (var pet in obj) {
    if (pet === item) comparison = true;
  }
  return comparison;
}

// LS solution

// function objectHasProperty(object, propertyName) {
//   var keys = Object.keys(object);
//   return keys.indexOf(propertyName) !== -1;
// }

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// Write a function named incrementProperty that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

var wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, item) {
  if (object[item]) {
    object[item] += 1;
  } else {
    object[item] = 1;
  }
  return object[item];
}

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

var hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(object1, object2) {
  let numOfCopies = 0;

  for (let feature in object1) {
    object2[feature] = object1[feature];
    numOfCopies += 1;
  }
  return numOfCopies;
}

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// Write a function named wordCount that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(string) {
  let words = string.split(' ');
  let counts = {};

  for (let word of words) {
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }