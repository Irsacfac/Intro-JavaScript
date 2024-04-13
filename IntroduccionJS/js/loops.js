// For Loop
/* for(let i = 0; i < 10; i++){
    console.log(i);
} */

/* for(let i = 1; i <= 100; i++){
    if(i%2 == 0){
        console.log(`El númeo ${i} es par`);
    }else{
        console.log(`El númeo ${i} es impar`);
    }
} */

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

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

// While Loop
let i = 0;
while(i < carrito.length){
    console.log(carrito[i].nombre);
    i++;
}


//Do While Loop
i = 100;
do{
    console.log(i)
    i++;
} while(i < 10)