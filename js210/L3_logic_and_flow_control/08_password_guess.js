// Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.

// // password = 'password'

// // The program displays a dialog that asks the user to enter a password.
// // If the user enters the wrong password, keep asking up to three times. After
// // three failures, log the access denied.

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// // message on the console
// You have been denied access.

// // If the user enters the right password, report login success.
// What is the password: password

// // message on the console
// You have successfully logged in.

let rlSync = require('readline-sync');
var password = 'password';
var failedAttempts = 0;
var guess;

while (true) {
  guess = rlSync.question('What is the password:');

  if (guess == password) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}