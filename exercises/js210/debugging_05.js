// The following code demonstrates the Pomodoro technique. Although it seems to work in principle, it never prints the minute count from line 11. What is wrong?

var tasks = 2;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  // var keyword (redecleration) moves the variable declarion from the top of the scope in the function block. This will cause variable shadowing.
  minutes = 0;
  pomodoro();
}

pomodoro();