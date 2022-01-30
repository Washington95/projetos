//Dados iniciais
let quadro = { 
    a1: '', a2: '', a3: '',
    b1: '', b2:'', b3:'',
    c1: '', c2: '', c3:''
};

let vez = '';
let venceu = '';
let jogo = 'false';



//Eventos
document.querySelector('.reset').addEventListener('click', reset);

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click', itemclick);
});

//Funções

function itemclick(event){
    let item = event.target.getAttribute('data-item');
    if(jogo && quadro[item] === ''){
        quadro[item] = vez;
        rquadro();
        proximo();
    }
}

function reset(){
    venceu = '';

    let random = Math.floor(Math.random() * 2);
    vez = (random === 0) ? 'X' : 'O';

    for(let i in quadro){
        quadro[i] = '';

    }

    jogo = true;

    rquadro();
    rinfo();


}

function rquadro(){
    for(let i in quadro){
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = quadro[i];
    }

    ganhou();

}

function rinfo(){
    document.querySelector('.vez').innerHTML = vez;
    document.querySelector('.resultado').innerHTML = venceu;
}

function proximo(){
    vez = (vez === 'X')? 'O' : 'X'
    rinfo();
}

function ganhou(){
    if(check('X')){
        venceu = 'O "x" venceu';
        jogo = false
    } else if(check('O')){
        venceu = 'O "o" venceu';
        jogo = false
    } else if(empate()){
        venceu = 'Deu empate';
        jogo = false
    }
}

function check(vez){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(let w in pos){
        let parray = pos[w].split(',');
        let hwon = parray.every(option => quadro[option] === vez);
        if(hwon){
            return true;
        }
    }
    return false;
}

function empate(){
    for(let i in quadro){
        if(quadro[i] === ''){
            return false;
        }
        
    }
    return true

}