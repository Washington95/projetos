//Criando novo array com os dados do 1

let lista = [50, 85, 66, 99];
let lista2 = [];

lista2 = lista.map(function(item){
    return item * 2;
})


let res = lista2;

console.log(res)

// Filtra os elementos do Array 

let lista = [50, 85, 66, 99, 10];
let lista2 = [];

lista2 = lista.filter(function(item){
    if(item > 20){
        return true;
    }else{
        return false;
    }
});


let res = lista2;

console.log(res)

// Compara se o elemento atende o requisito / compara se um elemento atende o requisito (some)

let lista = [50, 85, 66, 99, 10];
let lista2 = [];

lista2 = lista.some(function(item){
    return (item > 20)? true: false

//     if(item > 20){
//         return true;
//     }else{
//         return false;
//     }
});


let res = lista2;

console.log(res)
