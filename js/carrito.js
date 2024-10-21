const PRODUCTOS_EN_CARRITO = JSON.parse(localStorage.getItem("productos-agregados-al-carrito"));

const CONTENEDOR_CARRITO_VACIO = document.querySelector("#carrito-vacio");
const CONTENEDOR_CARRITO_PRODUCTOS = document.querySelector("#carrito-productos");
const CONTENEDOR_CARRITO_ACCIONES = document.querySelector("#carrito-acciones");
const CONTENEDOR_CARRITO_COMPRADO = document.querySelector("#carrito-comprado");

if (PRODUCTOS_EN_CARRITO) {

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

}; 


/* const PRODUCTOS_EN_CARRITO = JSON.parse(localStorage.getItem("productos-agregados-al-carrito"))





*/