// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    getPrecio(){
        return this.precio;
    }
}

const producto2 = new Producto("Monitor curvo 30\"", 800, true);
const producto3 = new Producto("Telefono", 500, false);

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}
const libro = new Libro("JavaScript la revolución", 120, "9103139811389139");
console.log(libro.formatearProducto());

console.log(producto2);
console.log(producto3);

console.log(producto2.formatearProducto());