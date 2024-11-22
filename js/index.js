const BOTONES_DE_FILTRADO_DE_CATEGORIAS = document.querySelectorAll(".boton-categoria");
const TITULO_PRINCIPAL = document.querySelector("#titulo-principal");
const CANTIDAD_DE_PRODUCTOS_EN_CARRITO = document.querySelector("#numerito");
let botonesParaAgregarProductosAlCarrito = document.querySelectorAll(".producto-agregar");

// Funcion para mostrar los productos en el html

function mostrarProductos(productos = PRODUCTOS_ARRAY){
  const PRODUCTOS_SECTION = document.getElementById("productos");

  PRODUCTOS_SECTION.innerHTML = "";

  productos.forEach(producto => {
    const CARD_DIV = document.createElement('div');
    CARD_DIV.className = 'card-container';
    CARD_DIV.innerHTML = `
      <div class="card producto" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="categoria">Categoria: ${producto.categoria.nombre}</p>
            <p class="precio">Precio: ${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar al carrito</button>
          </div>
        </div>
    `;
    PRODUCTOS_SECTION.appendChild(CARD_DIV);
  });
  actualizarBotonesParaAgregarProductosAlCarrito()
}

// Array de productos
let PRODUCTOS_ARRAY = [];

function inicializarProductos() {
  fetch('productos.json') // Ruta a tu archivo JSON
    .then(response => response.json())
    .then(data => {
      PRODUCTOS_ARRAY = data; // Asignar los productos cargados a PRODUCTOS_ARRAY
      mostrarProductos(PRODUCTOS_ARRAY); // Llamar a la funcion para mostrar los productos
    })
    .catch(error => {
      console.error('Error al cargar los productos:', error);
    });
}

inicializarProductos();

// Filtro segun categorias

BOTONES_DE_FILTRADO_DE_CATEGORIAS.forEach(boton => {
  boton.addEventListener("click", (e) => {
    BOTONES_DE_FILTRADO_DE_CATEGORIAS.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const productosFiltrados = e.currentTarget.id !== "todos"
      ? PRODUCTOS_ARRAY.filter(producto => producto.categoria.id === e.currentTarget.id)
      : PRODUCTOS_ARRAY;

    TITULO_PRINCIPAL.innerText = productosFiltrados[0]?.categoria.nombre || "Todas las fotografías";
    mostrarProductos(productosFiltrados);
  });
});


// Funcion para actualizar los botones para agregar productos al carrito

function actualizarBotonesParaAgregarProductosAlCarrito() {
  botonesParaAgregarProductosAlCarrito = document.querySelectorAll(".producto-agregar");

  botonesParaAgregarProductosAlCarrito.forEach(boton => {
    boton.addEventListener("click", agregarProductoAlCarrito);
  } )
};

let PRODUCTOS_EN_CARRITO;


let productosEnCarritoLs = localStorage.getItem("productos-agregados-al-carrito");


// Buscar si hay algo almacenado en el LS y actualizar el numero en el index segun lo que hay almacenado.
PRODUCTOS_EN_CARRITO = localStorage.getItem("productos-agregados-al-carrito")
    ? JSON.parse(localStorage.getItem("productos-agregados-al-carrito"))
    : [];
actualizarCantidadDeProductosEnCarrito();


// Funcion para agregar productos al carrito
function agregarProductoAlCarrito(e) {
  const ID_BOTON = e.currentTarget.id;
  const PRODUCTO_AGREGADO = PRODUCTOS_ARRAY.find(producto => producto.id === ID_BOTON);

  const index = PRODUCTOS_EN_CARRITO.findIndex(producto => producto.id === ID_BOTON);

  // Utilizando el operador ternario
  index !== -1
    ? PRODUCTOS_EN_CARRITO[index].cantidad++
    : PRODUCTOS_EN_CARRITO.push({ ...PRODUCTO_AGREGADO, cantidad: 1 });

  actualizarCantidadDeProductosEnCarrito();
  localStorage.setItem("productos-agregados-al-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));
}

// Funcion que actualiza el numero que muestra la cantidad de productos agregados al carrito y no reinicia cuando volvemos del carrito al index.

function actualizarCantidadDeProductosEnCarrito() {
  let nuevaCANTIDAD_DE_PRODUCTOS_EN_CARRITO = PRODUCTOS_EN_CARRITO.reduce((acc, producto) => acc + producto.cantidad, 0);
  CANTIDAD_DE_PRODUCTOS_EN_CARRITO.innerText = nuevaCANTIDAD_DE_PRODUCTOS_EN_CARRITO;
}


