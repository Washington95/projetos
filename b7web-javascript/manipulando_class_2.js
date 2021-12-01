function trocar(){
    if(document.querySelector('button').classList.contains('preto')){
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('azul');
    } else{
        document.querySelector('button').classList.remove('azul');
        document.querySelector('button').classList.add('preto');
    }
}