const todoManager = {
  getTodos() {
    return todoList.extractAll();
  },
  getCompletedTodos() {
    return _(todoList.extractAll()).where({completed: true});
  },
  getTodosByDate(month, year) {
    let allTodos = todoList.extractAll();

    return allTodos.filter(todo => todo.isWithinMonthYear(month, year));
  },
  getCompletedTodosByDate(month, year){
    let completedTodos = this.getCompletedTodos();

    return completedTodos.filter(todo => todo.isWithinMonthYear(month, year));
  },
};


const todoList = (() => {
  let lastId = 1;
  const ID_SET = 4;
  const todos = [];
  const TODO_PROPS = [ 'id', 'title', 'month',
                     'year', 'description', 'completed'];

  function createId() {
    let val = String(lastId);
    lastId += 1;
    return val.padStart(ID_SET,'0');
  }

  function validId(checkId) {
    let ids = [];
    todos.forEach(todo => ids.push(todo.id));
    return ids.indexOf(checkId) !== -1;
  }

  function getTodo(id) {
    return _(todos).findWhere({id: id});
  }

  function getTodoIdx(id) {
    return todos.indexOf(getTodo(id));
  }

  function copyTodo(id) {
    let initialTodo = getTodo(id);
    return Object.assign(new Todo(), initialTodo);
  }

  return {
    add(obj) {
      if (_.isObject(obj)){
        let id = createId();
        let todo = new Todo(obj, id)
        todos.push(todo);
        return true;
      } else {
        return false;
      }
    },
    delete(id) {
      if (validId(id)) {
        let deletionIdx = getTodoIdx(id);
        todos.splice(deletionIdx, 1);
        return true;
      } else {
        return false;
      }
    },
    addMultiple(collection) {
      let numOfAdditions = 0;
      collection.forEach(obj => {
        this.add(obj) ? numOfAdditions += 1 : '';
      });
      return numOfAdditions;
    },
    update(props, id) {
      if (validId(id)) {
        let initialToDo = getTodo(id);

        _(props).keys().forEach(key => {
          if(TODO_PROPS.indexOf(key) !== -1) {
            initialToDo[key] = props[key];
          }
        });
        return true;
      } else {
        return false;
      }
    },
    extractTodo(id) {
      if (validId(id)) {
        return copyTodo(id);
      } else {
        return undefined;
      }
    },
    extractAll() {
      let newArr = [];
      todos.forEach(todo => newArr.push(copyTodo(todo.id)));

      return newArr;
    },
    deleteAll() {
      let currentLength = todos.length;
      todos.length = 0;
      lastId = 1;

      return currentLength;
    }
  };
})();


function Todo(obj = {}, id) {
  const currentDate = new Date();
  const currentMonth = String(currentDate.getMonth() + 1);
  const currentYear = String(currentDate.getFullYear());

  this.id = id;
  this.title = obj.title || 'Untitled';
  this.completed = obj.completed || false;
  this.month = String(obj.month || currentMonth);
  this.year = String(obj.year || currentYear);
  this.description = obj.description || 'N/A';

  if (typeof this.isWithinMonthYear !== 'function') {
    Object.getPrototypeOf(this).isWithinMonthYear = function (month, year) {
      return this.month === String(month) && this.year === String(year);
    };
  }
}


//--------------------------------------------------------TEST SUITE-------------------------------------------------------

//-----------------Test Functions-------------------------
var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}
//-----------------Test Data------------------------------

let todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

let todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

let todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

let todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

let todoData5 = {
  title: 'Clean Kitchen',
  month: '10',
  year: '2020',
  completed: true,
  description: '',
};

let todoData6 = {
  title: 'Repair Radio',
  month: 4,
  year: 1970,
  completed: true,
  description: 'Go back in time and undo it!',
};


let todoSet = [todoData1, todoData2, todoData3, todoData4, todoData5, todoData6];


//-------------------Tests------------------------------
(() => {
  test("Todo is defined", function() {
    return _.isFunction(Todo);
  });
  test("Month works as expected", function() {
    return new Todo(todoData3).isWithinMonthYear('1', '2020') && new Todo(todoData1).isWithinMonthYear('1', '2017');
  });
  test("Year works as expected", function() {
    return new Todo(todoData6).year === '1970' && new Todo(todoData2).year === '2017';
  });
  test("isWithinMonthYear('8','2020') returns true when no month/year provided", function() {
    return (new Todo(todoData4)).isWithinMonthYear('8', '2020');
  });
  test("N/A is added to description when nothing is provided", function() {
    return new Todo(todoData5).description === 'N/A';
  });
  test("Objects can be created as completed", function() {
    return new Todo(todoData6).completed === true;
  });
})();

