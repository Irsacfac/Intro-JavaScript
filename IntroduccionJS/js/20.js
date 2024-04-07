// Métodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción con el id: ${id}`);
    },
    pausar : function() {
        console.log("Pausando...")
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}` )
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}` )
    },

}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion con el id: ${id}`)
}
//console.log(reproductor);

reproductor.reproducir(3849);
reproductor.pausar();
reproductor.borrarCancion(5);
reproductor.crearPlaylist("Mi musica");
reproductor.reproducirPlaylist("Mi musica");