/*  a = a * a
    b = b * b
    c = c * c
    El triple pitagorico encuentra 3 numeros enteros que cumplen con la ecuacion de pitagoras,
    hasta un numero dado.
    Si me dan un 10, el triple sera 3,4,5 - 6,8,10.

    (a*a) + (b*b) = (c*c)
*/
let triple = [];
let numMaxFunct = (numMax) =>{

    for (let i = 1; i<numMax; i++){
        var a = i * i;
        
        for (let j = i + 1; j<numMax; j++){
            var b = j * j;
            

            for (let k = j + 1; k<numMax; k++){
                var c = k * k;
                if (c === a + b){
                  triple.push([i,j,k]);
              
                } 
            }
        }
        

    }

}
numMaxFunct(10);
// Update header text
document.querySelector('#header').innerHTML = triple;

// Log to console
console.log(triple);

//TODO muestra el primer triple pero no los demas. Incluir bucle que lo resuelva