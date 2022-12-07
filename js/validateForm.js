// Field input modales casas
const inputFieldValidateCasas = document.querySelectorAll(
  '.inputModalNumberCasas'
);

// Funcion que comprueba si el valor de un input es negativo, si tiene una palabra
const addEventListenerKeyUpModalCasas = () => {
  let array = [...inputFieldValidateCasas];

  array.map((input) => {
    input.addEventListener('keyup', (e) => {
      if (input.value < 0) {
        alertWarning('No puedes dejar valores negativos en este campo');
        input.value = '';
      }

      if (e.keyCode >= 48 && e.keyCode <= 57) {
        input.value = numberWithCommas(input.value);
      } else if (e.keyCode === 8) {
        input.value = numberWithCommas(input.value);
      } else {
        input.value = numerWithOutAlphaNumerics(input.value);
      }
    });
  });
};

addEventListenerKeyUpModalCasas();

// Field input modales depas
const inputFieldValidateDepas = document.querySelectorAll(
  '.inputModalNumberDepas'
);

// Funcion que comprueba si el valor de un input es negativo, si tiene una palabra
const addEventListenerKeyUpModalDepas = () => {
  let array = [...inputFieldValidateDepas];

  array.map((input) => {
    input.addEventListener('keyup', (e) => {
      if (input.value < 0) {
        alertWarning('No puedes dejar valores negativos en este campo');
        input.value = '';
      }

      if (e.keyCode >= 48 && e.keyCode <= 57) {
        input.value = numberWithCommas(input.value);
      } else if (e.keyCode === 8) {
        input.value = numberWithCommas(input.value);
      } else {
        input.value = numerWithOutAlphaNumerics(input.value);
      }
    });
  });
};

addEventListenerKeyUpModalDepas();

// Field input modales terrenos
const inputFieldValidateTerrenos = document.querySelectorAll(
  '.inputModalNumberTerreno'
);

// Funcion que comprueba si el valor de un input es negativo, si tiene una palabra
const addEventListenerKeyUpModalTerrenos = () => {
  let array = [...inputFieldValidateTerrenos];

  array.map((input) => {
    input.addEventListener('keyup', (e) => {
      if (input.value < 0) {
        alertWarning('No puedes dejar valores negativos en este campo');
        input.value = '';
      }

      if (e.keyCode >= 48 && e.keyCode <= 57) {
        input.value = numberWithCommas(input.value);
      } else if (e.keyCode === 8) {
        input.value = numberWithCommas(input.value);
      } else {
        input.value = numerWithOutAlphaNumerics(input.value);
      }
    });
  });
};

addEventListenerKeyUpModalTerrenos();

const selectProjectKindOfProject = document.querySelector(
  '.select-proyecto-registro'
);

// Inputs de los campos generales
const inputsDeveloperNewProject = document.querySelectorAll(
  '#inputNuevoProyectoNombre, #inputNuevoProyectoDesarrollador, #inputNuevoProyectoArquitectos, #inputNuevoProyectoPrecioInicial'
);

inputsDeveloperNewProject[3].addEventListener('keyup', (e) => {
  if (inputsDeveloperNewProject[3].value < 0) {
    alertWarning('No puedes dejar valores negativos en este campo');
    inputsNewDeveloperForm[1].value = '';
  }

  if (e.keyCode >= 48 && e.keyCode <= 57) {
    inputsDeveloperNewProject[3].value = numberWithCommas(
      inputsDeveloperNewProject[3].value
    );
  } else if (e.keyCode === 8) {
    inputsDeveloperNewProject[3].value = numberWithCommas(
      inputsDeveloperNewProject[3].value
    );
  } else {
    inputsDeveloperNewProject[3].value = numerWithOutAlphaNumerics(
      inputsDeveloperNewProject[3].value
    );
  }
});

// Selects de los campos generales
const selectsDeveloperNewProject = document.querySelectorAll(
  '.select-estado-registro, .select-estado-registro, .select-estado-registro'
);

