// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

logOddNumbers(19);


function logOddNumbers(number) {
  var i;
  for (i = 1; i <= number; i += 2) {
    console.log(i)
  }
}