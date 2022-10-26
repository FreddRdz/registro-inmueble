const selectEntregaInput = document.querySelector('.select-entrega');
const selectAnioInput = document.querySelector('.select-anio');

selectEntregaInput.addEventListener('change', () => {
  if (selectEntregaInput.value === 'Entrega inmediata') {
    selectAnioInput.disabled = true;
  } else {
    selectAnioInput.disabled = false;
  }
});

// const inputPrecio = document.querySelector('.precio-input');
// const meterSquareInput = document.querySelector('.metros-cuadrados-input');

// meterSquareInput.addEventListener('change', () => {
//   if (meterSquareInput.value.length > 0) {
//     inputPrecio.disabled = true;
//     inputPrecio.value = '';
//   } else {
//     inputPrecio.disabled = false;
//   }
// });
