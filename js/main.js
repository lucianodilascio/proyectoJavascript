const productos = [
    {
        id: "zapatilla-1",
        titulo: "Curry",
        img: "./img/curry.png",
        precio: 80000
    },
    {
        id: "zapatilla-2",
        titulo: "Lebron",
        img: "./img/lebron.png",
        precio: 80000
    },
    {
        id: "zapatilla-3",
        titulo: "Kobe",
        img: "./img/kobe.png",
        precio: 85000
    },
    {
        id: "zapatilla-4",
        titulo: "Jordan",
        img: "./img/jordan.png",
        precio: 85000
    }
]

const productosContenedor = document.querySelector("#productosContenedor");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col-xl-3", "col-md-6", "col-sm-12", "producto");
        div.innerHTML = `
            <div data-aos="zoom-in" class="card shadow p-3 mb-5 bg-body-tertiary rounded text-center">
                <img src="${producto.img}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h3 class="card-title">${producto.titulo}</h3>
                    <p class="card-text">$${producto.precio}</p>
                    <a href="#" class="btn colorBoton" id="${producto.id}">COMPRAR</a>
                </div>
            </div>
        `;
        productosContenedor.append(div);
    })
}

cargarProductos();



const carrito = [];

function agregarAlCarrito(id) {
    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        productoEnCarrito.cantidad++;
    } else {
        // Si el producto no está en el carrito, agrégalo
        const producto = productos.find(item => item.id === id);
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

function quitarDelCarrito(id) {
    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
        // Si el producto está en el carrito, disminuye la cantidad
        productoEnCarrito.cantidad--;

        if (productoEnCarrito.cantidad === 0) {
            // Si la cantidad es 0, quita el producto del carrito
            const index = carrito.indexOf(productoEnCarrito);
            carrito.splice(index, 1);
        }
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    // Actualiza visualmente la lista del carrito
    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            ${item.titulo} - Cantidad: ${item.cantidad} - Precio: $${item.precio * item.cantidad}
            <button class="btn btn-danger btn-sm ms-2" onclick="quitarDelCarrito('${item.id}')">Quitar</button>
        `;
        listaCarrito.appendChild(li);
    });
}

// Event listeners para los botones de "COMPRAR" en los productos
document.querySelectorAll(".colorBoton").forEach(boton => {
    boton.addEventListener("click", function(event) {
        const idProducto = event.target.id;
        agregarAlCarrito(idProducto);
    });
});



