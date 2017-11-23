// es un componente con estado y se usa class
export class Chucheria {
    constructor(nombre, precio){
        // super();
        if(nombre===undefined || nombre===null || typeof nombre !== "string") { // se pone la negacion adelante de parentecis !() no directamente !nombre
            throw new Error("Es obligatorio poner el nombre");
        }
        this.nombre = nombre;
        this.precio = precio;
        this.description = "";
    }
}