const selectProjectKindOfProject = document.querySelector(
  '.select-proyecto-registro'
);

// Inputs de los campos generales
const inputsDeveloperNewProject = document.querySelectorAll(
  '#inputNuevoProyectoNombre, #inputNuevoProyectoDesarrollador, #inputNuevoProyectoArquitectos, #inputNuevoProyectoPrecioInicial'
);

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

// Text fields de las casas (caracteristicas)
const inputsFieldsCaracteristicasCasas = document.querySelectorAll(
  '.form-caracteristicas-casas-container > .row > .col-12 > .input-campo > input'
);

// Radio checks de las casas
const radioChecksCaracteristicasCasas = document.querySelectorAll(
  '.form-caracteristicas-casas-container > .row > .radio-check > .form-check > input'
);

// radio check sobre los metros cuadrados de la terraza (casas)
const radioCheckTerrazasCasas = document.querySelectorAll(
  '.radio-check-terrazas-casas > .form-check > input'
);

// Input field de los metros cuadrados de la terraza (casas)
const inputFieldM2TerrazasCasas = document.querySelector(
  '#inputNuevoProyectoM2DeTerrazasCasas'
);

// Checkboxes de los departamentos (amenidades)
const checkBoxesAmenidadesDepartamentos = document.querySelectorAll(
  '.form-amenidades-container-departamentos > .form-check > input'
);

// Text fields de las casas (caracteristicas)
const inputsFieldsCaracteristicasDepartamentos = document.querySelectorAll(
  '.form-caracteristicas-departamentos-container > .row > .col-12 > .input-campo > input'
);

// Radio checks de los departamentos
const radioChecksCaracteristicasDepartamentos = document.querySelectorAll(
  '.radio-check-depas > .form-check > input'
);

// radio check sobre los metros cuadrados de la terraza (departamentos)
const radioCheckTerrazasDepartamentos = document.querySelectorAll(
  '.radio-check-terrazas-depas > .form-check > input'
);

// Input field de los metros cuadrados de la terraza (departamentos)
const inputFieldM2TerrazasDepartamentos = document.querySelector(
  '#inputNuevoProyectoM2DeTerrazasDepartamentos'
);

// Checkboxes de los terrenos (amenidades)
const checkBoxesAmenidadesTerrenos = document.querySelectorAll(
  '.form-amenidades-container-terrenos > .form-check > input'
);

// Text fields de los terrenos (caracteristicas)
const inputsFieldsCaracteristicasTerrenos = document.querySelectorAll(
  '.form-caracteristicas-terrenos-container > .row > .col-12 > .input-campo > input'
);

// Condiciones generales
let conditionGeneralInputs = false;
let conditionGeneralSelects = false;
let conditionFechasEntrega = false;
// Condiciones casas
let conditionCheckBoxesAmenidadesCasas = false;
let conditionInputFieldsCaracteristicasCasas = false;
let conditionRadioCheckWalkingClosetCasas = false;
let conditionRadioCheckFlexCasas = false;
let conditionRadioLockOffCasas = false;
let conditionRadioHabServicioCasas = false;
let conditionRadioBodegaCasas = false;
let conditionRadioTerrazaCasas = false;
let conditionRadioTerrazaCasasToValidate = false;
// Condiciones departamentos
let conditionCheckBoxesAmenidadesDepartamentos = false;
let conditionInputFieldsCaracteristicasDepartamentos = false;
let conditionRadioCheckWalkingClosetDepartamentos = false;
let conditionRadioCheckFlexDepartamentos = false;
let conditionRadioLockOffDepartamentos = false;
let conditionRadioHabServicioDepartamentos = false;
let conditionRadioBodegaDepartamentos = false;
let conditionRadioTerrazaDepartamentos = false;
let conditionRadioTerrazaDepartamentosToValidate = false;
// Condiciones terrenos
let conditionCheckBoxesAmenidadesTerrenos = false;
let conditionInputFieldsCaracteristicasTerrenos = false;

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
    conditionCheckBoxesAmenidadesCasas &&
    conditionInputFieldsCaracteristicasCasas &&
    conditionRadioCheckWalkingClosetCasas &&
    conditionRadioCheckFlexCasas &&
    conditionRadioLockOffCasas &&
    conditionRadioHabServicioCasas &&
    conditionRadioBodegaCasas &&
    conditionRadioTerrazaCasas
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
    conditionCheckBoxesAmenidadesDepartamentos &&
    conditionInputFieldsCaracteristicasDepartamentos &&
    conditionRadioCheckWalkingClosetDepartamentos &&
    conditionRadioCheckFlexDepartamentos &&
    conditionRadioLockOffDepartamentos &&
    conditionRadioHabServicioDepartamentos &&
    conditionRadioBodegaDepartamentos &&
    conditionRadioTerrazaDepartamentos
  ) {
    if (radioCheckTerrazasDepartamentos[0].checked) {
      if (inputFieldM2TerrazasDepartamentos.value > 0) {
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

const checkConditionalsTerrenos = () => {
  if (
    conditionGeneralInputs &&
    conditionGeneralSelects &&
    conditionFechasEntrega &&
    conditionCheckBoxesAmenidadesTerrenos &&
    conditionInputFieldsCaracteristicasTerrenos
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
    input.addEventListener('change', () => {
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

const addEventListenerListInputsFieldsCaracteCasas = () => {
  let array = [...inputsFieldsCaracteristicasCasas];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.value.length >= 1) {
        conditionInputFieldsCaracteristicasCasas = true;
      } else {
        conditionInputFieldsCaracteristicasCasas = false;
      }
    });
  });
};

// Radio check Walking closet casas
const addEventListenerListRadioCheckWalkingClosetCasas = () => {
  let array = [
    radioChecksCaracteristicasCasas[0],
    radioChecksCaracteristicasCasas[1],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioCheckWalkingClosetCasas = true)
        : (conditionRadioCheckWalkingClosetCasas = false);
    });
  });
};

