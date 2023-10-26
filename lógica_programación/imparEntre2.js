//Dado 2 números, devolver cuantos números impares hay entre ellos.

let num1;
let num2;
let par=[];
let impar=[];
let contador=0;

function mostrarImpares(num1,num2){

    for(let i=num1; i<=num2;i++){

        if(i%2==0){
            par.push(i);
        }else{
            impar.push(i);
            contador++;
        }


    }
    console.log("El numero total de impares entre los números indicados son: " + contador);
    console.log(impar);
}

mostrarImpares(1,100);