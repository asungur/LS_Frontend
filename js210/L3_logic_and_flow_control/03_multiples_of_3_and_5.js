// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

multiplesOfThreeAndFive(1, 100);

function multiplesOfThreeAndFive(min, max) {
  var i;
  for (i = min; i <= max; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if ((i % 3 === 0 || i % 5 === 0)) {
      console.log(String(i));
    }
  }
}