const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const todoRemove = document.querySelector('.todo-remove');

const todoData = [];
//todoData = JSON.parse(localStorage.getItem('Task')) || [];
const tasks = JSON.parse(localStorage.getItem('Task')) || [];
tasks.forEach((item, index) => {
  todoData.push(item, index);
});

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
      render();
    });
    li.querySelector('.todo-remove').addEventListener('click', function () {
      let names;
      todoData.forEach(function (task, index) {
        names = task.text;
        console.log(names);
        console.log(index);
      });
      todoData.splice(name, 1);
      basicOperators();
    });

  });
};
const toStorage = function () {
  localStorage.setItem('Task', JSON.stringify(todoData));
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