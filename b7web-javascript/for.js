// FOR LOOP


// let texto = ''

// for (let i = 1; i < 51; i ++ ){
//     texto = texto + i + '</br>';
// }

// document.getElementById('demo').innerHTML = texto;


// FOR LOOP ARRAY


let carros = ['ferrari', 'fusca', 'gol', 'i30', 'kwid'];

let html = '<ul>';

for(let i in carros ){
    html+= '<li>'+ carros[i]+ '</li>';

}
html += '</ul>';

document.getElementById('demo').innerHTML = html;
