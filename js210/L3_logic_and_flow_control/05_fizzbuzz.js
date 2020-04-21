// Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

fizzbuzz();

function fizzbuzz() {
  var i;
  for (i = 1; i <= 100; i += 1) {
    var result = '';
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) result += 'Fizz';
      if (i % 5 === 0) result += 'Buzz';
    }
    console.log(result || i)
  }
}