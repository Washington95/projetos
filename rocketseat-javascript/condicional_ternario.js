// Operador Condicional (ternário)

//Dependendo da condição nós receberemos valores diferentes

//condição então valor 1 se não valor 2 
//condition ? value 1 : value 2

//Exemplos
// Café da manhã top
let pao = true 
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log (niceBreakfast)


// Maior de 18

let age = 25
const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive)