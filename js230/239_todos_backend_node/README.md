1. [**Assumptions**](#assumptions)
2. [**Documentation**](#documentation)
3. [**Further Development**](further_development)

## Assumptions

I've decided to use jQuery where possible and implemented my solution using the provided `index.html` that is using the Handlebars template and the partials.

The 4 objects that forms the application:

`TodoList` object contains the properties for rendering and it is the object that is passed to the Handlebars template function as an argument. It also works as a middle-layer between the `API` and the `App` objects.

`API` object is responsible for server communication. It consist of methods that are sending AJAX requests to the server.

`UI` object contains the UI elements as its properties which can be called by other objects as well as a few public methods for rendering, serializing form information, etc.. Overall it is the object that is responsible for dealing with the interface related operations.

`App` object starts the application and hold event handlers for all operations. Overall, it is the engine that is responsible for ordering other objects what to do.

One additional assumption to the specification that I've made:

**(from the specification, `main area`, 6:)**

*When a todo is toggled/deleted the currently selected todo group should not change. The todos in the main area should reflect what is currently selected, and the corresponding count of todos should reflect the count accordingly.*

My assumption:

- After a todo is deleted/changed if the current sub-group still exists, the main page keeps displaying the current sub-group.
- After a todo is deleted/changed if the current sub-group does not exist anymore, "All Todos" section will be selected and displayed.

Since this distinction was not mentioned in the specification and the live solution implementation was different to my assumption, I've saved this solution as `app_v2.js` in the `javascripts` folder. I find this more intuitive and clearer than displaying an empty sub-section.

## Documentation

### `API`

Object that sends AJAX requests:

- `init`
    - Called by the `App` object when the page is loaded.
    - Retrieves all todos from the server.
    - the `done` callback function passes the returned json to`TodoList` object and orders `App` object to do the first page load.
- `retrieveAll`
    - Retrieves all todos from the server.
    - the `done` callback function passes the returned json to `TodoList` object and orders `UI` object to re-render the current page.
- `update(todoObj)`
    - Sends a `PUT` request to update the provided todo.
    - Retrieves all todos and updates the `TodoList` object by calling its `retrieveAll` method
- `save(todoObj)`
    - Sends a `POST` request to create a new todo.
    - Retrieves all todos and updates the `TodoList` object by calling its `retrieveAll` method
- `delete(id)`
    - Sends a `DELETE` request to delete the todo with the given `id` .
    - Retrieves all todos and updates the `TodoList` object by calling its `retrieveAll` method

### `TodoList`

An object returned by the IIFE. The two helper methods are maintained under the function's private scope.

- `generateByDate`
    - Helper method to generate `todos_by_date` and `done_todos_by_date`
- `setDueDate`
    - Helper method that creates `"due_date"` property on the given object
- Object properties:
    - `todos` ⇒ all todos(array)
    - `todos_by_date` ⇒ all todos grouped by date(object)
    - `done` ⇒ completed todos(array)
    - `done_todos_by_date` ⇒ completed todos grouped by date(object)
- `generateTodos(json)`
    - parses the json, creates `"due_date"` for each todo, sorts them and places them in the `todo` array.
- `generateCompleted`
    - Places the completed todos into the`done` array.
- `generateCompletedByDate`
    - Groups completed todos by `due_date` and places them into `done_todos_by_date`
- `generateAllByDate`
    - Groups all todos by `due_date` and places them into `todos_by_date`
- `SetProperties`
    - Sets the `TodoList` object properties pre-rendering.
- `retrieve(id)`
    - Returns the todo object with the given id
- `setSelected(section, title)`
    - Sets `current_section` and `selected` properties pre-rendering according to the provided `section` and `title` arguments.
- `mark`, `create`, `update`, `delete`
    - Calls relevant `API` object methods
- `refresh(json)`
    - Updates `TodoList` object properties with the provided json.
- `generate(json)`
    - Creates `TodoList` object properties for the first time.
- `resetSelection()`
    - Resets `current_section` and `selected` properties pre-rendering and calls `UI.refreshSideBar`for rendering.

### `UI`

Object that holds page content as collections and renders the page when ordered.

`mainTemplate`, `$body`, `$('body')`, `$headerAll`, `$sideBar`, `selectedSection`, `selectedTitle`, `$table`, `$newButton`, `$modalLayer`, `$modalForm`, `$modals`, `$form`, `$formMarkComplete`, `$formDueDay`, `$formDueMonth`, `$formDueYear` . Object properties created with the value `null`. The relevant values are assigned after the content is rendered.

- `setHandlebars`
    - Compiles the Handlebars template and registers the partial
- `fillInForm(object)`
    - Called if a todo is being edited. The todo information will be filled in
- `setElements`
    - Sets the `UI` object properties. Called after rendering.
- `renderSelected`
    - Renders the selected group
- `firstRender`
    - Initiates the first render.
- `getTitleFromTag`
    - Gets the name of the section from the selected group
- `renderForm(action, id)`
    - Displays the form(for both creating and editing)
- `serializeFormData`
    - Serializes the form data using jQuery's `serializeArray` method.
- `refreshSidebar`
    - Sets current group to "All Todos". Executed before the first load.
- `init`
    - Registers the templates and refreshes the sidebar.

### `App`

The "engine" object returned by the IIFE. It starts the application when the DOM content is loaded. Individual event handlers are maintained under the function's private scope.

`handleSidebarClick`, `handleMarkTodo`, `handleNewForm`, `handleEditForm`, `handleFormClose`, `handleFormSubmit`, `handleFormMark`, `handleDeleteTodo`

- `addListeners`
    - Invokes all event handlers
- `executeFirstLoad`
    - Orders `UI` object to render the page. Adds the event handlers on the DOM elements that are assigned to `UI` object's properties.
- `init`
    - Invokes `UI` and `API` objects' `init` methods.

## Further Development

- Hiding the *Mark as Complete* button when creating a new Todo.
- Once a todo is created `day`, `month`, `year` values can not be converted back to none(`""`) at the moment. It might be a good feature to add, although it will require some changes on the server-side.
