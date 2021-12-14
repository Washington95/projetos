let cartao = '1234123412341234';

let digito = cartao.slice(-3);

let cm = digito.padStart(16, '-');

console.log(`Este é seu cartão ? ${cm}`)