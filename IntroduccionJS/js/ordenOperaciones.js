// Orden de las operaciones

let resultado;

resultado = 20 + 30 * 2 // mismo orden de siempre
resultado = (20 + 30) * 2 // mismo orden de siempre
resultado = (100 + 200 + 300) * 0.2
resultado = (300 + 300) * 1.13

//console.log(resultado);

// Incrementos

let puntaje = 10;
console.log(++puntaje); // primero incrementa, luego hace la acción
console.log(puntaje++); // la operación se hace despues

puntaje--;

puntaje += 10;
console.log(puntaje);
