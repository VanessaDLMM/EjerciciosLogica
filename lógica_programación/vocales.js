//Dada una cadena de texto, devolver cuantas vocales tiene.

let texto="";

let contador=0;

function buscarVocales(texto){

    let cadena = texto.toLowerCase().split("");

    for(let i=0;i<cadena.length;i++){
        let char=cadena[i];
        if(char==="a"||char==="e"||char==="i"||char==="o"||
        char==="u"){
            contador++;
        }
    }
}

buscarVocales("Paradigma de Programacion orientada a objetos");
console.log("El número de vocales en la frase es: " + contador);