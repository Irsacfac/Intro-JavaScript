const producto = "Monitor de 20 Pulgadas";
const producto2 = String("Monitor HD");
const producto3 = new String("Monitor 50 pulgadas")
const producto4 = "Monitor de 20\""; //para usal el signo de: "
const producto5 = 'Monitor de 20"'; //otra forma de escribir: "

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";

console.log(tweet.length);

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

// IndexOf (retorna una posición)
console.log(tweet.indexOf("JavaScript")); //encontrar elemento en un string
console.log(producto2.indexOf("Tablet")); //numero negativo indica que no se encontró

// Include (retorna un boolean)

console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));