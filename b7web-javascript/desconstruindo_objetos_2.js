let pessoa = {
    nome: 'Washington',
    sobrenome: 'Luiz',
    idade: 90,
    social :{
        facebook:'Waa',
        instagram: {
            url:'@was',
            seguidores: 500
        }
    }
};

function pegarnomecompleto({nome, sobrenome, social:{instagram:{url:instagram}}}){
    return `${nome} ${sobrenome} Siga no instragram ${instagram}`
}

console.log(pegarnomecompleto(pessoa));



// let {nome:n  , sobrenome, idade, social:{instagram}} = pessoa;

// console.log(n, sobrenome, idade,instagram);