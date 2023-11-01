
const productos = [
  { id: 1, "nombre": 'Remera', "precio": 20 },
  { id: 2, "nombre": 'Pantalón', "precio": 30 },
];

// Función para mostrar los productos en la página
function mostrarProductos() {
  const productosContainer = document.getElementById('productos');
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div>
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
      </div>
    `;
    productosContainer.appendChild(card);
  });
}
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar el carrito
function mostrarCarrito() {
  const carritoContainer = document.getElementById('carrito');
  carritoContainer.innerHTML = ''; // Limpia el contenido previo del carrito
  carrito.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.innerHTML = `
      <div>
        <h3>${item.nombre}</h3>
        <p>Precio: $${item.precio}</p>
        <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
      </div>
    `;
    carritoContainer.appendChild(itemCard);
  });
}
// Función para agregar productos al carrito
function agregarAlCarrito(id) {
  const productoSeleccionado = productos.find(producto => producto.id === id);
  if (productoSeleccionado) {
    carrito.push(productoSeleccionado);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Almaceno el carrito en el almacenamiento local
    mostrarCarrito();
  } else {
    console.error('Producto no encontrado');
  }
}
function eliminarDelCarrito(id) {
  const index = carrito.findIndex(item => item.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualiza el carrito en el almacenamiento local
    mostrarCarrito();
  } else {
    console.error('Producto no encontrado en el carrito');
  }
}

// Función que vacía el carrito
function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem('carrito'); // Elimina el carrito del almacenamiento local
  mostrarCarrito();
}


// Llama a la función para mostrar los productos al cargar la página
mostrarProductos();

