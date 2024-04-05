// Arreglos o Arrays

const numeros = [10,20,30,40,50] // arreglos

//console.log(numeros);

//const meses = new Array("Enero", "Febrero", "Marzo", "Abril");


/* Permite el uso de varios tipos de valores
const arreglo = ["Hola", 10, true, "si", null, {nombre: "Isaac", trabajo: "programador"}, [1,22,5]];
console.log(arreglo);*/

// Acceder a los valores de un array

/* console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[20]); */

// Largo de un array

//console.log(meses.length);

// iterar el array

/* meses.forEach(function(mes){
    console.log(mes);
}); */

// Agregar elementos al final
/* numeros[5] = 60; // no es comun, ya que se requiere saber el largo del arreglo
numeros[6] = 70;  */
numeros.push(60);
numeros.push(70, 80); // actualmente se recomienda no modificar los datos originales

// Agregar al inicio del arreglo
numeros.unshift(-30,-20,-10);
console.table(numeros);

const meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// Eliminar elementos del array

/* meses.pop(); // eliminar el ultimo elemento
meses.shift(); // elimina el primer elemento */
meses.splice(2, 1); // eliminar elementos en la posición especifica, primero posicion del elemento a eliminar y despues la cantidad de elemeentos a eliminar a partir de esa posición
console.table(meses);

// Rest Operator o Spread Operator
// Buenas practicas ya que no se modifica el arreglo original
//const nuevoArreglo = [...meses, "Junio"]; //equivale al push 
//const nuevoArreglo = ["Junio", ...meses]; //equivale al unshift
console.log(nuevoArreglo);