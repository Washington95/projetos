/* 
    Manipulando Strings e Arrays

    Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

*/

let frase = "Eu quero viver o Amor"
let myarray = frase.split(" ")
let frasew = myarray.join("_")
console.log(frasew.toLowerCase())