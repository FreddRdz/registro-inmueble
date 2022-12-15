// Variables de la sección de desarrollador
const newDeveloperContainer = document.querySelector('.nuevo-desarrollador');
const developerInfoContainer = document.querySelector('.info-desarrollador');
const selectDeveloper = document.querySelector('.select-desarrollador');
const kindOfProject = document.querySelector('.container-proyecto');

selectDeveloper.addEventListener('change', () => {
  if (selectDeveloper.value === 'Selecciona...') {
    // Cerrar toda la sección de desarrpllador
    handleCloseDeveloperContainer();
  } else if (selectDeveloper.value === 'Desarrollador nuevo') {
    // Abrir sección de nuevo desarrollador para registrarlo
    handleOpenNewDeveloperContainer();
  } else {
    // Abrir sección de un desarrollador ya existente
    handleOpenDeveloperContainer();
  }
});

const selectProject = document.querySelector('.select-proyecto');
const typeOfProjects = document.querySelector('.tipo-proyectos-container');

const selectKindOfProject = document.querySelector(
  '.registrar-proyecto-container'
);

const selectProjectRegister = document.querySelector(
  '.select-proyecto-registro'
);

const selectProjectContainerRegister = document.querySelector(
  '.registrar-proyectos-container'
);

// Variables de las amenidades

const formContainerAmenidadesDepartamentos = document.querySelector(
  '.form-amenidades-container-departamentos'
);
const formContainerAmenidadesCasas = document.querySelector(
  '.form-amenidades-container-casas'
);
const formContainerAmenidadesTerrenos = document.querySelector(
  '.form-amenidades-container-terrenos'
);

// Variables de las características

const tablaContenedorDepartamentos = document.querySelector(
  '.table-departamentos'
);

const tablaContenedorCasas = document.querySelector('.table-casas');

const tablaContenedorTerrenos = document.querySelector('.table-terrenos');

selectProjectRegister.addEventListener('change', () => {
  if (selectProjectRegister.value !== 'Selecciona...') {
    selectProjectContainerRegister.classList.remove('d-none');
  } else if (selectProjectRegister.value === 'Selecciona...') {
    selectProjectContainerRegister.classList.toggle('d-none');
  }

  if (selectProjectRegister.value === 'Casas') {
    handleSelectCasasInputs();
  }

  if (selectProjectRegister.value === 'Departamentos') {
    handleSelectDepartamentosInputs();
  }

  if (selectProjectRegister.value === 'Terrenos') {
    handleSelectTerrenosInputs();
  }
});

// CheckRadio de las terrazas en sección casas si es verdadero
const checkRadioTerrazaM2CasasTrue = document.querySelector(
  '#flexRadioTerrazasTrueCasas'
);

// CheckRadio de las terrazas en sección casas si es falso
const checkRadioTerrazaM2CasasFalse = document.querySelector(
  '#flexRadioTerrazasFalseCasas'
);

// Input del campo de los metros cuadrados de las terrazas en sección casas
const inputTerrazaM2Casas = document.querySelector('.fieldM2DeTerrazasCasas');

const checkRadioTerrazaM2CasasNA = document.querySelector(
  '#flexRadioTerrazasNACasas'
);

checkRadioTerrazaM2CasasTrue.addEventListener('change', () => {
  // Si el checkbox es sí, habilitaremos el campo
  if (checkRadioTerrazaM2CasasTrue.checked === true) {
    inputTerrazaM2Casas.disabled = false;
    inputTerrazaM2Casas.value = '';
  }
});

checkRadioTerrazaM2CasasFalse.addEventListener('change', () => {
  // Si el checkbox es no, deshabilitaremos el campo y vaciaremos el valor del input
  if (checkRadioTerrazaM2CasasTrue.checked === false) {
    inputTerrazaM2Casas.disabled = true;
    inputTerrazaM2Casas.value = '';
  }
});

// CheckRadio de las terrazas en sección departamentos si es verdadero
const checkRadioTerrazaM2DepartamentosTrue = document.querySelector(
  '#flexRadioWalkinTerrazaTrueDepartamentos'
);

// CheckRadio de las terrazas en sección departamentos si es falso
const checkRadioTerrazaM2DepartamentosFalse = document.querySelector(
  '#flexRadioWalkinTerrazaFalseDepartamentos'
);

// Input del campo de los metros cuadrados de las terrazas en sección departamentos
const inputTerrazaM2Departamentos = document.querySelector(
  '#inputNuevoProyectoM2DeTerrazasDepartamentos'
);

checkRadioTerrazaM2DepartamentosTrue.addEventListener('change', () => {
  // Si el checkbox es sí, habilitaremos el campo
  if (checkRadioTerrazaM2DepartamentosTrue.checked === true) {
    inputTerrazaM2Departamentos.disabled = false;
  }
});

checkRadioTerrazaM2DepartamentosFalse.addEventListener('change', () => {
  // Si el checkbox es no, deshabilitaremos el campo y vaciaremos el valor del input
  if (checkRadioTerrazaM2DepartamentosTrue.checked === false) {
    inputTerrazaM2Departamentos.disabled = true;
    inputTerrazaM2Departamentos.value = '';
  }
});

