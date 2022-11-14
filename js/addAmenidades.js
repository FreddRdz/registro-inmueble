const taskInputCasas = document.querySelector('.task-input-casas input');
const taskBoxCasas = document.querySelector('.task-box-casas');

let editId;
let isEditedTask = false;

// let todos = JSON.parse(localStorage.getItem('todo-list'));
let todos = [];

const showTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `
            <li class="task-casas border-bottom">
              <p class="task-text">${todo.name}</p>
              <div class="settings-casas">
                <i class="fa-solid fa-ellipsis"></i>
                <ul class="task-menu-casas shadow">
                  <li onClick="editTask(${id}, '${todo.name}')"><i class="fa-solid fa-pen"></i>Editar</li>
                  <li onClick="deleteTask(${id})"><i class="fa-solid fa-trash"></i>Borrar</li>
                </ul>
              </div>
            </li>`;
    });
  }

  taskBoxCasas.innerHTML = li;
};

showTodo();

const deleteTask = (id) => {
  todos.splice(id, 1);
  // localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
};

const editTask = (id, name) => {
  editId = id;
  isEditedTask = true;
  taskInputCasas.value = name;
};

taskInputCasas.addEventListener('keyup', (e) => {
  let userTask = taskInputCasas.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!isEditedTask) {
      if (!todos) {
        todos = [];
      }
      let taskInfo = { name: userTask, status: 'pending' };
      todos.push(taskInfo);
    } else {
      isEditedTask = false;
      todos[editId].name = userTask;
    }
    taskInputCasas.value = '';
    // localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
  }
});
