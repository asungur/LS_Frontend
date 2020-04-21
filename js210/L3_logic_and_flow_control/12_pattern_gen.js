// Write a function that takes a number of rows as the argument n and logs a square of numbers and asterisks. For example, if n is 7, log the following pattern

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567


function generatePattern(num) {
  var i = 1;
  var strOut;
  var j;

  while (i <= num) {
    strOut = ''

    for (j = 1; j <= 7; j += 1){
      
      if (j <= i) {
        strOut += String(j);
      } else {
        strOut += '*';
      }
    }
    console.log(strOut);
    i += 1;
  }
}