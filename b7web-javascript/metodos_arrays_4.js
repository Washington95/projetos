//Procura elemento especifico no Array, Posição do elemento no Array

// let lista = [50, 85, 66, 99, 10];
// let lista2 = [];

// lista2 = lista.findIndex(function(item){
//     return (item == 99)? true : false
// });


// let res = lista2;


// console.log(res)


 let lista = [
    {id:1, nome:'Washington', sobrenome:'Luiz'},
    {id:2, nome:'Augusto', sobrenome:'Lu'},
    {id:3, nome:'Gugu', sobrenome:'Lo'}
];
 
let pessoa = lista.find(function(item){
    return(item.id == 2)? true: false
})

let res = pessoa;

console.log(res)