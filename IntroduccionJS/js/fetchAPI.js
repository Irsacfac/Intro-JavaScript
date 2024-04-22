/* function obtenerEmpleados() {
    const archivo = "empleados.json";
    fetch(archivo)
        .then(resultado => resultado.json())
        .then( datos => {
            //console.log(datos);
            const { empleados } = datos;

            //console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado)

                //document.querySelector(".contenido").textContent += empleado.nombre;
            });
        })
} */

async function obtenerEmpleados(){
    const archivo = "empleados.json";
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();