(() => {
  test("todoList is defined", function() {
    return _.isObject(todoList)
  });
  test("add returns true if an object is supplied", function() {
    return todoList.add({}) === true;
  });
  test("add returns false if a non-object data supplied", function() {
    return todoList.add('todo') === false && todoList.add(42) === false;
  });

  todoList.add({});

  test("add without title assigns Untitled", function() {
    return todoList.extractTodo('0002').title === 'Untitled';
  });
  test("add without completed assigns false", function() {
    return todoList.extractTodo('0002').completed === false;
  });
  test("add without month assigns current month", function() {
    return todoList.extractTodo('0002').month === '8';
  });
  test("add without year assigns current year", function() {
    return todoList.extractTodo('0002').year === '2020';
  });
  test("add without description assigns N/A", function() {
    return todoList.extractTodo('0002').description === 'N/A';
  });

  todoList.deleteAll();
  todoList.add(todoData1);
  todoList.add(todoData2);
  const allTodos = todoList.extractAll();
  let firstTodo = allTodos[0];
  let secondTodo = allTodos[1];

  test("id assignment works", function() {
    return firstTodo.id === '0001' && secondTodo.id === '0002';
  });
  test("Extraction returns copy of the object", function() {
    return firstTodo !== todoList.extractTodo('0001');
  });
  test("Accessing title property of returned copy", function() {
    return firstTodo.title === 'Buy Milk';
  });
  test("Accessing month property of returned copy", function() {
    return firstTodo.month === '1';
  });
  test("Accessing year property of returned copy", function() {
    return firstTodo.year === '2017';
  });
  test("Accessing description property of returned copy", function() {
    return firstTodo.description === 'Milk for baby';
  });
  test("Accessing shared method isWithinMonthYear of returned copy", function() {
    return firstTodo.isWithinMonthYear('1', '2017');
  });

  test("delete returns false if an invalid id is given", function() {
    return todoList.delete(10) === false && todoList.delete(1) === false;
  });
  test("delete returns as expected", function() {
    return todoList.delete('0001') === true && todoList.extractAll().length === 1;
  });

  test("addMultiple works as expected", function() {
    return todoList.addMultiple([todoData3, todoData4]) === 2 && todoList.extractAll().length === 3;
  });
  test("addMultiple with filters out correct data types", function() {
    let buggyInput = [todoData5, 'not an object'];
    return todoList.addMultiple(buggyInput) === 1 && todoList.extractAll().length === 4;
  });

  test("update with invalid id returns false", function() {
    return todoList.update(1000) === false && todoList.update('02910') === false;
  });
  test("update with single property change", function() {
    const updateOperation = todoList.update({completed: true}, '0002');
    return updateOperation && todoList.extractTodo('0002').completed;
  });
  test("update with multiple properties", function() {
    const updateOperation = todoList.update({completed: true, month: '10'}, '0004');
    const checkComplete = todoList.extractTodo('0004').completed === true;
    const checkMonth = todoList.extractTodo('0004').month === '10';

    return updateOperation && checkComplete && checkMonth;
  });
  test("ignore invalid property", function() {
    const updateOperation = todoList.update({completed: true, invalid: 'N/A'}, '0005');
    const checkInvalidProp = _(todoList.extractTodo('0005')).has('invalid') === false;
    const checkCompleted = todoList.extractTodo('0005').completed;

    return updateOperation && checkInvalidProp && checkCompleted;
  });

  test("extractTodo with invalid id returns undefined", function() {
    return todoList.extractTodo(NaN) === undefined;
  });
  test("extractTodo with valid id returns a copy", function() {
    let todoCopy6 = todoList.extractTodo('0005');
    todoCopy6.title = 'Don\'t clean kitchen';
    return todoCopy6.title !== todoList.extractTodo('0005').title;
  });
  test("extractTodo returns correct object", function() {
    todoCopy4 = todoList.extractTodo('0003');

    return todoCopy4.title === 'Buy chocolate' && todoCopy4.completed === false && todoCopy4.month === '1';
  });

  test("deleteAll works as expected", function() {
    return todoList.deleteAll() === 4 && todoList.extractAll().length === 0;
  });

  test("Add the entire set with addMultiple", function() {
    return todoList.addMultiple(todoSet) === 6 && todoList.extractAll().length === 6;
  });

  test("getTodos return correct no. of items", function() {
    return todoManager.getTodos().length === 6;
  });

  test("getCompletedTodos return correct no. of items", function() {
    return todoManager.getCompletedTodos().length === 2;
  });

  test("getTodosByDate returns correct result", function() {
    return todoManager.getTodosByDate('8', '2020')[0].title === 'Buy Veggies';
  });
  test("getTodosByDate with invalid date returns empty array", function() {
    return todoManager.getTodosByDate('8', '1970').length === 0;
  });

  test("getCompletedTodosByDate('10', '2020') returns one todo", function() {
    return todoManager.getCompletedTodosByDate('10', '2020').length === 1;
  });
  test("getCompletedTodosByDate without a match returns empty array", function() {
    let assert = todoManager.getCompletedTodosByDate('1', '1940');
    
    return _.isArray(assert) && assert.length === 0;
  });
  test("getCompletedTodosByDate with invalid arguments returns an empty array", function() {
    let assert = todoManager.getCompletedTodosByDate(534, 20000);

    return _.isArray(assert) && assert.length === 0;
  });
})();
