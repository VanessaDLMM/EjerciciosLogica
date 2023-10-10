/*
    Promete sacar un dato, de forma asincrona. Recibe dato positivo (resolve) o no resuelta (reject).
    Para datos que tardan un poco en llegar, paraliza la ejecución del codigo durante n segundos
*/

var saludar = new Promise ((resolve, reject)=> {
    setTimeout(() => {
        let saludo = 'Hola a todos!!';

        if(saludo){
            resolve(saludo);

        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);

});

saludar.then(resultado => {  //Cuando devuelve el resultado de la promesa se ejecuta el codigo del then
    alert(resultado);

})
.catch(err => {
    alert(err)
});


