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
let agregarBotones = document.querySelectorAll(".agregarProducto");
const cantidad = document.querySelector("#cantidad");

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
                    <button class="agregarProducto btnColor" id="${producto.id}">COMPRAR</button> 
                </div>
            </div>
        `;
        productosContenedor.append(div);
    })
    agregarBtn();

}

cargarProductos(productos);

function agregarBtn() {
    agregarBotones = document.querySelectorAll(".agregarProducto");

    agregarBotones.forEach(boton => {
        boton.addEventListener("click", añadirAlCarrito);

    });

}

const productosDelCarrito = [];

function añadirAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoSumado = productos.find(producto => producto.id === idBoton);

    if (productosDelCarrito.some(producto => producto.id === idBoton)) {
        const index = productosDelCarrito.findIndex(producto => producto.id === idBoton);
productosDelCarrito[index].cantidad++;

    } else {
        productoSumado.cantidad = 1;
        productosDelCarrito.push(productoSumado);

    }

    sumarProductos();

    localStorage.setItem("carritoProductos", JSON.stringify(productosDelCarrito));
    console.log(productosDelCarrito)
}

function sumarProductos () {
 let cantidadNueva = productosDelCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidad.innerText = cantidadNueva
}



