let t;

function rodar (){
    t = setTimeout(function(){
        document.querySelector('#demo').innerHTML = 'Rodou'
    }, 3000);
}

function parar(){
    clearTimeout(t);
}