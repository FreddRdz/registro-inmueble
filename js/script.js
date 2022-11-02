// const selectEntregaInput = document.querySelector('.select-entrega');
// const selectAnioInput = document.querySelector('.select-anio');

// selectEntregaInput.addEventListener('change', () => {
//   if (selectEntregaInput.value === 'Entrega inmediata') {
//     selectAnioInput.disabled = true;
//   } else {
//     selectAnioInput.disabled = false;
//   }
// });

const newDeveloperContainer = document.querySelector('.nuevo-desarrollador');
const developerInfoContainer = document.querySelector('.info-desarrollador');
const selectDeveloper = document.querySelector('.select-desarrollador');
const kindOfProject = document.querySelector('.container-proyecto');

console.log(selectDeveloper);

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
const checkRadiosContainerHouses = document.querySelector(
  '.tipo-proyecto-casas-container'
);
const checkRadiosContainerDepartements = document.querySelector(
  '.tipo-proyecto-departamentos-container'
);
const checkRadiosContainerTerrains = document.querySelector(
  '.tipo-proyecto-terrenos-container'
);

console.log(checkRadiosContainerHouses);

selectProject.addEventListener('change', () => {
  if (selectProject.value === 'Selecciona...') {
    console.log('Selecciona...');
    checkRadiosContainerHouses.classList.add('d-none');
    checkRadiosContainerDepartements.classList.add('d-none');
    checkRadiosContainerTerrains.classList.add('d-none');
  } else if (selectProject.value === 'Proyecto nuevo') {
    console.log('Nuevo proyecto');
  } else if (selectProject.value === 'Casas') {
    console.log('Casas');
    checkRadiosContainerHouses.classList.toggle('d-none');
    checkRadiosContainerDepartements.classList.add('d-none');
    checkRadiosContainerTerrains.classList.add('d-none');
  } else if (selectProject.value === 'Departamentos') {
    console.log('Departamentos');
    checkRadiosContainerHouses.classList.add('d-none');
    checkRadiosContainerDepartements.classList.toggle('d-none');
    checkRadiosContainerTerrains.classList.add('d-none');
  } else if (selectProject.value === 'Terrenos') {
    console.log('Terrenos');
    checkRadiosContainerHouses.classList.add('d-none');
    checkRadiosContainerDepartements.classList.add('d-none');
    checkRadiosContainerTerrains.classList.toggle('d-none');
  }
});
