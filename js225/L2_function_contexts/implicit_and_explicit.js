// Given the code and desired output below, would it make more sense to use call or apply to supply explicit context and arguments to outputList? Implement a solution using one of the methods, such that the desired output is logged, and explain your choice.

// let fruitsObj = {
//   list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
//   title: 'A Collection of Fruit',
// };

/*
function outputList() {
  console.log(this.title + ':');
  // console.log(arguments);

  let args = [].slice.call(arguments);
  console.log(args);

  args.forEach(function(elem) {
    console.log(elem);
  });
}
*/

// outputList.apply(fruitsObj, fruitsObj.list);


// invoke outputList here
// Desired output:

// A Collection of Fruit:
// Apple
// Banana
// Grapefruit
// Pineapple
// Orange

let temp = {
  '0': 'Apple',
  '1': 'Banana',
  '2': 'Grapefruit',
  '3': 'Pineapple',
  '4': 'Orange',
}

console.log([].slice.call(temp));