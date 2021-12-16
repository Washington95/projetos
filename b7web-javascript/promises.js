function pegartemperatura (){
    return new Promise (function(resolve, reject){
        console.log("pegando temperatura...");

        setTimeout(function (){
            resolve('40 graus');
        }, 1000)
    });
}

//USANDO PROMISE

let temp = pegartemperatura();

temp.then(function (a){
    console.log(a)
});