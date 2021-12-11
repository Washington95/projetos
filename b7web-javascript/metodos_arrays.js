//Trasnforma Array em String

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];

let res = lista.toString();

console.log(res)


//Trasnforma Array em String separando com um parametro escolhido

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];


let res = lista.join(' - ');

console.log(res)


// Mostra a posição do elemento no Array

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];

let res = lista.indexOf('Ovo');

console.log(res)


// Remove ultimo elemento da lista do Array

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];

lista.pop();

let res = lista;

console.log(res)


//Remove primeiro elemento da lista do Array

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];

lista.shift();

let res = lista;

console.log(res)



// Adiciona items no Array

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];

lista.push('Cacau');

let res = lista;

console.log(res)


// Altera um item no Array

let lista = ['Ovo', 'Banana', 'Maça', 'Uva'];

lista[0] = 'Laranja';

let res = lista;

console.log(res)

