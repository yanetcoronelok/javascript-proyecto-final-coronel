const PRODUCTOS_EN_CARRITO = JSON.parse(localStorage.getItem("productos-agregados-al-carrito")) || [];
const CONTENEDOR_CARRITO_VACIO = document.querySelector("#carrito-vacio");
const CONTENEDOR_CARRITO_PRODUCTOS = document.querySelector("#carrito-productos");
const CONTENEDOR_CARRITO_ACCIONES = document.querySelector("#carrito-acciones");
const CONTENEDOR_CARRITO_COMPRADO = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const CONTENEDOR_TOTAL = document.querySelector("#total");
const BOTON_COMPRAR = document.querySelector("#carrito-acciones-comprar")


// funcion que muestra los productos agregados en el carrito.
function cargarProductosCarrito(){

    if (PRODUCTOS_EN_CARRITO && PRODUCTOS_EN_CARRITO.length > 0 ) {

        CONTENEDOR_CARRITO_VACIO.classList.add("disabled");
        CONTENEDOR_CARRITO_PRODUCTOS.classList.remove("disabled");
        CONTENEDOR_CARRITO_ACCIONES.classList.remove("disabled");
        CONTENEDOR_CARRITO_COMPRADO.classList.add("disabled");
    
        CONTENEDOR_CARRITO_PRODUCTOS.innerHTML = ""; 
    
        PRODUCTOS_EN_CARRITO.forEach(producto => {
            const DIV = document.createElement("div");
            DIV.classList.add("carrito-producto");
            DIV.innerHTML = `
                                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                                <div class="carrito-producto-titulo">
                                    <small>Titulo</small>
                                    <h3>${producto.titulo}</h3>
                                </div>
                                <div class="carrito-producto-cantidad">
                                    <small>Cantidad</small>
                                    <p>${producto.cantidad}</p>
                                </div>
                                <div class="carrito-producto-precio">
                                    <small>Precio</small>
                                    <p>${producto.precio}</p>
                                </div>
                                <div class="carrito-producto-subtotal">
                                    <small>Subtotal</small>
                                    <p>${producto.precio * producto.cantidad}</p>
                                </div>
                                <button class="carrito-producto-eliminar" id="${producto.id}"> <i class="bi bi-trash-fill"></i></button>
        `;
    
            CONTENEDOR_CARRITO_PRODUCTOS.append(DIV);
        })
    
    
    } else {
        CONTENEDOR_CARRITO_VACIO.classList.remove("disabled");
        CONTENEDOR_CARRITO_PRODUCTOS.classList.add("disabled");
        CONTENEDOR_CARRITO_ACCIONES.classList.add("disabled");
        CONTENEDOR_CARRITO_COMPRADO.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal()
}

cargarProductosCarrito();

// Funcion que actualiza el boton de eliminar cada vez que se carga un producto al carrito
function actualizarBotonesEliminar() {

    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

// funcion que elimina el item del carrito cuando se hace click en el icono
function eliminarDelCarrito(e){
    const ID_BOTON = e.currentTarget.id
    const INDEX = PRODUCTOS_EN_CARRITO.findIndex(producto => producto.id === ID_BOTON);

    PRODUCTOS_EN_CARRITO.splice(INDEX, 1); 
    cargarProductosCarrito();
    actualizarTotal();


    localStorage.setItem("productos-agregados-al-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));
};


// funcion para vaciar todo el carrito

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {

    PRODUCTOS_EN_CARRITO.length = 0;

    localStorage.setItem("productos-agregados-al-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));

    cargarProductosCarrito();
}

// Funcion para actualizar el total


function actualizarTotal() {

    const TOTAL_CALCULADO = PRODUCTOS_EN_CARRITO.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
     total.innerText = `$${TOTAL_CALCULADO}`;


}



// Funcion para el boton comprar

BOTON_COMPRAR.addEventListener("click", comprarCarrito);


function comprarCarrito() {
    PRODUCTOS_EN_CARRITO.length = 0;
    localStorage.setItem("productos-agregados-al-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));
    
    CONTENEDOR_CARRITO_VACIO.classList.add("disabled");
    CONTENEDOR_CARRITO_PRODUCTOS.classList.add("disabled");
    CONTENEDOR_CARRITO_ACCIONES.classList.add("disabled");
    CONTENEDOR_CARRITO_COMPRADO.classList.remove("disabled");
};

