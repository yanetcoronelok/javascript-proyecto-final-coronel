
let cantidad;
let formaDePago;
let tasaDescuento = 0;
let tasaRecargo = 0;
let precioPorProducto = 100; 



function calcularTotal (cantidad, formaDePago){

    descuento = 0;
    recargo = 0; 


     // Calcular descuentos y recargos según las condiciones

    if ( cantidad >= 5){
        descuento = cantidad * precioPorProducto * 0.05;
    } else if (formaDePago === 1){
        descuento = cantidad * precioPorProducto * 0.1;
    } else if (formaDePago === 3){
        recargo = cantidad * precioPorProducto * 0.05;
    } 


 // Calcular el total
 let total = (cantidad * precioPorProducto) - descuento + recargo; 

return total;


} 

cantidadProductosSeleccionados = parseInt(prompt("Cantidad de productos seleccionados: ")); 
formaDePago = parseInt(prompt("Ingrese forma de pago: 1-Efectivo, 2-Debito, 3-Credito"))


let totalVenta = calcularTotal(cantidadProductosSeleccionados, formaDePago);
console.log("El total de la venta es: $" + totalVenta);