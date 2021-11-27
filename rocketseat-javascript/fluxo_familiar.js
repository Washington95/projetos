/*  Crie um objeto que possuirá 2 propiedades, ambas do tipo array:
    
    * receitas : []
    * despesas : []

Agora crie uma funcao que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo

*/

let familia = {
    receitas: [2500.10, 300, 1800, 598] ,
    dispesas: [3700, 298, 410, 154, 2200.15 ]
}

function soma(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function calcularBalanco(){
    const calcularReceitas = soma(familia.receitas)
    const calcularDispesas = soma(familia.dispesas)

    const total = calcularReceitas - calcularDispesas

    const ok =total>= 0

    let balanco = "negativo"

    if(ok){
        balanco = "positivo"
    }

    console.log(`Seu Saldo é ${balanco}: ${total.toFixed(2)} R$`)
}

calcularBalanco()