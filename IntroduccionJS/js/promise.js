const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = false;

    if(auth){
        resolve("Usuario autenticado"); // el primose se cumple
    }else{
        reject("No se pudo iniciar sesión"); // el promise no se cumple
    }
});

//console.log(usuarioAutenticado);
usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))


/* En los promise existen 3 valores
* Pending : Ne se cumplio, pero tampoco se ha rechasado
* Fulfilled : Ya se cumplio 
* Reject : Se ha rechazado o no se pudo cumplir
*/