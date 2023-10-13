/*Dada una frase, buscar cuantas veces aparece la palabra pasada por parametro en ella. 
  Ambos deben pasar como parámetros, no tener en cuenta mayusculas/minusculas.

*/

let frase = '';
let palabra = '';

function contadorPalabras(frase, palabra){

    let fraseMinus = frase.toLowerCase();
    let palabraMinus = palabra.toLowerCase();
    let contador = 1;
    if (fraseMinus.includes(palabraMinus)){
        
        contador++;
        console.log('La palabra esta incluida en la frase ' + contador + ' veces');
    }else{
        console.log('La palabra no esta incluida en la frase');
    }
    

}