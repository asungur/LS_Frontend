// We resume our discussion of objects and closures by examining an earlier practice problem where we built a function named makeList to manage a todo list. Here is the source code:
// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }
/*
This single-function solution provides a concise, but somewhat unclear, interface to developers:
The function returned by makeList lets the user perform three different actions (adding, removing, and listing) by calling the function with appropriate arguments. This code works, but it's unclear. In fact, the single call list('make breakfast') can perform two entirely different operations based on the current state of the list!

> let list = makeList();
> list('make breakfast');       // add an item to the list
= make breakfast added!
> list();                       // log the list's items
= make breakfast
> list('make breakfast');       // remove an item from the list
= make breakfast removed!
> list();
= The list is empty.
*/

// We can improve the interface by returning an Object from makeList instead of a single Function. If we do that, we can create an API that is easy to use and understand:

// > let list = makeList();
// > list.add('peas');
// = peas added!
// > list.list();
// = peas
// > list.add('corn');
// = corn added!
// > list.list();
// = peas
// = corn
// > list.remove('peas');
// = peas removed!
// > list.list();
// = corn

// Reimplement makeList, so that it returns an Object that provides the interface shown above, including add, list, and remove methods.

// function makeList() {
//   return {
//     items: [],
//     add(item) {
//       this.items.push(item);
//       console.log(item + ' added!');
//     },
//     remove(item) {
//       let index = this.items.indexOf(item);
//       this.items.splice(index,1);
//       console.log(item + ' added!');
//     },
//     list() {
//       this.items.forEach(item => console.log(item));
//     },
//   }
// }

// let list = makeList();
// list.add('peas');
// // peas added!
// list.list();
// // peas
// list.add('corn');
// // corn added!
// list.list();
// // peas
// // corn
// list.remove('peas');
// // peas removed!
// list.list();
// // corn
// console.log(list.items);

// -----------------------------------------------------------------------------------------------

/* Notice that the solution lets us access the array of items through the items property:

> list.items;            // items accessible from outside object
= ['corn']               // since it is an object property
This was not the case in the single-function implementation:

> list.items;            // items not accessible from outside function
= undefined              // since it is within a closure
Update the implementation from problem 1 so that it retains the use of an object with methods but prevents outside access to the items the object stores internally.
*/

// UPDATED VERSION WITH PRIVATE DATA
function makeList() {
  let items = [];
  return {
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }
    },
    remove(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index,1);
        console.log(item + ' removed!');
      }
    },
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
      items.forEach(item => console.log(item));
      }
    }
  }
}

let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn
console.log(list.items);