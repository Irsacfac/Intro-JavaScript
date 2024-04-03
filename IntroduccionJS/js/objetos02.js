// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

// Forma anterior de hacerlo
const precioProducto = producto.precio;


// Destructuring (Nueva forma)
/*const {precio} = producto;
const {nombreProducto} = producto;*/
const {precio, nombreProducto} = producto; //para hacer multiples en una sola linea

//console.log(precioProducto);
console.log(precio);
console.log(nombreProducto);