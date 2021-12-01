function subirTela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    // window.scrollTo(0, 0)
}

function decidirBotao(){
    if(window.scrollY === 0){
        //ocultar botao
        document.querySelector('.scrollbutton').style.display = 'none';        
    } else{
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

window.addEventListener('scroll', decidirBotao)