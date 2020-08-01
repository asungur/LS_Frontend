// todoManager
// Responsible for returning a set of todos from a "todoList" based on certain criteria
// Interfaces with the todoList object
// todoManager can query the todoList object in the following ways:

// Return all todo objects
// Return all completed todo objects
// Return all todo objects within a given month-year combination
// Return all completed todo objects within a given month-year combination


// todoList
// object that has a collection of todo objects.
// data integrity has to be maintained by only returning copy of objects.
// todo objects can not be modified directly through todoList

// maintains a collection of todo objects.
// Adds a todo object to the collection
// Deletes a todo object from the collection
// Initializes the collection with n number of todoObjects
// Updates the properties of a specific todo object.
// Returns a specified todo object based on its id property

// todo
// object has only the following properties and shared methods
// It only has the following properties
// * id (must be unique)
// * title
// * completed
// * month
// * year
// * description

// Shared Methods:
// * isWithinMonthYear(month, year)

// AS IMPLEMENTATION:
// Todo objects can be defined as completed, otherwise they created default imcomplete

// todoData
// Data used for creating a single todo object
// This is an object containing key-value pairs for title, month, year, description
// var todoData = {
//   title: 'Buy Milk',
//   month: '1',
//   year: '2017',
//   description: 'Milk for baby',
// };