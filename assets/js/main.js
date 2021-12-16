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
    } else {
      todoList.append(li);
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

      render();
    });

  });
};
const test1 = function () {


};

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (headerInput.value.trim() != '') {
    const newTodo = {
      text: headerInput.value,
      completed: false,
    };
    todoData.push(newTodo);
    localStorage.setItem('Test = 1', 'w');
    //localStorage.setItem(());
    headerInput.value = '';
    render();
  } else {
    alert('Insert data');
  }


});