const handleSelectCasasInputs = () => {
  // Quitar amenidades de departamentos y terrenos para solamente dejar las de casa
  formContainerAmenidadesCasas.classList.remove('d-none');
  formContainerAmenidadesDepartamentos.classList.add('d-none');
  formContainerAmenidadesTerrenos.classList.add('d-none');

  // Quitar caracteristicas de departamentos y terrenos para solamente dejar las de casa
  tablaContenedorCasas.classList.remove('d-none');
  tablaContenedorDepartamentos.classList.add('d-none');
  tablaContenedorTerrenos.classList.add('d-none');
};

const handleSelectDepartamentosInputs = () => {
  // Quitar amenidades de casas y terrenos para solamente dejar las de departamentos
  formContainerAmenidadesCasas.classList.add('d-none');
  formContainerAmenidadesDepartamentos.classList.remove('d-none');
  formContainerAmenidadesTerrenos.classList.add('d-none');

  // Quitar caracteristicas de departamentos y terrenos para solamente dejar las de casa
  tablaContenedorCasas.classList.add('d-none');
  tablaContenedorDepartamentos.classList.remove('d-none');
  tablaContenedorTerrenos.classList.add('d-none');
};

const handleSelectTerrenosInputs = () => {
  // Quitar amenidades de departamentos y casas para solamente dejar las de terrenos
  formContainerAmenidadesCasas.classList.add('d-none');
  formContainerAmenidadesDepartamentos.classList.add('d-none');
  formContainerAmenidadesTerrenos.classList.remove('d-none');

  // Quitar caracteristicas de departamentos y terrenos para solamente dejar las de casa
  tablaContenedorCasas.classList.add('d-none');
  tablaContenedorDepartamentos.classList.add('d-none');
  tablaContenedorTerrenos.classList.remove('d-none');
};

const handleCloseDeveloperContainer = () => {
  newDeveloperContainer.classList.add('d-none');
  developerInfoContainer.classList.add('d-none');
  kindOfProject.classList.add('d-none');
};

const handleOpenNewDeveloperContainer = () => {
  newDeveloperContainer.classList.toggle('d-none');
  developerInfoContainer.classList.add('d-none');
  kindOfProject.classList.add('d-none');
};

const handleOpenDeveloperContainer = () => {
  newDeveloperContainer.classList.add('d-none');
  developerInfoContainer.classList.toggle('d-none');
  kindOfProject.classList.toggle('d-none');
};

const fieldsDepartments = document.querySelectorAll(
  '.field-modal-departamentos'
);

const fieldsDepartmentsEdit = document.querySelectorAll(
  '.field-modal-departamentos-edit'
);

fieldsDepartments[1].addEventListener('change', () => {
  let num1 = numberWithOutComas(fieldsDepartments[1].value);
  let num2 = numberWithOutComas(fieldsDepartments[2].value);

  fieldsDepartments[3].value = num1 / num2;

  if (fieldsDepartments[3].value === 'Infinity') {
    fieldsDepartments[3].value = '';
  } else {
    fieldsDepartments[3].value = numberWithCommass(fieldsDepartments[3].value);
  }
});

fieldsDepartments[2].addEventListener('change', () => {
  let num1 = numberWithOutComas(fieldsDepartments[1].value);
  let num2 = numberWithOutComas(fieldsDepartments[2].value);

  fieldsDepartments[3].value = num1 / num2;

  if (fieldsDepartments[3].value === 'Infinity') {
    fieldsDepartments[3].value = '';
  } else {
    fieldsDepartments[3].value = numberWithCommass(fieldsDepartments[3].value);
  }
});

fieldsDepartmentsEdit[1].addEventListener('change', () => {
  let num1 = numberWithOutComas(fieldsDepartmentsEdit[1].value);
  let num2 = numberWithOutComas(fieldsDepartmentsEdit[2].value);

  fieldsDepartmentsEdit[3].value = num1 / num2;

  if (fieldsDepartmentsEdit[3].value === 'Infinity') {
    fieldsDepartmentsEdit[3].value = '';
  } else {
    fieldsDepartmentsEdit[3].value = numberWithCommass(
      fieldsDepartmentsEdit[3].value
    );
  }
});

fieldsDepartmentsEdit[2].addEventListener('change', () => {
  let num1 = numberWithOutComas(fieldsDepartmentsEdit[1].value);
  let num2 = numberWithOutComas(fieldsDepartmentsEdit[2].value);

  fieldsDepartmentsEdit[3].value = num1 / num2;

  if (fieldsDepartmentsEdit[3].value === 'Infinity') {
    fieldsDepartmentsEdit[3].value = '';
  } else {
    fieldsDepartmentsEdit[3].value = numberWithCommass(
      fieldsDepartmentsEdit[3].value
    );
  }
});

const numberWithCommass = (value) => {
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

const numberWithOutComas = (string) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    const element = string[i];

    if (element !== ',') {
      newString = newString + element;
    }
  }

  return Number(newString);
};