// Radio check Flex casas
const addEventListenerListRadioCheckFlexCasas = () => {
  let array = [
    radioChecksCaracteristicasCasas[2],
    radioChecksCaracteristicasCasas[3],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioCheckFlexCasas = true)
        : (conditionRadioCheckFlexCasas = false);
    });
  });
};

const addEventListenerListRadioCheckLockOffCasas = () => {
  let array = [
    radioChecksCaracteristicasCasas[4],
    radioChecksCaracteristicasCasas[5],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioLockOffCasas = true)
        : (conditionRadioLockOffCasas = false);
    });
  });
};

const addEventListenerListRadioCheckHabServicioCasas = () => {
  let array = [
    radioChecksCaracteristicasCasas[6],
    radioChecksCaracteristicasCasas[7],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioHabServicioCasas = true)
        : (conditionRadioHabServicioCasas = false);
    });
  });
};

const addEventListenerListRadioCheckBodegaCasas = () => {
  let array = [
    radioChecksCaracteristicasCasas[8],
    radioChecksCaracteristicasCasas[9],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioBodegaCasas = true)
        : (conditionRadioBodegaCasas = false);
    });
  });
};

const addEventListenerListRadioCheckTerrazasCasas = () => {
  let array = [radioCheckTerrazasCasas[0], radioCheckTerrazasCasas[1]];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioTerrazaCasas = true)
        : (conditionRadioTerrazaCasas = false);
    });
  });
};

// Caracteristicas de la casa
addEventListenerListInputsFieldsCaracteCasas();
addEventListenerListRadioCheckWalkingClosetCasas();
addEventListenerListRadioCheckFlexCasas();
addEventListenerListRadioCheckLockOffCasas();
addEventListenerListRadioCheckHabServicioCasas();
addEventListenerListRadioCheckBodegaCasas();
addEventListenerListRadioCheckTerrazasCasas();

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

const addEventListenerListInputsFieldsCaracteDepartamentos = () => {
  let array = [...inputsFieldsCaracteristicasDepartamentos];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.value.length >= 1) {
        conditionInputFieldsCaracteristicasDepartamentos = true;
      } else {
        conditionInputFieldsCaracteristicasDepartamentos = false;
      }
    });
  });
};

// Radio check Walking closet casas
const addEventListenerListRadioCheckWalkingClosetDepartamentos = () => {
  let array = [
    radioChecksCaracteristicasDepartamentos[0],
    radioChecksCaracteristicasDepartamentos[1],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioCheckWalkingClosetDepartamentos = true)
        : (conditionRadioCheckWalkingClosetDepartamentos = false);
    });
  });
};

// Radio check Flex casas
const addEventListenerListRadioCheckFlexDepartamentos = () => {
  let array = [
    radioChecksCaracteristicasDepartamentos[2],
    radioChecksCaracteristicasDepartamentos[3],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioCheckFlexDepartamentos = true)
        : (conditionRadioCheckFlexDepartamentos = false);
    });
  });
};

const addEventListenerListRadioCheckLockOffDepartamentos = () => {
  let array = [
    radioChecksCaracteristicasDepartamentos[4],
    radioChecksCaracteristicasDepartamentos[5],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioLockOffDepartamentos = true)
        : (conditionRadioLockOffDepartamentos = false);
    });
  });
};

const addEventListenerListRadioCheckHabServicioDepartamentos = () => {
  let array = [
    radioChecksCaracteristicasDepartamentos[6],
    radioChecksCaracteristicasDepartamentos[7],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioHabServicioDepartamentos = true)
        : (conditionRadioHabServicioDepartamentos = false);
    });
  });
};

const addEventListenerListRadioCheckBodegaDepartamentos = () => {
  let array = [
    radioChecksCaracteristicasDepartamentos[8],
    radioChecksCaracteristicasDepartamentos[9],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioBodegaDepartamentos = true)
        : (conditionRadioBodegaDepartamentos = false);
    });
  });
};

const addEventListenerListRadioCheckTerrazasDepartamentos = () => {
  let array = [
    radioCheckTerrazasDepartamentos[0],
    radioCheckTerrazasDepartamentos[1],
  ];
  array.map((input) => {
    input.addEventListener('change', () => {
      input.checked
        ? (conditionRadioTerrazaDepartamentos = true)
        : (conditionRadioTerrazaDepartamentos = false);
    });
  });
};

// Input fields de caracteristicas (departamentos)
addEventListenerListInputsFieldsCaracteDepartamentos();
addEventListenerListRadioCheckWalkingClosetDepartamentos();
addEventListenerListRadioCheckFlexDepartamentos();
addEventListenerListRadioCheckLockOffDepartamentos();
addEventListenerListRadioCheckHabServicioDepartamentos();
addEventListenerListRadioCheckBodegaDepartamentos();
addEventListenerListRadioCheckTerrazasDepartamentos();

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

const addEventListenerListInputsFieldsCaracteTerrenos = () => {
  let array = [...inputsFieldsCaracteristicasTerrenos];
  array.map((input) => {
    input.addEventListener('change', () => {
      if (input.value.length >= 1) {
        conditionInputFieldsCaracteristicasTerrenos = true;
      } else {
        conditionInputFieldsCaracteristicasTerrenos = false;
      }
    });
  });
};

addEventListenerListInputsFieldsCaracteTerrenos();

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
