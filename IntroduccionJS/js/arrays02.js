//Array Methods

const meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "Monitor 20 Pulgados", precio: 500},
    {nombre: "Televisión 50 Pulgados", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Parlantes", precio: 300},
    {nombre: "Laptop", precio: 800},
];

// forEach
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo sí existe")
    }
})

// Includes
// Includes es para arreglos planos
let resultado = meses.includes("Marzo");
console.log(resultado);

// Some
// Ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == "Celular"
})
resultado = carrito.some(producto => producto.nombre =="Celular Pro"); //arrow function


// Reduce
resultado = carrito.reduce(function(total, productoActual){
    return total + productoActual.precio;
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //arrow function


// Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});
resultado = carrito.filter(function(producto){
    return producto.nombre !== "Celular"
});

console.log(resultado);