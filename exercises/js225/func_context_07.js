// Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the variable count after the function counter is run on line 10?

// function makeCounter() {
//   let count = 1;

//   return () => {
//     console.log(count++)
//   };
// }

// const counter = makeCounter();
// counter();

// SOLUTION

function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
counter();

const counter2 = makeCounter();

counter2();
counter();