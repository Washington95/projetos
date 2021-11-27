/* 
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 pra cima - A
    * entre 80 - 89  - B
    * entre 70 - 79  - C
    * entre 60 - 69  - D
    * menor que 60   - F

*/


function calcularNota(nota){

    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0

    if (notaA) {
        notaFinal ='Parabéns Passou de ano com nota A'
    } else if (notaB) {
        notaFinal ='Parabéns Passou de ano com nota B'
    } else if (notaC) {
        notaFinal ='Passou de ano, porém precisa melhorar pois sua nota foi C'
    } else if (notaD) {
        notaFinal ='Não passou de ano, pois sua nota foi D'
    } else if (notaF)
        notaFinal ='Repetiu pois sua nota foi F'
    else {
        notaFinal ='Nota Inválida'
    }

   return(notaFinal)
}

console.log(calcularNota(55))
console.log(calcularNota(100))
console.log(calcularNota(65))
console.log(calcularNota(85))
console.log(calcularNota(55))
console.log(calcularNota(25))
console.log(calcularNota(15))
console.log(calcularNota(-1))