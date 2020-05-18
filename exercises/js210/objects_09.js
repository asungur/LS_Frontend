// We can use the number of minutes before or after midnight to represent the time of day. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement the function using JavaScript's Date object.

// console.log(timeOfDay(0));          // "00:00"
// console.log(timeOfDay(-3));         // "23:57"
// console.log(timeOfDay(35));         // "00:35"
// console.log(timeOfDay(-1437));      // "00:03"
// console.log(timeOfDay(3000));       // "02:00"
// console.log(timeOfDay(800));        // "13:20"
// console.log(timeOfDay(-4231));      // "01:29"

var MILLISECONDS_PER_MINUTE = 60000;

// function timeOfDay(deltaMinutes) {
//   var midnight = new Date('1/1/2000 00:00');
//   var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
//   var hours = padWithZeroes(afterMidnight.getHours(), 2);
//   var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

//   return hours + ':' + minutes;
// }

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}


function afterMidnight(time) {
  let currentTime = new Date('1/1/2000 ' + time);
  let midnight = new Date('1/1/2000 00:00');
  let differenceMS = parseInt(currentTime.getTime()) - parseInt(midnight.getTime());
  let differenceMinutes = differenceMS === 0 ? 0 : differenceMS / MILLISECONDS_PER_MINUTE;
  return differenceMinutes;
}

function beforeMidnight(time) {
  if (time === '00:00') return 0;

  let currentTime = new Date('1/1/2000 ' + time);
  let midnight = new Date('1/2/2000 00:00');
  let differenceMS = parseInt(midnight.getTime()) - parseInt(currentTime.getTime());
  let differenceMinutes = differenceMS === 0 ? 0 : differenceMS / MILLISECONDS_PER_MINUTE;
  return differenceMinutes;
}


console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686