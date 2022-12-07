// Añadir tipologías en las tablas de los terrenos

const btnAddTipologyTerrain = document.querySelector(
  '.btn-add-tipologia-terrenos'
);

const btnAddTipologyTerrainEdit = document.querySelector(
  '.btn-add-tipologia-terrenos-edit'
);

const rowBodyTerrain = document.querySelector('.t-body-terrenos');

const fieldsInputsTerrain = document.querySelectorAll(
  '.field-modal-terrain > input'
);

const fieldsInputsTerrainEdits = document.querySelectorAll(
  '.field-modal-terrain-edit > input'
);

let tipologiesTerrains = [];
let idEditTerrain;

const showTipologiesTerrains = () => {
  let tr = '';

  if (tipologiesTerrains) {
    tipologiesTerrains.forEach((tipology, id) => {
      tr += `
        <tr>
          <th scope="row" class="text-center">${id + 1}</th>
          <td class="text-center">
            ${tipology.modelo}
          </td>
          <td class="text-center">
            <button 
            class="button-table" 
            data-bs-toggle="modal"
            data-bs-target="#modalFormTerrenosEdit" 
            onClick="editTipologyTerrenos(${id}, '${tipology.modelo}', '${
        tipology.precio
      }', '${tipology.m2Terreno}', '${tipology.frente}', '${
        tipology.fondo
      }', '${tipology.precioM2}', '${tipology.cus}', '${tipology.cusTotal}', '${
        tipology.cos
      }', '${tipology.cosTotal}', '${tipology.alturaMaxima}')">
              <i class="fa-solid fa-pen fa-lg pen-icon"></i>
            </button>
          </td>
          <td class="text-center">
            <button class="button-table" onClick="deleteTipologyTerrenos(${id})">
              <i
                class="fa-solid fa-trash fa-lg trash-icon"
              ></i>
            </button>
          </td>
        </tr>
      `;
    });
  }

  rowBodyTerrain.innerHTML = tr;
};

showTipologiesTerrains();

btnAddTipologyTerrain.addEventListener('click', () => {
  const tipology = {
    modelo: fieldsInputsTerrain[0].value.trim(),
    precio: fieldsInputsTerrain[1].value.trim(),
    m2Terreno: fieldsInputsTerrain[2].value.trim(),
    frente: fieldsInputsTerrain[3].value.trim(),
    fondo: fieldsInputsTerrain[4].value.trim(),
    precioM2: fieldsInputsTerrain[5].value.trim(),
    cus: fieldsInputsTerrain[6].value.trim(),
    cusTotal: fieldsInputsTerrain[7].value.trim(),
    cos: fieldsInputsTerrain[8].value.trim(),
    cosTotal: fieldsInputsTerrain[9].value.trim(),
    alturaMaxima: fieldsInputsTerrain[10].value.trim(),
  };

  fieldsInputsTerrain.forEach((field) => {
    field.value = '';
  });

  tipologiesTerrains.push(tipology);

  showTipologiesTerrains();
});

const deleteTipologyTerrenos = (id) => {
  let array = [];

  for (let i = 0; i < tipologiesTerrains.length; i++) {
    if (i !== id) {
      array.push(tipologiesTerrains[i]);
    }
  }
  tipologiesTerrains = [...array];

  showTipologiesTerrains();
};

const editTipologyTerrenos = (id, ...args) => {
  idEditTerrain = id;
  for (let i = 0; i < args.length; i++) {
    const element = args[i];
    fieldsInputsTerrainEdits[i].value = element;
  }
};

btnAddTipologyTerrainEdit.addEventListener('click', () => {
  const tipologyEdit = {
    modelo: fieldsInputsTerrainEdits[0].value.trim(),
    precio: fieldsInputsTerrainEdits[1].value.trim(),
    m2Terreno: fieldsInputsTerrainEdits[2].value.trim(),
    frente: fieldsInputsTerrainEdits[3].value.trim(),
    fondo: fieldsInputsTerrainEdits[4].value.trim(),
    precioM2: fieldsInputsTerrainEdits[5].value.trim(),
    cus: fieldsInputsTerrainEdits[6].value.trim(),
    cusTotal: fieldsInputsTerrainEdits[7].value.trim(),
    cos: fieldsInputsTerrainEdits[8].value.trim(),
    cosTotal: fieldsInputsTerrainEdits[9].value.trim(),
    alturaMaxima: fieldsInputsTerrainEdits[10].value.trim(),
  };

  tipologiesTerrains[idEditTerrain] = { ...tipologyEdit };

  showTipologiesTerrains();
});

