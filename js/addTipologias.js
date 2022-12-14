let images = [];
let imageId;
let imagesEdit = [];

function previewFiles() {
  // let preview = document.querySelector('.display-images');
  let files = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {
    // Asegurate que `file.name` coincida con el criterio de extensiones
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      let reader = new FileReader();

      reader.addEventListener(
        'load',
        function () {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          images.push(this.result);
          showImages(images);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}

function previewFilesEdit() {
  // let preview = document.querySelector('.display-images');
  let files = document.querySelector('.input-image-edit').files;

  function readAndPreview(file) {
    // Asegurate que `file.name` coincida con el criterio de extensiones
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      let reader = new FileReader();

      reader.addEventListener(
        'load',
        function () {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          imagesEdit.push(this.result);
          showImagesEdit(imagesEdit);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}

const showImages = (images) => {
  let div = '';

  if (images) {
    images.forEach((image, id) => {
      div += `
        <div class="col-3 mb-4">
          <img class="img-thumbnail imgs-tipologias" 
            onClick="showImageDetail(${id})"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop" src="${image}" />
        </div>
      `;
    });
  }

  document.querySelector('.display-images').innerHTML = div;
};

const showImagesEdit = (images) => {
  let div = '';

  if (images) {
    images.forEach((image, id) => {
      div += `
        <div class="col-3 mb-4">
          <img class="img-thumbnail imgs-tipologias" 
            onClick="showImageDetailEdit(${id})"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropEdit" src="${image}" />
        </div>
      `;
    });
  }

  document.querySelector('.display-images-edit').innerHTML = div;
};

const imageToShow = document.querySelector('.image-to-show');
const imageToShowEdit = document.querySelector('.image-to-show-edit');

const showImageDetail = (id) => {
  imageId = id;
  imageToShow.src = images[id];
};

const showImageDetailEdit = (id) => {
  imageId = id;
  imageToShowEdit.src = imagesEdit[id];
};

const btnDeleteImageDetail = document.querySelector('.delete-image-detail');
const btnDeleteImageDetailEdit = document.querySelector(
  '.delete-image-detail-edit'
);

btnDeleteImageDetail.addEventListener('click', () => {
  let array = [];

  for (let i = 0; i < images.length; i++) {
    const element = images[i];
    if (imageId !== i) {
      array.push(element);
    }
  }

  images = [...array];
  showImages(images);
});

btnDeleteImageDetailEdit.addEventListener('click', () => {
  let array = [];

  for (let i = 0; i < imagesEdit.length; i++) {
    const element = imagesEdit[i];
    if (imageId !== i) {
      array.push(element);
    }
  }

  imagesEdit = [...array];
  showImagesEdit(imagesEdit);
});

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
            onClick="editTipologyTerrenos(${id})">
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
    images: images,
  };

  fieldsInputsTerrain.forEach((field) => {
    field.value = '';
  });

  images = [];

  tipologiesTerrains.push(tipology);

  showImages(images);
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

const editTipologyTerrenos = (id) => {
  imagesEdit = [];
  idEditTerrain = id;
  const tipologyModified = { ...tipologiesTerrains[id] };

  fieldsInputsTerrainEdits[0].value = tipologyModified.modelo;
  fieldsInputsTerrainEdits[1].value = tipologyModified.precio;
  fieldsInputsTerrainEdits[2].value = tipologyModified.m2Terreno;
  fieldsInputsTerrainEdits[3].value = tipologyModified.frente;
  fieldsInputsTerrainEdits[4].value = tipologyModified.fondo;
  fieldsInputsTerrainEdits[5].value = tipologyModified.precioM2;
  fieldsInputsTerrainEdits[6].value = tipologyModified.cus;
  fieldsInputsTerrainEdits[7].value = tipologyModified.cusTotal;
  fieldsInputsTerrainEdits[8].value = tipologyModified.cos;
  fieldsInputsTerrainEdits[9].value = tipologyModified.cosTotal;
  fieldsInputsTerrainEdits[10].value = tipologyModified.cosTotal;

  imagesEdit = [...tipologyModified.images];

  showImagesEdit(tipologyModified.images);
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
    images: imagesEdit,
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

const fieldsInputsHousesEdit = document.querySelectorAll(
  '.field-modal-casas-edit'
);

const checkRadiosInputsHousesEdit = document.querySelectorAll(
  '.radio-input-modal-casas-edit'
);

const btnModifyTipologyHouse = document.querySelector(
  '.btn-add-tipologia-casas-edit'
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
            data-bs-target="#modalFormCasasEdit"
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

const editTipologyHouses = (id) => {
  idEditHouse = id;
  const tipologyModified = { ...tipologiesHouses[id] };

  fieldsInputsHousesEdit[0].value = tipologyModified.modelo;
  fieldsInputsHousesEdit[1].value = tipologyModified.precio;
  fieldsInputsHousesEdit[2].value = tipologyModified.m2Construccion;
  fieldsInputsHousesEdit[3].value = tipologyModified.m2Terreno;
  fieldsInputsHousesEdit[4].value = tipologyModified.niveles;
  fieldsInputsHousesEdit[5].value = tipologyModified.recamaras;
  fieldsInputsHousesEdit[6].value = tipologyModified.banios;
  fieldsInputsHousesEdit[7].value = tipologyModified.halfBanios;
  fieldsInputsHousesEdit[8].value = tipologyModified.m2Terrazas;
  fieldsInputsHousesEdit[9].value = tipologyModified.condiciones;
  fieldsInputsHousesEdit[10].value = tipologyModified.cajones;
  checkRadiosInputsHousesEdit[0].checked = tipologyModified.terrazas[0];
  checkRadiosInputsHousesEdit[1].checked = tipologyModified.terrazas[1];
  checkRadiosInputsHousesEdit[2].checked = tipologyModified.walkingCloset[0];
  checkRadiosInputsHousesEdit[3].checked = tipologyModified.walkingCloset[1];
  checkRadiosInputsHousesEdit[4].checked = tipologyModified.flex[0];
  checkRadiosInputsHousesEdit[5].checked = tipologyModified.flex[1];
  checkRadiosInputsHousesEdit[6].checked = tipologyModified.lockOff[0];
  checkRadiosInputsHousesEdit[7].checked = tipologyModified.lockOff[1];
  checkRadiosInputsHousesEdit[8].checked = tipologyModified.habServicio[0];
  checkRadiosInputsHousesEdit[9].checked = tipologyModified.habServicio[1];
  checkRadiosInputsHousesEdit[10].checked = tipologyModified.bodega[0];
  checkRadiosInputsHousesEdit[11].checked = tipologyModified.bodega[1];
};

btnModifyTipologyHouse.addEventListener('click', () => {
  const tipologyModified = {
    modelo: fieldsInputsHousesEdit[0].value.trim(),
    precio: fieldsInputsHousesEdit[1].value.trim(),
    m2Construccion: fieldsInputsHousesEdit[2].value.trim(),
    m2Terreno: fieldsInputsHousesEdit[3].value.trim(),
    niveles: fieldsInputsHousesEdit[4].value.trim(),
    recamaras: fieldsInputsHousesEdit[5].value.trim(),
    banios: fieldsInputsHousesEdit[6].value.trim(),
    halfBanios: fieldsInputsHousesEdit[7].value.trim(),
    m2Terrazas: fieldsInputsHousesEdit[8].value.trim(),
    condiciones: fieldsInputsHousesEdit[9].value.trim(),
    cajones: fieldsInputsHousesEdit[10].value.trim(),
    terrazas: [
      checkRadiosInputsHousesEdit[0].checked,
      checkRadiosInputsHousesEdit[1].checked,
    ],
    walkingCloset: [
      checkRadiosInputsHousesEdit[2].checked,
      checkRadiosInputsHousesEdit[3].checked,
    ],
    flex: [
      checkRadiosInputsHousesEdit[4].checked,
      checkRadiosInputsHousesEdit[5].checked,
    ],
    lockOff: [
      checkRadiosInputsHousesEdit[6].checked,
      checkRadiosInputsHousesEdit[7].checked,
    ],
    habServicio: [
      checkRadiosInputsHousesEdit[8].checked,
      checkRadiosInputsHousesEdit[9].checked,
    ],
    bodega: [
      checkRadiosInputsHousesEdit[10].checked,
      checkRadiosInputsHousesEdit[11].checked,
    ],
  };

  tipologiesHouses[idEditHouse] = { ...tipologyModified };

  showTipologiesHouses();
});

// Añadir tipologías en las tablas de los departamentos

const btnAddTipologyDepartments = document.querySelector(
  '.btn-add-tipologia-departamentos'
);

const rowBodyDepartments = document.querySelector('.t-body-departamentos');

const fieldsInputsDepartments = document.querySelectorAll(
  '.field-modal-departamentos'
);

const checkRadiosInputsDepartments = document.querySelectorAll(
  '.radio-input-modal-departamentos'
);

const fieldsInputsDepartmentsEdit = document.querySelectorAll(
  '.field-modal-departamentos-edit'
);

const checkRadiosInputsDepartmentsEdit = document.querySelectorAll(
  '.radio-input-modal-departamentos-edit'
);

const btnModifyTipologyDepartments = document.querySelector(
  '.btn-add-tipologia-departamentos-edit'
);

let tipologiesDepartments = [];
let idEditDepartments;

const showTipologiesDepartments = () => {
  let tr = '';

  if (tipologiesDepartments) {
    tipologiesDepartments.forEach((tipology, id) => {
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
            data-bs-target="#modalFormDepartamentosEdit"
            onClick="editTipologyDepartments(${id})">
              <i class="fa-solid fa-pen fa-lg pen-icon"></i>
            </button>
          </td>
          <td class="text-center">
            <button class="button-table" onClick="deleteTipologyDepartments(${id})">
              <i
                class="fa-solid fa-trash fa-lg trash-icon"
              ></i>
            </button>
          </td>
        </tr>
      `;
    });
  }

  rowBodyDepartments.innerHTML = tr;
};

showTipologiesDepartments();

btnAddTipologyDepartments.addEventListener('click', () => {
  const tipology = {
    modelo: fieldsInputsDepartments[0].value.trim(),
    precio: fieldsInputsDepartments[1].value.trim(),
    m2: fieldsInputsDepartments[2].value.trim(),
    precioM2: fieldsInputsDepartments[3].value.trim(),
    recamaras: fieldsInputsDepartments[4].value.trim(),
    banios: fieldsInputsDepartments[5].value.trim(),
    halfBanios: fieldsInputsDepartments[6].value.trim(),
    m2Terrazas: fieldsInputsDepartments[7].value.trim(),
    cajones: fieldsInputsDepartments[8].value.trim(),
    condiciones: fieldsInputsDepartments[9].value.trim(),
    terrazas: [
      checkRadiosInputsDepartments[0].checked,
      checkRadiosInputsDepartments[1].checked,
    ],
    walkingCloset: [
      checkRadiosInputsDepartments[2].checked,
      checkRadiosInputsDepartments[3].checked,
    ],
    flex: [
      checkRadiosInputsDepartments[4].checked,
      checkRadiosInputsDepartments[5].checked,
    ],
    lockOff: [
      checkRadiosInputsDepartments[6].checked,
      checkRadiosInputsDepartments[7].checked,
    ],
    habServicio: [
      checkRadiosInputsDepartments[8].checked,
      checkRadiosInputsDepartments[9].checked,
    ],
    bodega: [
      checkRadiosInputsDepartments[10].checked,
      checkRadiosInputsDepartments[11].checked,
    ],
  };

  tipologiesDepartments.push(tipology);

  fieldsInputsDepartments.forEach((field) => {
    field.value = '';
  });

  checkRadiosInputsDepartments.forEach((checkBox) => {
    checkBox.checked = false;
  });

  showTipologiesDepartments();
});

const deleteTipologyDepartments = (id) => {
  let array = [];

  for (let i = 0; i < tipologiesDepartments.length; i++) {
    if (i !== id) {
      array.push(tipologiesDepartments[i]);
    }
  }
  tipologiesDepartments = [...array];

  showTipologiesDepartments();
};

const editTipologyDepartments = (id) => {
  idEditDepartments = id;
  const tipologyModified = { ...tipologiesDepartments[id] };

  fieldsInputsDepartmentsEdit[0].value = tipologyModified.modelo;
  fieldsInputsDepartmentsEdit[1].value = tipologyModified.precio;
  fieldsInputsDepartmentsEdit[2].value = tipologyModified.m2;
  fieldsInputsDepartmentsEdit[3].value = tipologyModified.precioM2;
  fieldsInputsDepartmentsEdit[4].value = tipologyModified.recamaras;
  fieldsInputsDepartmentsEdit[5].value = tipologyModified.banios;
  fieldsInputsDepartmentsEdit[6].value = tipologyModified.halfBanios;
  fieldsInputsDepartmentsEdit[7].value = tipologyModified.m2Terrazas;
  fieldsInputsDepartmentsEdit[8].value = tipologyModified.cajones;
  fieldsInputsDepartmentsEdit[9].value = tipologyModified.condiciones;
  checkRadiosInputsDepartmentsEdit[0].checked = tipologyModified.terrazas[0];
  checkRadiosInputsDepartmentsEdit[1].checked = tipologyModified.terrazas[1];
  checkRadiosInputsDepartmentsEdit[2].checked =
    tipologyModified.walkingCloset[0];
  checkRadiosInputsDepartmentsEdit[3].checked =
    tipologyModified.walkingCloset[1];
  checkRadiosInputsDepartmentsEdit[4].checked = tipologyModified.flex[0];
  checkRadiosInputsDepartmentsEdit[5].checked = tipologyModified.flex[1];
  checkRadiosInputsDepartmentsEdit[6].checked = tipologyModified.lockOff[0];
  checkRadiosInputsDepartmentsEdit[7].checked = tipologyModified.lockOff[1];
  checkRadiosInputsDepartmentsEdit[8].checked = tipologyModified.habServicio[0];
  checkRadiosInputsDepartmentsEdit[9].checked = tipologyModified.habServicio[1];
  checkRadiosInputsDepartmentsEdit[10].checked = tipologyModified.bodega[0];
  checkRadiosInputsDepartmentsEdit[11].checked = tipologyModified.bodega[1];
};

btnModifyTipologyDepartments.addEventListener('click', () => {
  const tipologyModified = {
    modelo: fieldsInputsDepartmentsEdit[0].value.trim(),
    precio: fieldsInputsDepartmentsEdit[1].value.trim(),
    m2: fieldsInputsDepartmentsEdit[2].value.trim(),
    precioM2: fieldsInputsDepartmentsEdit[3].value.trim(),
    recamaras: fieldsInputsDepartmentsEdit[4].value.trim(),
    banios: fieldsInputsDepartmentsEdit[5].value.trim(),
    halfBanios: fieldsInputsDepartmentsEdit[6].value.trim(),
    m2Terrazas: fieldsInputsDepartmentsEdit[7].value.trim(),
    cajones: fieldsInputsDepartmentsEdit[8].value.trim(),
    condiciones: fieldsInputsDepartmentsEdit[9].value.trim(),
    terrazas: [
      checkRadiosInputsDepartmentsEdit[0].checked,
      checkRadiosInputsDepartmentsEdit[1].checked,
    ],
    walkingCloset: [
      checkRadiosInputsDepartmentsEdit[2].checked,
      checkRadiosInputsDepartmentsEdit[3].checked,
    ],
    flex: [
      checkRadiosInputsDepartmentsEdit[4].checked,
      checkRadiosInputsDepartmentsEdit[5].checked,
    ],
    lockOff: [
      checkRadiosInputsDepartmentsEdit[6].checked,
      checkRadiosInputsDepartmentsEdit[7].checked,
    ],
    habServicio: [
      checkRadiosInputsDepartmentsEdit[8].checked,
      checkRadiosInputsDepartmentsEdit[9].checked,
    ],
    bodega: [
      checkRadiosInputsDepartmentsEdit[10].checked,
      checkRadiosInputsDepartmentsEdit[11].checked,
    ],
  };

  tipologiesDepartments[idEditDepartments] = { ...tipologyModified };

  showTipologiesDepartments();
});
