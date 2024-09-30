function login() {
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
