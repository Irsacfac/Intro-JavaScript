// This

const reservacion = {
    nombre: "Isaac",
    apellido: "Ortega",
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar son ${this.total}`)
    },
}

console.log(reservacion.informacion());