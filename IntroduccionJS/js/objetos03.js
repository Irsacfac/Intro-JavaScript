//"use strict"  // Correr JS en modo estricto, seguir buenas practicas
// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

//Object.freeze(producto); //impide agregar eliminar propiedades
//producto.precio = 200; // tampoco permite modificar los valores

Object.seal(producto); //impide agregar eliminar propiedades
producto.imagen = 'imagen.jpg'; //permite modificar los existentes valores

//console.log(Object.isFrozen(producto))
console.log(Object.isSealed(producto))

console.log(producto);