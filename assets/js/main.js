const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const todoRemove = document.querySelector('.todo-remove');

const todoData = [];

const render = function () {
  todoList.innerHTML = '';
  todoCompleted.innerHTML = '';
  todoData.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class = "todo-buttons" >' +
      '<button class = "todo-remove"> </button>' +
      '<button class = "todo-complete"> </button>' +
      '</div>';

    if (item.completed) {
      todoCompleted.append(li);
      toStorage();
    } else {
      todoList.append(li);
      toStorage();
    }

    li.querySelector('.todo-complete').addEventListener('click', function () {
      item.completed = !item.completed;
      toStorage();
      render();
    });
    li.querySelector('.todo-remove').addEventListener('click', function () {
      let x = item.text;
      todoData.forEach(function (item, index) {
        if (item.text === x) {
          todoData.splice(index, 1);
          toStorage();
        }
      });
      render();
    });

  });
};
const toStorage = function () {
  localStorage.setItem('Task', JSON.stringify(todoData));
};
const toData = function () {
  const tasks = JSON.parse(localStorage.getItem('Task')) || [];
  tasks.forEach((item) => {
    todoData.push(item);
  });
};
const basicOperators = function () {
  toStorage();
  render();
};

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (headerInput.value.trim() != '') {
    const newTodo = {
      text: headerInput.value,
      completed: false,
    };
    todoData.push(newTodo);
    toStorage();
    headerInput.value = '';
    render();
  } else {
    alert('Insert data');
  }

});
toData();
render();