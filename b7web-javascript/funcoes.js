function alterar(oi){
    document.getElementById('titulo').innerHTML = oi;
    document.getElementById('campo').value = oi;
}

// alterar('Mudando');

function somar(x, y) {
    let total = x + y;


    return total
}

let resultado = somar(85, 55);

console.log(resultado)