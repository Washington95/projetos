let pessoa = {
    nome: 'Washington',
    sobrenome: 'Luiz',
    idade: 90,
    social :{
        facebook:'Waa',
        instagram: '@was'
    },
    nomecompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

let {nome:n  , sobrenome, idade} = pessoa;

console.log(n, sobrenome, idade);