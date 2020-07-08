// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// input: year as number
// output: number of friday the 13ths


// take the year
// for every month create date with 13th ex: 13.01.2018 => 13.02.2018
// check if the day is friday
// record/increment


function fridayThe13ths(year) {
  const MONTHS = 12;
  let friThirteenth = 0;
  let iter = 1;

  while (iter <= MONTHS) {
    let thirteenth = new Date(`${year}-${pad(iter)}-13T00:00:00`);
    if (thirteenth.getDay() === 5) {
      friThirteenth += 1;
    }
    iter += 1;
  }
  return friThirteenth;
}

function pad(number) {
  if (String(number).length === 1) {
    return '0' + number;
  } else {
    return String(number);
  }
}

// LS SOLUTION
function fridayThe13ths(year) {
  const thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce((count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}