// throw

function nome(name = ' ') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(`Seja bem Vindo ${name}`)
}

//try ... catch
try {
    nome('Gugu')
} catch (a) {
    console.log(a)
}



console.log('após ao try/catch')