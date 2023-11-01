Swal.fire({
  title: 'Quieres guardar los cambios?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Guardar',
  denyButtonText: `No guardar`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Guardado!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Los cambios no fueron guardados', '', 'error')
  }
})