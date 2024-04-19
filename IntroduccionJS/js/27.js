// POO

// Object literal
const producto = {
    nombre: "Tablet",
    precio: 500,
}

// Object Constructor

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio, disponile) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponile = disponile
}
// Crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function(){
    return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
}

const producto2 = new Producto("Monitor curvo 30\"", 800, true);
const producto3 = new Producto("Telefono", 500, false);
const producto4 = new Producto("Laptop", 900, true);

const cliente  = new Cliente("Juan", "De la Torre");

console.log(cliente);

function formatearProducto(producto){
    return `El Producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
