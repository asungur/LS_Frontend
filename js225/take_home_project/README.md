1. **[Assumptions](https://www.notion.so/905f0a53b3654ee1b820ebfeefca75fc#96d6a0f83a324931a031257618545bc5)**
2. **[Documentation](https://www.notion.so/905f0a53b3654ee1b820ebfeefca75fc#290f6dd7900c4820b3af8e0bd6f2d4ec)**
3. **[Further Development](https://www.notion.so/905f0a53b3654ee1b820ebfeefca75fc#3540aab441124b039ded5188a8bb25b2)**

## Assumptions

For `Todo` objects I've decided to add `completed` as an optional input. Since an item can be created as complete in most of the todo apps.

As part of Todo object creation, `month/year` input is sanitized at the assignment to `this.month/year` using `String()` . This conversion occurs a couple of other times in the code as sanitization is the key for building such database-like applications.

For `todoList` I've used an IIFE to return an object. This way I've kept the "helper" functions private as well as the data that needs to be secured. These are mainly the collection array `todos` and incrementing `lastId` number.

`id` is probably the most important property in this project. I've used it as the main input for accessing and modifying the collection of `todos`. I've used `String.Prototype.PadStart` for keeping number of digits set at 4. Although `id` generation mechanism is ok, there might be a better reset mechanism rather than resetting after `deleteAll`

`update` can take an object with invalid properties, as long as there is at least one matching property with the todo properties, it will be used. I've followed a similar logic for `addMultiple` . The argument array of todo objects might have invalid objects, this method filters those out and use only the valid objects.

For `todoList` methods, similar to JavaScript methods, I've used `true` and `false` return values to validate if the operation is successful. 

`todoManager` is an object literal with methods that are directly linked to `todoList` methods. Returning copies and maintaining the data integrity is the responsibility of `todoList` object. `todoManager` works as a middle-step.

Tests are written the same as the practice project and can be run on the browser via `index.html`

## Documentation

### `Todo`

Constructor function that returns todo objects

**Arguments:**

- `obj`
    - default `{}` that creates an object with default properties.
- `id`
    - assigned by `todoList`
    - 4 character long `string` starting with `'0001'` .

**Returned objects will have the following properties:**

- `id`
    - Passed in as an argument by `todoList`
    - 4 digit `string` starting with `'0001'`
- `title`
    - Default `'Untitled'`
    - If provided by `obj` argument, it will be used instead.
- `completed`
    - Default `false`
    - To dos can be created as complete. If this property exists in the object, it will be used.
- `month`
    - Default to month of the current date.
    - Ranges between `1` and `12`
- `year`
    - Default to year of the current date.
- `description`
    - Default `'N/A'`
    - If the property exists in argument `obj` , it will be used.
- `isWithinMonthYear(month, year)`
    - Method that compares the given month and year to object's properties.
    - Returns `true` or `false` as the result of the comparison.

### `todoList`

**IIFE** returns `todoList` object that has access to some private data and functions.

**Private data and functions**

- `lastId` , `ID_SET` and `createId`
    - All work together to generate 4 digit id at invocation of `add` method
- `TODO_PROPS`
    - Used by `update` to check if provided properties are valid
- `validId(id)`
    - Checks if any given id exists in the collection
- `getTodo(id)`
    - Returns the original todo object with the given `id`
- `getTodoIdx(id)`
    - With the given `id` , returns the index of the todo object in the collection.
- `copyTodo(id)`
    - Returns a copy of the todo object with the given `id`

**Object methods**

- `add(object)`
    - Takes an object argument and adds a new `Todo` object to the collection
    - If the argument is not valid returns `false`
    - Successful operations return `true`
- `delete(id)`
    - Takes an `id` argument and deletes the object with the given id.
    - If the `id` doesn't exist in the collection, returns `false`
    - Successful operations return `true`
- `addMultiple(collection)`
    - Takes an array of objects `collection` and adds valid arguments to the collection.
    - If the array contains both valid and invalid arguments, only valid ones will be used.
    - Returns number of successful additions.
    - If no objects added to the collection, will return `0`
- `update(properties, id)`
    - Takes an object with properties to be added and an `id` .
    - Any invalid property will not be used. This confirmation done by using `TODO_PROPS` array.
    - If the `id` doesn't exist in the collection, returns `false`
    - Successful operations return `true`
- `extractTodo(id)`
    - Returns a copy of the todo object with the given `id`.
    - If the `id` is invalid returns `undefined`
- `extractAll`
    - Returns an array with the copies of the entire todo collection
- `deleteAll`
    - Empties the entire todo collection.

### `todoManager`

Object that uses `todoList` methods

- `getTodos`
    - Invokes and returns the result of `todoList.exractAll`
    - Returns empty array if the collection is empty
- `getCompletedTodos`
    - Returns an array only containing completed to dos.
    - Returns empty array if there is no completed todo.
- `getTodosByDate(month, year)`
    - Returns an array of to dos matching the month and year.
    - Returns empty array if there is no match.
- `getCompletedTodosByDate(month, year)`
    - Returns an array of completed todos matching the month and year.
    - Returns empty array if there is no match.

## Further Development

- I've tried to cover as much ground as possible with the tests, but there is for sure more that can be done, such as running similar tests with different test data-set.
- Test coverage is unclear since there is no external package that has been used for this project.