// RadioChecks fechas de entrega
const radioChecksFechasEntrega = document.querySelectorAll(
  '.form-fecha-entrega-container > div > .form-check > input'
);

// Checkboxes de las casas (amenidades)
const checkBoxesAmenidadesCasas = document.querySelectorAll(
  '.form-amenidades-container-casas > .form-check > input'
);

// Checkboxes de los departamentos (amenidades)
const checkBoxesAmenidadesDepartamentos = document.querySelectorAll(
  '.form-amenidades-container-departamentos > .form-check > input'
);

// Checkboxes de los terrenos (amenidades)
const checkBoxesAmenidadesTerrenos = document.querySelectorAll(
  '.form-amenidades-container-terrenos > .form-check > input'
);

// Condiciones generales
let conditionGeneralInputs = false;
let conditionGeneralSelects = false;
let conditionFechasEntrega = false;
// Condiciones casas
let conditionCheckBoxesAmenidadesCasas = false;
// Condiciones departamentos
let conditionCheckBoxesAmenidadesDepartamentos = false;
// Condiciones terrenos
let conditionCheckBoxesAmenidadesTerrenos = false;

// Inputs para llenar la información del nuevo desarrollador
const inputsNewDeveloperForm = document.querySelectorAll(
  '#inputNuevoDesarrollador, #inputAniosExperiencia'
);

// Botón para registrar un nuevo desarrollador
const btnRegisterNewDeveloper = document.querySelector(
  '.btn-registrar-desarrollador'
);

// Botón para registrar un nuevo proyecto
const btnRegisterNewProject = document.querySelector('.btn-registrar-proyecto');

// Evento del botón de registrar nuevo desarrollador
btnRegisterNewDeveloper.addEventListener('keyup', () => {
  // Acccion para registrar un nuevo desarrollador
});

// Evento donde si el valor es negativo o si es mayor de 100, lanzará una alerta
inputsNewDeveloperForm[1].addEventListener('keyup', () => {
  if (inputsNewDeveloperForm[1].value < 0) {
    alertWarning('No puedes dejar valores negativos en este campo');
    inputsNewDeveloperForm[1].value = '';
  }

  if (inputsNewDeveloperForm[1].value > 100) {
    alertWarning(
      `¿Estás seguro que tu desarrollador tiene más de ${inputsNewDeveloperForm[1].value} años?`
    );
    inputsNewDeveloperForm[1].value = '';
  }
});

btnRegisterNewProject.addEventListener('click', () => {
  if (selectProjectKindOfProject.value === 'Casas') checkConditionalsCasas();
  if (selectProjectKindOfProject.value === 'Departamentos')
    checkConditionalsDepartamentos();
  if (selectProjectKindOfProject.value === 'Terrenos')
    checkConditionalsTerrenos();
});

const checkConditionalsCasas = () => {
  if (
    conditionGeneralInputs &&
    conditionGeneralSelects &&
    conditionFechasEntrega &&
    conditionCheckBoxesAmenidadesCasas
  ) {
    if (radioCheckTerrazasCasas[0].checked) {
      if (inputFieldM2TerrazasCasas.value > 0) {
        swalAlertSuccessAddProject();
      } else {
        swalAlertMissingFields();
      }
    } else {
      swalAlertSuccessAddProject();
    }
  } else {
    swalAlertMissingFields();
  }
};

const checkConditionalsDepartamentos = () => {
  if (
    conditionGeneralInputs &&
    conditionGeneralSelects &&
    conditionFechasEntrega &&
    conditionCheckBoxesAmenidadesDepartamentos
  ) {
    swalAlertSuccessAddProject();
  } else {
    swalAlertMissingFields();
  }
};

const checkConditionalsTerrenos = () => {
  if (
    conditionGeneralInputs &&
    conditionGeneralSelects &&
    conditionFechasEntrega &&
    conditionCheckBoxesAmenidadesTerrenos
  ) {
    swalAlertSuccessAddProject();
  } else {
    swalAlertMissingFields();
  }
};

