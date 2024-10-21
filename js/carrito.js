const CONTENEDOR_CARRITO_VACIO = document.querySelector("#carrito-vacio");
const CONTENEDOR_CARRITO_PRODUCTOS = document.querySelector("#carrito-productos");
const CONTENEDOR_CARRITO_ACCIONES = document.querySelector("#carrito-acciones");
const CONTENEDOR_CARRITO_COMPRADO = document.querySelector("#carrito-comprado");


function cargarProductosCarrito() {

    if (PRODUCTOS_EN_CARRITO && PRODUCTOS_EN_CARRITO.length > 0) {

        CONTENEDOR_CARRITO_VACIO.classList.add("disabled");
        CONTENEDOR_CARRITO_PRODUCTOS.classList.remove("disabled");
        CONTENEDOR_CARRITO_ACCIONES.classList.remove("disabled");
        CONTENEDOR_CARRITO_COMPRADO.classList.add("disabled");

        CONTENEDOR_CARRITO_PRODUCTOS.innerHTML = "";

        PRODUCTOS_EN_CARRITO.forEach(PRODUCTOS => {

            const DIV = document.createElement("DIV");
            DIV.classList.add("carrito-producto")
            DIV.innerHTML = `
              <img class="carrito-producto-imagen" src="${PRODUCTOS.imagen}" alt="${PRODUCTOS.titulo}" />
              <div class="carrito-producto-titulo">
                <small>${PRODUCTOS.titulo}</small>
                <h3>Foto1</h3>
              </div>
              <div class="carrito-producto-cantidad">
                <small>Quantity</small>
                <p>${PRODUCTOS.cantidad}</p>
              </div>
              <div class="carrito-producto-precio">
                <small>Price</small>
                <p>${PRODUCTOS.precio}</p>
              </div>
              <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${PRODUCTOS.precio * PRODUCTOS.cantidad}</p>
              </div>
              <button class="carrito-producto-eliminar" id="${PRODUCTOS.id}">
                <i class="bi bi-trash3"></i>
              </button>
        `;

            CONTENEDOR_CARRITO_PRODUCTOS.append(DIV);
        });


    } else {

        CONTENEDOR_CARRITO_VACIO.classList.remove("disabled");
        CONTENEDOR_CARRITO_PRODUCTOS.classList.add("disabled");
        CONTENEDOR_CARRITO_ACCIONES.classList.add("disabled");
        CONTENEDOR_CARRITO_COMPRADO.classList.add("disabled");

    };

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito()
