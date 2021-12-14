// function adicionar(...nomes){
//     console.log(nomes)
// }

// adicionar('Gugu', 'ola', 'João')

function adicionar(nome, ...novonomes){
    let juntos =[
        ...nome,
        ...novonomes

    ]
    return juntos;
}

let nome = ['Gugu', 'Arthur'];

let outros = adicionar(nome, 'Amanda', 'Jéssica' );

console.log(outros);