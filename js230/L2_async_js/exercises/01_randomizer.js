// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  if (callbacks.length < 1) {
    return;
  }

  const runTime = Math.pow(2, callbacks.length);
  let initialTime = 1;



  let intervalId = setInterval(() => {
    console.log(initialTime);
    initialTime += 1;

    if (initialTime > runTime) {
      clearInterval(intervalId);
    }
  }, 1000);


  callbacks.forEach(callback => {
    const executeTime = Math.floor(Math.random() * runTime * 1000);
    setTimeout(callback, executeTime);
  });

}

randomizer(callback1, callback2, callback3);