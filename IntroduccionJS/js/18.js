//las funciones pueden tener valores por default
function sumar(numero1 = 0, numero2 = 0){ // numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}
sumar(10); // Argumentos o los valores reales
sumar(3, 6);
sumar();

const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);