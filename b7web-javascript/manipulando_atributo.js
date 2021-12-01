function trocarImagem(foto, sexo) {
    document.querySelector('.imagem').setAttribute('src','imagens/'+foto);
    document.querySelector('.imagem').setAttribute('data-genero',sexo);
}

function pegarSexo() {
    let s = document.querySelector('.imagem').getAttribute('data-genero');
    alert("O sexo é: "+s);
}