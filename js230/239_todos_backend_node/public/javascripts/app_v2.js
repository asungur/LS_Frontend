$(function () {
  const API = {
    retrieveAll() {
      $.ajax({
        url: "api/todos",
        type: "GET",
        dataType: "json",
      }).done(function(json) {
        TodoList.refresh(json);
        UI.renderSelected();
      });
    },
    update(todoObj) {
      $.ajax({
        url: `api/todos/${todoObj.id}`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(todoObj),
      }).done(function() {
        API.retrieveAll();
      });
    },
    save(todoObj) {
      $.ajax({
        url: "api/todos/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(todoObj),
      }).done(function() {
        API.retrieveAll();
      });
    },
    delete(id) {
      $.ajax({
        url: `api/todos/${id}`,
        type: "DELETE",
      }).done(function() {
        API.retrieveAll();
      });
    },
    init() {
      $.ajax({
        url: "api/todos",
        type: "GET",
        dataType: "json",
      }).done(function(json) {
        TodoList.generate(json);
        App.executeFirstLoad();
      });
    }
  };

  const TodoList = (() => {
    function generateByDate(searchArr, returnObj) {
      searchArr.forEach(todo => {
        if (!returnObj[todo.due_date]) {
          returnObj[todo.due_date] = [];
        }
        returnObj[todo.due_date].push(todo);
      });
    }
    function setDueDate(object) {
      if (!object.month || !object.year) {
        object['due_date'] = "No Due Date";
      } else {
        let tempMonth = !!object.month ? object.month : "--";
        let tempYear = !!object.year ? object.year.slice(2) : "--";
        object['due_date'] = `${tempMonth}/${tempYear}`;
      }
    }
    return {
      todos: [],
      todos_by_date: {},
      done: [],
      done_todos_by_date: {},
      current_section: null,
      selected: null,
      current_main_section: null,

      generateTodos(json) {
        let tempTodos = [];
        json.forEach(obj => {
          setDueDate(obj);
          tempTodos.push(obj);
        });
  
        this.todos = tempTodos.sort(function(todo1, todo2) {
  
          if (todo1.completed && !todo2.completed) return 1;
          if (!todo1.completed && todo2.completed) return -1;
          if (todo1.due_date === "No Due Date") return 1;
          if (todo2.due_date === "No Due Date") return -1;
          if (todo1.year > todo2.year) return 1;
          if (todo2.year > todo1.year) return -1;
          if (todo1.month > todo2.year) return 1;
          if (todo2.month > todo1.month) return -1;
          if (todo1.day > todo2.day) return 1;
          if (todo2.day > todo1.day) return -1;
        });
      },
      generateCompleted() {
        this.done = [];
        this.todos.forEach(todo => {
          if (todo.completed) {
            this.done.push(todo);
          }
        });
      },
      generateCompletedByDate() {
        this.done_todos_by_date = {};
        generateByDate(this.done, this.done_todos_by_date);
      },
      generateAllByDate() {
        this.todos_by_date = {};
        generateByDate(this.todos, this.todos_by_date)
      },
      setProperties(json) {
        this.todos = [];
        this.generateTodos(json);
        this.generateAllByDate();
        this.generateCompleted();
        this.generateCompletedByDate();
      },
      retrieve(id) {
        let todoObj;
        this.todos.forEach(todo => {
          if (todo.id === parseInt(id)) {
            todoObj = todo;
          }
        });
        return todoObj;
      },
      setSelected(section, title) {
        if (section === "all" && title === "All Todos") {
          this.selected = this.todos;
        } else if (section === "all" && title !== "All Todos") {
          this.selected = this.todos_by_date[title];
        } else if (section === "completed_items" && title === "Completed") {
          this.selected = this.done;
        } else if (section === "completed_items" && title !== "Completed") {
          this.selected = this.done_todos_by_date[title];
        }
  
        if (!this.selected) {
          this.selected = this.todos;
          this.current_main_section = "all";
          this.current_section = { title: "All Todos", data: this.selected.length };
          UI.selectedSection = "all_todos";
          UI.selectedTitle = "All Todos";
        } else {
          this.current_main_section = section;
          this.current_section.title = title;
          this.current_section.data = this.selected.length;
        }
      },
      mark(id, status="completed") {
        API.update({ id: id, completed: status === "completed" });
      },
      create(dataObj) {
        API.save(dataObj);
        this.resetSelection();
      },
      update(dataObj) {
        API.update(dataObj);
      },
      delete(id) {
        API.delete(id);
      },
      refresh(json) {
        this.setProperties(json);
        this.setSelected(this.current_main_section, this.current_section.title)
      },
      generate(json) {
        this.setProperties(json);
        this.resetSelection();
      },
      resetSelection() {
        this.selected = this.todos;
        this.current_main_section = "all"
        this.current_section = { title: "All Todos", data: this.selected.length };
        UI.refreshSidebar();
      },
    };
  })();

  const UI = {
    mainTemplate: null,
    $body: $('body'),
    $headerAll: null,
    $sideBar: null,
    selectedSection: null,
    selectedTitle: null,
    $table: null,
    $newButton: null,
    $modalLayer: null,
    $modalForm: null,
    $modals: null,
    $form: null,
    $formMarkComplete: null,
    $formDueDay: null,
    $formDueMonth: null,
    $formDueYear: null,

    setHandlebars() {
      this.mainTemplate = Handlebars.compile($('#main_template').html());
      let tempPartials = Array.prototype.slice.call($("[data-type='partial']"));

      tempPartials.forEach(partial => {
        Handlebars.compile(String(partial.innerHTML));
        Handlebars.registerPartial(String(partial.id), String(partial.innerHTML));
      });
    },
    fillInForm(object) {
      this.$form.attr("data-id", object.id);
      this.$form.find('#title').val(object.title);
      this.$form.find('textarea').val(object.description);
      if (!!object.day) {
        this.$formDueDay.find(`option[value=${object.day}]`).attr('selected', true);
      }
      if (!!object.month) {
        this.$formDueMonth.find(`option[value=${object.month}]`).attr('selected', true);
      }
      if (!!object.year) {
        this.$formDueYear.find(`option:contains(${object.year})`).attr('selected', true);
      }
    },
    setElements() {
      this.$headerAll = $('header[data-title="All Todos"]');
      this.$sideBar = $("#sidebar");
      this.$table = $("table");
      this.$newButton = $("label[for='new_item']");
      this.$modalLayer = $("#modal_layer");
      this.$modalForm = $("#form_modal");
      this.$modals = $(".modal");
      this.$form = $("form");
      this.$formMarkComplete = $("button[name='complete']");
      this.$formDueDay = $("#due_day");
      this.$formDueMonth = $("#due_month");
      this.$formDueYear = $("#due_year");
    },
    renderSelected() {
      this.$body.html("");
      this.$body.html(this.mainTemplate(TodoList));
      let $selected = $("#" + this.selectedSection).find("[data-title='" + this.selectedTitle + "']");
      if (!$selected.hasClass("active")) {
        $selected.addClass("active");
      }
      this.setElements();
      App.addListeners();
    },
    firstRender() {
      this.$body.html("");
      this.$body.html(this.mainTemplate(TodoList));
      this.setElements();
      this.$headerAll.addClass("active");
    },
    getTitleFromTag(eventTarget) {
      let fullTag = eventTarget.querySelector("dt").innerHTML;
      let title = undefined;

      if (fullTag === "All Todos" || fullTag === "Completed") {
        title = fullTag;
      } else {
        title = eventTarget.querySelector("time").innerHTML;
      }

      return title;
    },
    renderForm(action, id=undefined) {
      this.$form.attr("action", action);
      if (action === "Edit") {
        let todoObj = TodoList.retrieve(id);
        this.fillInForm(todoObj);
      }
      this.$modals.fadeIn();
    },
    serializeFormData() {
      let tempData = {};
      let sanitizedData = {};
      this.$form.serializeArray().forEach(obj => {
        if (obj.value === "Day" || obj.value === "Month" || obj.value === "Year") {
          tempData[obj.name] = "";
        } else {
          tempData[obj.name] = obj.value;
        }
      });
      if (tempData.title.length < 3) {
        alert("The title has to be at least 3 characters long.");
        return undefined;
      }
      Object.keys(tempData).forEach(key => {
        if (key.includes("due_")) {
          let newKey = key.split("_")[1];
          sanitizedData[newKey] = tempData[key];
        } else {
          sanitizedData[key] = tempData[key];
        }
      });
      return sanitizedData;
    },
    refreshSidebar() {
      this.selectedSection = "all_todos";
      this.selectedTitle = "All Todos";
    },
    init() {
      this.setHandlebars();
      this.refreshSidebar();
    },
  };

  const App = (() => {
    function handleSidebarClick() {
      UI.$sideBar.on("click", "dl", e => {
        e.preventDefault();
        let subSection = e.currentTarget.closest("section").id;
        let sectionTitle = UI.getTitleFromTag(e.currentTarget);

        TodoList.setSelected(subSection, sectionTitle);
        UI.selectedSection = subSection;
        UI.selectedTitle = sectionTitle;
        UI.renderSelected();
      });
    }
    function handleMarkTodo() {
      UI.$table.on('click', '.list_item', e => {
        e.preventDefault();
        let todoId = e.currentTarget.closest("tr").getAttribute('data-id');
        let boolChecked = e.currentTarget.closest("td").querySelector("input").checked;
        if (boolChecked) {
          TodoList.mark(todoId, "incompleted");
        } else {
          TodoList.mark(todoId, "completed");
        }
      });
    }
    function handleNewForm() {
      UI.$newButton.on('click', e => {
        e.preventDefault();
        UI.renderSelected();
        UI.renderForm("New");
      })
    }
    function handleEditForm() {
      UI.$table.on('click', 'label', e => {
        e.preventDefault();
        e.stopPropagation();
        let todoId = e.currentTarget.closest("tr").getAttribute('data-id');
        UI.renderForm("Edit", todoId);
      });
    }
    function handleFormClose() {
      UI.$modalLayer.on('click', e => {
        UI.$modals.fadeOut();
        UI.renderSelected();
      });
      $(window).keyup(e => {
        if (e.key === "Escape") {
          UI.$modals.fadeOut();
          UI.renderSelected();
        };
      });
    }
    function handleFormSubmit() {
      UI.$form.on('submit', e => {
        e.preventDefault();

        let dataObj = UI.serializeFormData();
        if (dataObj === undefined) {
          return;
        }
        if (UI.$form.attr("action") === "New") {
          TodoList.create(dataObj);
        } else if (UI.$form.attr("action") === "Edit") {
          dataObj.id = UI.$form.attr("data-id");
          TodoList.update(dataObj);
        }
      });
    }
    function handleFormMark() {
      UI.$formMarkComplete.on('click', e => {
        e.preventDefault();
        if (!!UI.$form.attr("data-id")) {
          let todoId = UI.$form.attr("data-id");
          TodoList.mark(todoId, "completed");
        } else {
          alert("Create the todo first!");
        }
      });
    }
    function handleDeleteTodo() {
      UI.$table.on('click', '.delete', e => {
        e.preventDefault();
        let todoId = e.currentTarget.closest("tr").getAttribute('data-id');
        TodoList.delete(todoId);
      })
    }
    return {
      addListeners() {
        handleSidebarClick();
        handleMarkTodo();
        handleNewForm();
        handleEditForm();
        handleDeleteTodo();
        handleFormClose();
        handleFormSubmit();
        handleFormMark();
      },
      executeFirstLoad() {
        UI.firstRender();
        this.addListeners();
      },
      start() {
        UI.init();
        API.init();
      },
    };
  })();
  App.start();
});