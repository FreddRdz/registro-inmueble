const inputDesarrollador = document.querySelectorAll(
  '#inputNuevoProyectoNombre, #inputNuevoProyectoDesarrollador'
);

// Inputs para llenar la información del nuevo desarrollador
const inputsNewDeveloperForm = document.querySelectorAll(
  '#inputNuevoDesarrollador, #inputAniosExperiencia'
);

// Botón para registrar un nuevo desarrollador
const btnRegisterNewDeveloper = document.querySelector(
  '.btn-registrar-desarrollador'
);

// Validación en cuando el usuario llene los campos
inputsNewDeveloperForm[0].addEventListener('change', () => {
  if (
    inputsNewDeveloperForm[0].value.length &&
    inputsNewDeveloperForm[1].value.length >= 4
  ) {
    btnRegisterNewDeveloper.disabled = false;
  } else {
    btnRegisterNewDeveloper.disabled = true;
  }
});

// Validación en cuando el usuario llene los campos
inputsNewDeveloperForm[1].addEventListener('change', () => {
  if (
    inputsNewDeveloperForm[0].value.length &&
    inputsNewDeveloperForm[1].value.length >= 4
  ) {
    btnRegisterNewDeveloper.disabled = false;
  } else {
    btnRegisterNewDeveloper.disabled = true;
  }
});

// Evento del botón de registrar nuevo desarrollador
btnRegisterNewDeveloper.addEventListener('click', () => {
  Number(inputsNewDeveloperForm[1].value);

  if (inputsNewDeveloperForm[1].value > 100) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `¿Estás seguro que tu desarrollador tiene más de ${inputsNewDeveloperForm[1].value} años?`,
    });
  }
});