inputsNewDeveloperForm[0].addEventListener('change', () => {
  const numbers = '0123456789';
  for (let i = 0; i < inputsNewDeveloperForm[0].value.length; i++) {
    if (numbers.indexOf(inputsNewDeveloperForm[0].value.charAt(i), 0) != -1) {
      alertError(`El nombre del desarrollador no puede tener números!`);
      inputsNewDeveloperForm[0].value = '';
    }
  }
});

const addEventListenerListNewDeveloper = () => {
  for (let i = 0; i < inputsNewDeveloperForm.length; i++) {
    inputsNewDeveloperForm[i].addEventListener('change', () => {
      if (
        inputsNewDeveloperForm[0].value.length > 4 &&
        inputsNewDeveloperForm[1].value.length > 0
      ) {
        btnRegisterNewDeveloper.disabled = false;
      } else {
        btnRegisterNewDeveloper.disabled = true;
      }
    });
  }
};

const addEventListenerListNewProjectGeneralInputs = () => {
  let array = [...inputsDeveloperNewProject];
  array.map((input) => {
    input.addEventListener('keyup', () => {
      if (input.value.length >= 4) {
        conditionGeneralInputs = true;
      } else {
        conditionGeneralInputs = false;
      }
    });
  });
};

const addEventListenerListNewProjectGeneralSelects = () => {
  let array = [...selectsDeveloperNewProject];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.value !== 'Selecciona...') {
        conditionGeneralSelects = true;
      } else {
        conditionGeneralSelects = false;
      }
    });
  });
};

const addEventListenerListRadioChecksFechasEntrega = () => {
  let array = [...radioChecksFechasEntrega];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        conditionFechasEntrega = true;
      } else {
        conditionFechasEntrega = false;
      }
    });
  });
};

//Fields generales
addEventListenerListNewDeveloper();
addEventListenerListNewProjectGeneralInputs();
addEventListenerListNewProjectGeneralSelects();
addEventListenerListRadioChecksFechasEntrega();

const addEventListenerListCheckBoxesAmenidadesCasas = () => {
  let array = [...checkBoxesAmenidadesCasas];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        conditionCheckBoxesAmenidadesCasas = true;
      } else {
        conditionCheckBoxesAmenidadesCasas = false;
      }
    });
  });
};

// Amenidades casas
addEventListenerListCheckBoxesAmenidadesCasas();

const addEventListenerListCheckBoxesAmenidadesDepartamentos = () => {
  let array = [...checkBoxesAmenidadesDepartamentos];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        conditionCheckBoxesAmenidadesDepartamentos = true;
      } else {
        conditionCheckBoxesAmenidadesDepartamentos = false;
      }
    });
  });
};

// Amenidades de la casa
addEventListenerListCheckBoxesAmenidadesDepartamentos();

const addEventListenerListCheckBoxesAmenidadesTerrenos = () => {
  let array = [...checkBoxesAmenidadesTerrenos];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.checked) {
        conditionCheckBoxesAmenidadesTerrenos = true;
      } else {
        conditionCheckBoxesAmenidadesTerrenos = false;
      }
    });
  });
};

// Amenidades de la casa
addEventListenerListCheckBoxesAmenidadesTerrenos();

const swalAlertSuccessAddProject = () => {
  Swal.fire({
    icon: 'success',
    title: `Has añadido un nuevo proyecto`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const swalAlertMissingFields = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No puedes dejar campos vacios!',
  });
};

const alertError = (text) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: text,
  });
};

const alertWarning = (text) => {
  Swal.fire({
    icon: 'warning',
    title: 'Un momento...',
    text: text,
  });
};

const numerWithOutAlphaNumerics = (value) => {
  return value.substring(0, value.length - 1);
};

const numberWithCommas = (value) => {
  let newString = '';

  if (value === '') {
    return '';
  }

  for (let i = 0; i < value.length; i++) {
    if (value[i] !== ',') {
      newString = newString + value[i];
    }
  }

  const num = Number(newString);

  return num.toLocaleString('en-US');
};
