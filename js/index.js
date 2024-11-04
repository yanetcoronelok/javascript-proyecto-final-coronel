// Array de productos
const PRODUCTOS_ARRAY = [
  {
    id: "fotoUrbana-01",
    titulo: "Foto Urbana 01",
    imagen: "../assets/photographies/urbanas/_MG_2603.jpg",
    categoria: {
      nombre: "Urbana",
      id: "urbana"
    },
    precio: 10
  },
  {
    id: "fotoUrbana-02",
    titulo: "Foto Urbana 02",
    imagen: "../assets/photographies/urbanas/_MG_2722.jpg",
    categoria: {
      nombre: "Urbana",
      id: "urbana"
    },
    precio: 10
  },
  {
    id: "fotoPaisaje-01",
    titulo: "Foto Paisaje 02",
    imagen: "../assets/photographies/paisajes/IMG_9885.jpg",
    categoria: {
      nombre: "Paisaje",
      id: "paisaje"
    },
    precio: 10
  },
  {
    id: "fotoPaisaje-02",
    titulo: "Foto Paisaje 02",
    imagen: "../assets/photographies/paisajes/IMG_9920.jpg",
    categoria: {
      nombre: "Paisaje",
      id: "paisaje"
    },
    precio: 10
  },
  {
    id: "fotoNaturaleza-01",
    titulo: "Foto Naturaleza 01",
    imagen: "../assets/photographies/naturaleza/20230324015124__MG_1725.jpg",
    categoria: {
      nombre: "Naturaleza",
      id: "naturaleza"
    },
    precio: 10
  },
  {
    id: "fotoNaturaleza-02",
    titulo: "Foto Naturaleza 02",
    imagen: "../assets/photographies/naturaleza/20230324042444__MG_1998.jpg",
    categoria: {
      nombre: "Naturaleza",
      id: "naturaleza"
    },
    precio: 10
  },
  {
    id: "fotoRetrato-01",
    titulo: "Foto Retrato 01",
    imagen: "../assets/photographies/retrato/_MG_0517.jpg",
    categoria: {
      nombre: "Retrato",
      id: "retrato"
    },
    precio: 10
  },
  {
    id: "fotoRetrato-02",
    titulo: "Foto Retrato 02",
    imagen: "../assets/photographies/retrato/_MG_1212.jpg",
    categoria: {
      nombre: "Retrato",
      id: "retrato"
    },
    precio: 10
  },
  {
    id: "fotoMascotas-01",
    titulo: "Foto Mascota 01",
    imagen: "../assets/photographies/mascotas/_MG_2313.jpg",
    categoria: {
      nombre: "Mascota",
      id: "mascota"
    },
    precio: 10
  },
  {
    id: "fotoMascotas-02",
    titulo: "Foto Mascota 02",
    imagen: "../assets/photographies/mascotas/_MG_2376.jpg",
    categoria: {
      nombre: "Mascota",
      id: "mascota"
    },
    precio: 10
  }
];


const CONTENEDOR_GALERIA_DE_PRODUCTOS = document.querySelector("#contenedor-galeria-de-productos");
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
mostrarProductos();


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


