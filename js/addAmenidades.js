const taskInputCasas = document.querySelector('.task-input-casas input');
const taskBoxCasas = document.querySelector('.task-box-casas');

let editIdCasas;
let isEditedTaskCasas = false;

// let todosCasas = JSON.parse(localStorage.getItem('todo-list'));
let todosCasas = [];

const showTodoCasas = () => {
  let li = '';
  if (todosCasas) {
    todosCasas.forEach((todo, id) => {
      li += `
            <li class="task-casas border-bottom">
              <p class="task-text">${todo.name}</p>
              <div class="settings-casas">
                <i class="fa-solid fa-ellipsis"></i>
                <ul class="task-menu-casas shadow">
                  <li onClick="editTaskCasas(${id}, '${todo.name}')"><i class="fa-solid fa-pen"></i>Editar</li>
                  <li onClick="deleteTaskCasas(${id})"><i class="fa-solid fa-trash"></i>Borrar</li>
                </ul>
              </div>
            </li>`;
    });
  }

  taskBoxCasas.innerHTML = li;
};

showTodoCasas();

const deleteTaskCasas = (id) => {
  todosCasas.splice(id, 1);
  // localStorage.setItem('todo-list', JSON.stringify(todosCasas));
  showTodoCasas();
};

const editTaskCasas = (id, name) => {
  editIdCasas = id;
  isEditedTaskCasas = true;
  taskInputCasas.value = name;
};

taskInputCasas.addEventListener('keyup', (e) => {
  let userTask = taskInputCasas.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!isEditedTaskCasas) {
      if (!todosCasas) {
        todosCasas = [];
      }
      let taskInfo = { name: userTask, status: 'pending' };
      todosCasas.push(taskInfo);
    } else {
      isEditedTaskCasas = false;
      todosCasas[editIdCasas].name = userTask;
    }
    taskInputCasas.value = '';
    // localStorage.setItem('todo-list', JSON.stringify(todosCasas));
    showTodoCasas();
  }
});

const taskInputDepartamentos = document.querySelector(
  '.task-input-departamentos input'
);
const taskBoxDepartamentos = document.querySelector('.task-box-departamentos');

let editIdDepartamentos;
let isEditedTaskDepartamentos = false;

let todosDepartamentos = [];

const showTodoDepartamentos = () => {
  let li = '';
  if (todosDepartamentos) {
    todosDepartamentos.forEach((todo, id) => {
      li += `
            <li class="task-departamentos border-bottom">
              <p class="task-text">${todo.name}</p>
              <div class="settings-departamentos">
                <i class="fa-solid fa-ellipsis"></i>
                <ul class="task-menu-departamentos shadow">
                  <li onClick="editTaskDepartamentos(${id}, '${todo.name}')"><i class="fa-solid fa-pen"></i>Editar</li>
                  <li onClick="deleteTaskDepartamentos(${id})"><i class="fa-solid fa-trash"></i>Borrar</li>
                </ul>
              </div>
            </li>`;
    });
  }

  taskBoxDepartamentos.innerHTML = li;
};

showTodoDepartamentos();

const deleteTaskDepartamentos = (id) => {
  todosDepartamentos.splice(id, 1);
  // localStorage.setItem('todo-list', JSON.stringify(todosCasas));
  showTodoDepartamentos();
};

const editTaskDepartamentos = (id, name) => {
  editIdDepartamentos = id;
  isEditedTaskDepartamentos = true;
  taskInputDepartamentos.value = name;
};

taskInputDepartamentos.addEventListener('keyup', (e) => {
  let userTask = taskInputDepartamentos.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!isEditedTaskDepartamentos) {
      if (!todosDepartamentos) {
        todosDepartamentos = [];
      }
      let taskInfo = { name: userTask, status: 'pending' };
      todosDepartamentos.push(taskInfo);
    } else {
      isEditedTaskDepartamentos = false;
      todosDepartamentos[editIdDepartamentos].name = userTask;
    }
    taskInputDepartamentos.value = '';
    // localStorage.setItem('todo-list', JSON.stringify(todosCasas));
    showTodoDepartamentos();
  }
});
