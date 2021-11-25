// function expression
// function anonymous

//parâmetros (parameters)

let total = 0

const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 22
let number2 = 98

console.log(`o numero 1 é ${number1}`)
console.log(`o number 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)