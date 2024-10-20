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

// Array vacio
let carrito = [];

// Funcion para mostrar los productos en el html
function mostrarProductos() {
  const PRODUCTOS_SECTION = document.getElementById('productos');
  PRODUCTOS_ARRAY.forEach(producto => {
    const CARD_DIV = document.createElement('div');
    CARD_DIV.className = 'card-container';
    CARD_DIV.innerHTML=`
      <div class="card producto" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="categoria">Categoria: ${producto.categoria.nombre}</p>
            <p class="precio">Precio: ${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Agregar al carrito</button>
          </div>
        </div>
    `
    PRODUCTOS_SECTION.appendChild(CARD_DIV);
  });
}

mostrarProductos();


// Funcion para agregar los productos al carrito




/* PRIMER PREENTREGA - CORREGIDA */

/* function login() {
  let claveIngresada;
  let intentos = 0;
  const MAX_INTENTOS = 3;
  const CLAVE_CORRECTA = "entrega1";

  do {
    claveIngresada = prompt("Ingresa la clave");
    intentos++;
    if (claveIngresada === CLAVE_CORRECTA) {
      return true;
    }
  } while (intentos < MAX_INTENTOS);
  return false;
}

function calcularTotal(cantidad, formaDePago) {
  const precioPorProducto = 100;
  let total = precioPorProducto * cantidad;

  // Calcular descuentos y recargos según las condiciones

  if (cantidad >= 5) {
  total -=  cantidad * precioPorProducto * 0.05;
  } 
  if (formaDePago === 1) {
    total -= cantidad * precioPorProducto * 0.1;
  } else if (formaDePago === 3) {
    total += cantidad * precioPorProducto * 0.08;
  }

  return total;
}

// Inicio del programa
let loginExitoso = login();

if (loginExitoso) {
  const cantidadProductosSeleccionados = parseInt(
    prompt("Cantidad de productos seleccionados: ")
  );
  const formaDePago = parseInt(
    prompt("Ingrese forma de pago: 1-Efectivo, 2-Debito, 3-Credito")
  );

  let totalVenta = calcularTotal(cantidadProductosSeleccionados, formaDePago);
  console.log("El total de la venta es: $" + totalVenta);
} else {
  alert("No se pudo loguear");
}
 */