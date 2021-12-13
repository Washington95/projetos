/// Juntando Arrays

let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros);

//Juntando Objetos 

let info = {
    nome:'Washington',
    sobrenome: 'Luiz',
    idade: 26
};

let novainfo ={
    ...info,
    cidade: 'São José',
    estado: 'São Paulo',
    pais: 'Brasil'
}

function adicionarinfo(info){
    let novainfo = {
        ...info,
        status: 0,
        token: 55561,
        data_cadastro: 22
    }
    return novainfo;
}

console.log(adicionarinfo({nome:'Gugu', sobrenome:'Luiz'}));