// Metodos unicos de arreglos

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

// ForEach
// para imprimir o mostrar en consola
carrito.forEach(producto => console.log(producto.nombre));
//const arreglo1 = carrito.forEach(producto => producto.nombre);

// map
// para nuevos arreglos
//carrito.map(producto => console.log(producto.nombre));
const arreglo2 = carrito.map(producto => producto.nombre);

/* console.log(arreglo1); */
console.log(arreglo2);