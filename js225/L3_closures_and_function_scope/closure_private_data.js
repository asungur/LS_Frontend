// function makeCounter() {
//   let count = 0;       // declare a new variable
//   return function() {
//     count += 1;        // references count from the outer scope
//     console.log(count);
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// counter1();       //1
// counter1();       //2
// counter1();       //3
// counter2();       //1

// console.log(counter1.count);    // undefined

// -------------------------------------------------------------------------------------

// Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

// function makeCounterLogger(start) {
//   return function(finish) {
//     let i;
//     if (start > finish) {
//       for (i = start; i >= finish; i -= 1) {
//         console.log(i);
//       }
//      } else {
//       for (i = start; i <= finish; i += 1) {
//         console.log(i);
//       }
//     }
//   };
// }


// let countlog = makeCounterLogger(5);
// countlog(8);
// 5
// 6
// 7
// 8
// countlog(2);
// 5
// 4
// 3
// 2

// -------------------------------------------------------------------------------------

// We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

// function makeList() {
//   return function(item) {
//     let todos = [];
//     if (!item) {
//       todos.forEach(todo => console.log(todo));
//     } else if (todos.indexOf(item) === -1) {
//       todos.push(item);
//       console.log(item + 'added!')
//     } else if (todos.indexOf(item) >= 0) {
//       todos.splice(todos.indexOf(item),1);
//       console.log(item + 'removed!')
//     }
//   };
// }

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book

function makeList() {
  let items = [];

  return function(newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + ' added!');
      } else {
        items.splice(index, 1);
        console.log(newItem + ' removed!');
      }
    } else {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    }
  };
}