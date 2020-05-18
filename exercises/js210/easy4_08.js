// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


function digitList(number) {
  let string = String(number);
  let newArr = [];
  for (let i = 0; i < string.length; i += 1) {
    newArr.push(parseInt(string[i]));
  }
  return newArr;
}