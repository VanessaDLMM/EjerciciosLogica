class coche{

    constructor(){
        this.modelo = ''; 
        this.velocidad = '';
        this.antiguedad = '';

    }

    aumentarVelocidad(){
        this.velocidad += 1 ;

    }

    disminuirVelocidad(){

        this.velocidad -= 1;
    }


}

class Autobus extends coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad); //Propiedades class padre
        this.altura = ''; //Añadir propiedad
    }

    
}

var coche1 = new coche ('BMW', 200, 1989); //Crear objeto
var coche2 = new coche ('Audi', 250, 2020);
var coche3 = new coche ('Renault', 150, 2023);

var Autobus1 = new Autobus ('Pegasus', 120, 2000, 5);
Autobus1.aumentarVelocidad(); //Usar metodos de la clase padre

console.log(coche1);
coche1.aumentarVelocidad();

//Los metodos modifican el objeto. Si aumento la velocidad, modifica el valor