// Añadir tipologías en las tablas de los casas

const btnAddTipologyHouses = document.querySelector('.btn-add-tipologia-casas');

const rowBodyHouses = document.querySelector('.t-body-casas');

const fieldsInputsHouses = document.querySelectorAll('.field-modal-casas');

const checkRadiosInputsHouses = document.querySelectorAll(
  '.radio-input-modal-casas'
);

let tipologiesHouses = [];
let idEditHouse;

const showTipologiesHouses = () => {
  let tr = '';

  if (tipologiesHouses) {
    tipologiesHouses.forEach((tipology, id) => {
      tr += `
        <tr>
          <th scope="row" class="text-center">${id + 1}</th>
          <td class="text-center">
            ${tipology.modelo}
          </td>
          <td class="text-center">
            <button 
            class="button-table" 
            data-bs-toggle="modal"
            data-bs-target="#modalFormHousesEdit" 
            onClick="editTipologyHouses(${id})">
              <i class="fa-solid fa-pen fa-lg pen-icon"></i>
            </button>
          </td>
          <td class="text-center">
            <button class="button-table" onClick="deleteTipologyHouses(${id})">
              <i
                class="fa-solid fa-trash fa-lg trash-icon"
              ></i>
            </button>
          </td>
        </tr>
      `;
    });
  }

  rowBodyHouses.innerHTML = tr;
};

showTipologiesHouses();

btnAddTipologyHouses.addEventListener('click', () => {
  const tipology = {
    modelo: fieldsInputsHouses[0].value.trim(),
    precio: fieldsInputsHouses[1].value.trim(),
    m2Construccion: fieldsInputsHouses[2].value.trim(),
    m2Terreno: fieldsInputsHouses[3].value.trim(),
    niveles: fieldsInputsHouses[4].value.trim(),
    recamaras: fieldsInputsHouses[5].value.trim(),
    banios: fieldsInputsHouses[6].value.trim(),
    halfBanios: fieldsInputsHouses[7].value.trim(),
    m2Terrazas: fieldsInputsHouses[8].value.trim(),
    condiciones: fieldsInputsHouses[9].value.trim(),
    cajones: fieldsInputsHouses[10].value.trim(),
    terrazas: [
      checkRadiosInputsHouses[0].checked,
      checkRadiosInputsHouses[1].checked,
    ],
    walkingCloset: [
      checkRadiosInputsHouses[2].checked,
      checkRadiosInputsHouses[3].checked,
    ],
    flex: [
      checkRadiosInputsHouses[4].checked,
      checkRadiosInputsHouses[5].checked,
    ],
    lockOff: [
      checkRadiosInputsHouses[6].checked,
      checkRadiosInputsHouses[7].checked,
    ],
    habServicio: [
      checkRadiosInputsHouses[8].checked,
      checkRadiosInputsHouses[9].checked,
    ],
    bodega: [
      checkRadiosInputsHouses[10].checked,
      checkRadiosInputsHouses[11].checked,
    ],
  };

  tipologiesHouses.push(tipology);

  fieldsInputsHouses.forEach((field) => {
    field.value = '';
  });

  checkRadiosInputsHouses.forEach((checkBox) => {
    checkBox.checked = false;
  });

  showTipologiesHouses();
});

const deleteTipologyHouses = (id) => {
  let array = [];

  for (let i = 0; i < tipologiesHouses.length; i++) {
    if (i !== id) {
      array.push(tipologiesHouses[i]);
    }
  }
  tipologiesHouses = [...array];

  showTipologiesHouses();
};
