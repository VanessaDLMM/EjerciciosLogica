class Estudiante {

    constructor(nombre, correo){
        this.nombre = nombre; // nombre propiedad = nombre parametro
        this.correo = correo;
        this.asignaturas = [];
    }

    get correoElectronico(){
        return this.correo + "@ilernaonline.com";
    }

    muestraAsignaturas(){
        return this.asignaturas;
    }

    matricular(asignatura){
        this.asignaturas.push(asignatura);
        return "Lista de asignaturas: " + this.asignaturas;
    }

    aprobar(asignatura){
        let posicion = this.asignaturas.indexOf(this.asignatura);
        this.asignaturas.splice(posicion, -1);
        return "Lista de asignaturas: " + this.asignaturas;
    }

    limpiarAsignaturas(){
        this.asignaturas = [];
        return "Se han vaciado las asignaturas";
    }
}

let vane = new Estudiante ("Vane", "vmorena");
console.log(vane);
console.log(vane.correo);
console.log(vane.matricular("Cliente"));
console.log(vane.aprobar("Cliente"));
console.log(vane.muestraAsignaturas());
console.log(vane.limpiarAsignaturas());