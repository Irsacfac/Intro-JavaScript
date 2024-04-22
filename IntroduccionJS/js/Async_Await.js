// Async / Await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log("Descargando cliente");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000);
    } )
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log("Descargando pedidos");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 3000);
    } )
}

/* es por intervalos
setInterval(function(){
    console.log("set timeout")
}, 5000) */

// solo una vez
/* setTimeout(function(){
    console.log("set timeout")
}, 5000) */

// se agrega async al inicio para indicar que es asincrona
async function app(){
    try {
        // se indica donde se debe esperar con el await
        /* const clientes = await descargarNuevosClientes();
        console.log(clientes);
        const pedidos = await descargarUltimosPedidos();
        console.log(pedidos); */

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error){
        console.log(error);
    }
}

app();

console.log("Este código no se bloquea");