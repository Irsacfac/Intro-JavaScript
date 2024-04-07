//Declaración de la Funcion
function sumar(){
    console.log(10 + 10);
}

sumar(); //llamamos a la función

// Expresión de la función
// Si se hace de esta forma, JS la interpreta como unaa variable
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE
/* 
* Se llaman a sí mismas
* No sde recomienda para reutilizarce
*/
(function() {
    console.log("Esto es una función");
})();