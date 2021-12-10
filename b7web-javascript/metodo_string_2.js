// Substitui a string por outra

let nome = 'Washington Luiz';

let resultado = nome.replace('Luiz', 'Ozório')

console.log(resultado)



//Deixa tudo maiúsculo

let nome = 'Washington Luiz';

let resultado = nome.toUpperCase();

console.log(resultado);


//Deixa tudo minúsculo

let nome = 'Washington Luiz';

let resultado = nome.toLowerCase();

console.log(resultado);


// Retira os espaços 

let nome = '          Washington           ';

let resultado = nome.trim().length;

console.log(resultado);


//cria um array com as strings

let nome = '1,2,3,4,5,6,7,8,9,10,Luiz';

let resultado = nome.split(',');

console.log(resultado);
