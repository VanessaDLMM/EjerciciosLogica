let num;
let peldaño="[_]"

function escalera(num){

    for(let i=1;i<=num;i++){
        let escalon = peldaño.repeat(i);
        console.log(escalon);
    }

}

escalera(10);