//Tabla de multiplicar

function multiplicacion(num){

    let num1 = num;
    for(let i=1;i<=10; i++){

        let num2= num1 * i;
        console.log (num1 + "X" + i + '=' + num2);
    }
};

multiplicacion(10);