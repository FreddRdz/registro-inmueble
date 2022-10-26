const selectEntregaInput = document.querySelector('.select-entrega');
const selectAnioInput = document.querySelector('.select-anio');

selectEntregaInput.addEventListener('change', () => {
  if (selectEntregaInput.value === 'Entrega inmediata') {
    selectAnioInput.disabled = true;
  } else {
    selectAnioInput.disabled = false;
  }
});
