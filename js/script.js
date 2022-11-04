// const selectEntregaInput = document.querySelector('.select-entrega');
// const selectAnioInput = document.querySelector('.select-anio');

// selectEntregaInput.addEventListener('change', () => {
//   if (selectEntregaInput.value === 'Entrega inmediata') {
//     selectAnioInput.disabled = true;
//   } else {
//     selectAnioInput.disabled = false;
//   }
// });

// const input = document.querySelector('#proyectoEstanciasToronto');
// console.log(input);

// input.addEventListener('change', () => {
//   console.log(input.checked);
// });

const newDeveloperContainer = document.querySelector('.nuevo-desarrollador');
const developerInfoContainer = document.querySelector('.info-desarrollador');
const selectDeveloper = document.querySelector('.select-desarrollador');
const kindOfProject = document.querySelector('.container-proyecto');

// console.log(selectDeveloper);

selectDeveloper.addEventListener('change', () => {
  if (selectDeveloper.value === 'Selecciona...') {
    newDeveloperContainer.classList.add('d-none');
    developerInfoContainer.classList.add('d-none');
    kindOfProject.classList.add('d-none');
  } else if (selectDeveloper.value === 'Desarrollador nuevo') {
    newDeveloperContainer.classList.toggle('d-none');
    developerInfoContainer.classList.add('d-none');
    kindOfProject.classList.add('d-none');
  } else {
    newDeveloperContainer.classList.add('d-none');
    developerInfoContainer.classList.toggle('d-none');
    kindOfProject.classList.toggle('d-none');
  }
});

const selectProject = document.querySelector('.select-proyecto');
const typeOfProjects = document.querySelector('.tipo-proyectos-container');
// const checkRadiosContainerHouses = document.querySelector(
//   '.tipo-proyecto-casas-container'
// );
// const checkRadiosContainerDepartements = document.querySelector(
//   '.tipo-proyecto-departamentos-container'
// );
// const checkRadiosContainerTerrains = document.querySelector(
//   '.tipo-proyecto-terrenos-container'
// );

const selectKindOfProject = document.querySelector(
  '.registrar-proyecto-container'
);

// console.log(checkRadiosContainerHouses);

selectProject.addEventListener('change', () => {
  //En caso que seleccionemos la elección por default, nos quitara los inputs de dabajo
  if (selectProject.value === 'Selecciona...') {
    // checkRadiosContainerHouses.classList.add('d-none');
    // checkRadiosContainerDepartements.classList.add('d-none');
    // checkRadiosContainerTerrains.classList.add('d-none');
    selectKindOfProject.classList.add('d-none');
    selectProjectContainerRegister.classList.add('d-none');
  }

  // Abrir inputs del nuevo proyecto
  if (selectProject.value === 'Proyecto nuevo') {
    selectKindOfProject.classList.remove('d-none');
  }
  // if (selectProject.value === 'Casas') {
  //   checkRadiosContainerHouses.classList.toggle('d-none');
  //   checkRadiosContainerDepartements.classList.add('d-none');
  //   checkRadiosContainerTerrains.classList.add('d-none');
  // }
  // if (selectProject.value === 'Departamentos') {
  //   checkRadiosContainerHouses.classList.add('d-none');
  //   checkRadiosContainerDepartements.classList.toggle('d-none');
  //   checkRadiosContainerTerrains.classList.add('d-none');
  // }
  // if (selectProject.value === 'Terrenos') {
  //   checkRadiosContainerHouses.classList.add('d-none');
  //   checkRadiosContainerDepartements.classList.add('d-none');
  //   checkRadiosContainerTerrains.classList.toggle('d-none');
  // }
});

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

const formContainerCaracteristicasDepartamentos = document.querySelector(
  '.form-caracteristicas-departamentos-container'
);
const formContainerCaracteristicasCasas = document.querySelector(
  '.form-caracteristicas-casas-container'
);
const formContainerCaracteristicasTerrenos = document.querySelector(
  '.form-caracteristicas-terrenos-container'
);

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

const checkRadioTerrazaM2CasasTrue = document.querySelector(
  '#flexRadioWalkinTerrazaTrueCasas'
);

const checkRadioTerrazaM2CasasFalse = document.querySelector(
  '#flexRadioWalkinTerrazaFalseCasas'
);

const inputTerrazaM2Casas = document.querySelector(
  '#inputNuevoProyectoM2DeTerrazasCasas'
);

checkRadioTerrazaM2CasasTrue.addEventListener('change', () => {
  if (checkRadioTerrazaM2CasasTrue.checked === true) {
    inputTerrazaM2Casas.disabled = false;
  }
});

checkRadioTerrazaM2CasasFalse.addEventListener('change', () => {
  if (checkRadioTerrazaM2CasasTrue.checked === false) {
    inputTerrazaM2Casas.disabled = true;
  }
});

const checkRadioTerrazaM2DepartamentosTrue = document.querySelector(
  '#flexRadioWalkinTerrazaTrueDepartamentos'
);

const checkRadioTerrazaM2DepartamentosFalse = document.querySelector(
  '#flexRadioWalkinTerrazaFalseDepartamentos'
);

const inputTerrazaM2Departamentos = document.querySelector(
  '#inputNuevoProyectoM2DeTerrazasDepartamentos'
);

checkRadioTerrazaM2DepartamentosTrue.addEventListener('change', () => {
  if (checkRadioTerrazaM2DepartamentosTrue.checked === true) {
    inputTerrazaM2Departamentos.disabled = false;
  }
});

checkRadioTerrazaM2DepartamentosFalse.addEventListener('change', () => {
  if (checkRadioTerrazaM2DepartamentosTrue.checked === false) {
    inputTerrazaM2Departamentos.disabled = true;
  }
});

const handleSelectCasasInputs = () => {
  // Quitar amenidades de departamentos y terrenos para solamente dejar las de casa
  formContainerAmenidadesCasas.classList.remove('d-none');
  formContainerAmenidadesDepartamentos.classList.add('d-none');
  formContainerAmenidadesTerrenos.classList.add('d-none');

  // Quitar caracteristicas de departamentos y terrenos para solamente dejar las de casa
  formContainerCaracteristicasCasas.classList.remove('d-none');
  formContainerCaracteristicasDepartamentos.classList.add('d-none');
  formContainerCaracteristicasTerrenos.classList.add('d-none');
};

const handleSelectDepartamentosInputs = () => {
  // Quitar amenidades de casas y terrenos para solamente dejar las de departamentos
  formContainerAmenidadesCasas.classList.add('d-none');
  formContainerAmenidadesDepartamentos.classList.remove('d-none');
  formContainerAmenidadesTerrenos.classList.add('d-none');

  // Quitar caracteristicas de departamentos y terrenos para solamente dejar las de casa
  formContainerCaracteristicasCasas.classList.add('d-none');
  formContainerCaracteristicasDepartamentos.classList.remove('d-none');
  formContainerCaracteristicasTerrenos.classList.add('d-none');
};

const handleSelectTerrenosInputs = () => {
  // Quitar amenidades de departamentos y casas para solamente dejar las de terrenos
  formContainerAmenidadesCasas.classList.add('d-none');
  formContainerAmenidadesDepartamentos.classList.add('d-none');
  formContainerAmenidadesTerrenos.classList.remove('d-none');

  // Quitar caracteristicas de departamentos y terrenos para solamente dejar las de casa
  formContainerCaracteristicasCasas.classList.add('d-none');
  formContainerCaracteristicasDepartamentos.classList.add('d-none');
  formContainerCaracteristicasTerrenos.classList.remove('d-none');
};
