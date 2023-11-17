let productosDelCarrito = localStorage.getItem("carritoProductos");
productosDelCarrito = JSON.parse(productosDelCarrito);

const envueltoCarroVacio = document.querySelector("#carritoVacio");
const envueltoCarroProductos = document.querySelector("#carritoProductos");
const envueltoCarritoAcciones = document.querySelector("#carritoAcciones");
const envueltoCarritoComprado = document.querySelector("#carritoComprado");
let botonEliminacion = document.querySelectorAll(".carritoProductoEliminar");
const botonVaciar = document.querySelector("#vaciarCarrito");
const contenidoTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#comprarAhora");



function cargarProductosCarrito() {
    if (productosDelCarrito && productosDelCarrito.length > 0) {



        envueltoCarroVacio.classList.add("oculto");
        envueltoCarroProductos.classList.remove("oculto");
        envueltoCarritoAcciones.classList.remove("oculto");
        envueltoCarritoComprado.classList.add("oculto");

        envueltoCarroProductos.innerHTML = "";


        productosDelCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carritoProducto");
            div.innerHTML = `
            <img class="carritoProductoImg" src="${producto.img}" alt="${producto.titulo}">
                        <div class="carritoProductoTitulo">
                            <h4>Zapatilla</h4>
                            <h2>${producto.titulo}</h2>
                        </div>
                        <div class="carritoProductoCantidad">
                            <h4>Cantidad</h4>
                            <p class= "numeritoCentrado">${producto.cantidad}</p>
                        </div>
                        <div class="carritoProductoPrecio">
                            <h4>Precio</h4>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carritoProductoSubtotal">
                            <h4>Subtotal</h4>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="carritoProductoEliminar" id="${producto.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg>
                        </button>
            `;

            envueltoCarroProductos.append(div);

        })

    } else {

        envueltoCarroVacio.classList.remove("oculto");
        envueltoCarroProductos.classList.add("oculto");
        envueltoCarritoAcciones.classList.add("oculto");
        envueltoCarritoComprado.classList.add("oculto");

    }

    btnEliminar();
    totalActualizado();
}

cargarProductosCarrito();


function btnEliminar() {
    botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);

    });

}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosDelCarrito.findIndex(producto => producto.id === idBoton);

    if (index !== -1) {
        if (productosDelCarrito[index].cantidad > 1) {
            
            productosDelCarrito[index].cantidad -= 1;
        } else {
            
            productosDelCarrito.splice(index, 1);
        }

        cargarProductosCarrito();

        localStorage.setItem("carritoProductos", JSON.stringify(productosDelCarrito));
    }
}
botonVaciar.addEventListener("click", carritoVacio);

function carritoVacio() {

productosDelCarrito.length = 0;
localStorage.setItem("carritoProductos", JSON.stringify(productosDelCarrito));
cargarProductosCarrito();

}

function totalActualizado() {
const totalCalculado = productosDelCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
total.innerText = `$${totalCalculado}`;

}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {

productosDelCarrito.length = 0;
localStorage.setItem("carritoProductos", JSON.stringify(productosDelCarrito));

envueltoCarroVacio.classList.add("oculto");
envueltoCarroProductos.classList.add("oculto");
envueltoCarritoAcciones.classList.add("oculto");
envueltoCarritoComprado.classList.remove("oculto");

}