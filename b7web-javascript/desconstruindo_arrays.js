let info = ['Washington Luiz', 'Gugu', 'Caio', '@gugu'];

let [, , sobrenome, insta] = info;

console.log(sobrenome, insta);

//Outra forma de ser feito

let [nome, sobrenome] = ['Washington', 'Luiz']

console.log(nome, sobrenome)

//Fazendo com Function

function criar(){
    return ['ooi', 'tchau', 'até logo'];
}

let [a,b,c] = criar();

console.log(a,b,c);
