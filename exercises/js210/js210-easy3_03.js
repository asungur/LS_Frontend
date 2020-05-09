var rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));

let retirementAge = Number(rlSync.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = Number(today.getFullYear());
let retirementYear = currentYear + retirementAge - age;

console.log('It\'s ' + currentYear + ' You will retire in ' + retirementYear + '.');
console.log('You have only ' + (retirementAge - age) + ' years of work to go!' );


