let todoItems = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

const App = {
  todos: todoItems,
  todosTemplate: Handlebars.compile($('#todos_template').html()),
  confirmTemplate: Handlebars.compile($('#confirm_template').html()),
  $todos: $('ul#todos'),
  $confirm: $('.confirm_prompt'),

  renderTodos: function() {
    this.$todos.html(this.todosTemplate({ todos: this.todos }));
  },

  handleDeleteClick: function(e) {
    e.preventDefault();
    let todoId = Number($(e.target).closest('li').attr('data-id'));

    this.showPrompt(todoId);
  },

  handleConfirmYes: function(e) {
    let todoId = Number($(e.target).closest('.confirm_wrapper').attr('data-id'));

    e.preventDefault();
    this.removeTodo(todoId);
  },

  removeTodo: function(id) {
    this.todos = this.todos.filter(function(todo) {
      return this.id !== id;
    });

    this.hidePrompt();
    this.renderTodos();
  },

  showPrompt: function(todoId) {
    this.$confirm.html(this.confirmTemplate({id: todoId}));
    this.$confirm.add('.overlay').show();
    this.bindPromptEvents();
  },

  bindPromptEvents: function() {
    this.$confirm.find('.confirm_no').one('click', this.hidePrompt.bind(this));
    this.$confirm.find('.confirm_yes').one(
      'click',
      this.handleConfirmYes.bind(this)
    );
  },

  hidePrompt: function() {
    this.$confirm.add('.overlay').hide();
    this.$confirm.html('');
  },

  init: function() {
    this.renderTodos();
    this.$todos.on('click', 'li .remove', this.handleDeleteClick.bind(this));
    $('.overlay').on('click', this.hidePrompt.bind(this));
  },
};

App.init();

// Create a list of todos in the DOM from a JavaScript collection (array) of todos.
// Add a delete button for each todo.
// When the user clicks the delete button, a dialog appears asking the user to confirm the deletion.
// Use CSS to display the dialog.
// The dialog has Yes and No buttons.
// When the user clicks the Yes button, the dialog disappears, and the corresponding todo is deleted.
// When the user clicks the No button, the dialog disappears, and the todo is not deleted.