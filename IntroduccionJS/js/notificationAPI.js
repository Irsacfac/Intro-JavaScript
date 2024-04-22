
const boton = document.querySelector("#boton");

boton.addEventListener("click",function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == "granted"){
    new Notification("esta es una notificación", {
        icon: "img/taza-cafe.png",
        body: "Codigo con Isaac"
    })
}